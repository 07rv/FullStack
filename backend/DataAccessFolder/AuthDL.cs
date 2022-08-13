using backend.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Common;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace backend.DataAccessFolder
{
    public class AuthDL : IAuthDL
    {
        public readonly IConfiguration _configuration;
        private readonly string _connectionString;
        public AuthDL(IConfiguration configuration)
        {
            _configuration = configuration;
            this._connectionString = this._configuration.GetConnectionString("Database");
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(this._connectionString);
        }

        public async Task<SignInResponse> SignIn(SignInRequest signInRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            signInResponse.IsSuccess = true;
            signInResponse.Message = "Sucessfull";
            SqlConnection sqlConnection = GetConnection();
            try
            {
                if (sqlConnection.State != System.Data.ConnectionState.Open)
                    await sqlConnection.OpenAsync();

                using (SqlCommand sqlCommand = new SqlCommand("dbo.SignInUsers", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue("@EmailId", signInRequest.emailid);
                    sqlCommand.Parameters.AddWithValue("@Password", signInRequest.password);

                    using (DbDataReader dataReader = await sqlCommand.ExecuteReaderAsync())
                    {
                        if (dataReader.HasRows)
                        {
                            await dataReader.ReadAsync();
                            signInResponse.IsSuccess = true;
                            signInResponse.Message = "Sucessfull";
                            UserInfo userInfo = new UserInfo();
                            userInfo.firstName = dataReader["FirstName"] != DBNull.Value ? Convert.ToString(dataReader["FirstName"]) : "";
                            userInfo.lastName = dataReader["LastName"] != DBNull.Value ? Convert.ToString(dataReader["LastName"]) : "";
                            userInfo.emailid = dataReader["EmailId"] != DBNull.Value ? Convert.ToString(dataReader["EmailId"]) : "";
                            userInfo.address = dataReader["Address"] != DBNull.Value ? Convert.ToString(dataReader["Address"]) : "";
                            userInfo.age = dataReader["Age"] != DBNull.Value ? Convert.ToInt32(dataReader["Age"]) : 0;

                            signInResponse.Token = GenerateJwt(userInfo);
                        }
                        else
                        {
                            signInResponse.IsSuccess = false;
                            signInResponse.Message = "Login Failed";
                        }
                    }
                    
                }
            }
            catch (Exception ex)
            {
                signInResponse.IsSuccess = false;
                signInResponse.Message = ex.Message;
            }
            finally
            {
                await sqlConnection.CloseAsync();
                await sqlConnection.DisposeAsync();
            }
            return signInResponse;
        }

        public async Task<SignUpResponse> SignUp(SignUpRequest signUpRequest)
        {
            SignUpResponse signUpResponse = new SignUpResponse();
            signUpResponse.IsSuccess = true;
            signUpResponse.Message = "Sucessfull";
            SqlConnection sqlConnection = GetConnection();
            try
            {
                if (!signUpRequest.password.Equals(signUpRequest.confirmPassword))
                {
                    signUpResponse.IsSuccess = false;
                    signUpResponse.Message = "Password and confirm Password not match";
                    return signUpResponse;
                }
                if(sqlConnection.State != ConnectionState.Open)
                    await sqlConnection.OpenAsync();

                using(SqlCommand sqlCommand = new SqlCommand("dbo.InsertNewUsers", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue("@EmailId", signUpRequest.emailid);
                    sqlCommand.Parameters.AddWithValue("@FirstName", signUpRequest.firstName);
                    sqlCommand.Parameters.AddWithValue("@LastName", signUpRequest.lastName);
                    sqlCommand.Parameters.AddWithValue("@Password", signUpRequest.password);
                    sqlCommand.Parameters.AddWithValue("@Age", signUpRequest.age);
                    sqlCommand.Parameters.AddWithValue("@Address", signUpRequest.address);

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if(status <= 0)
                    {
                        signUpResponse.IsSuccess = false;
                        signUpResponse.Message = "Something went wrong";
                        return signUpResponse;
                    }
                }
            }
            catch(Exception ex)
            {
                signUpResponse.IsSuccess = false;
                signUpResponse.Message = ex.Message;
            }
            finally
            {
                await sqlConnection.CloseAsync();
                await sqlConnection.DisposeAsync();
            }
            return signUpResponse;
        }

        public async Task<DoctorsResponse> GetDoctors()
        {
            DoctorsResponse doctorsResponse = new DoctorsResponse();
            doctorsResponse.IsSuccess = true;
            doctorsResponse.Message = "Sucessfull";
            SqlConnection sqlConnection = GetConnection();
            try
            {
                if (sqlConnection.State != ConnectionState.Open)
                    await sqlConnection.OpenAsync();
                using (SqlCommand sqlCommand = new SqlCommand("dbo.GetDoctor", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.CommandTimeout = 180;

                    using (DbDataReader dataReader = await sqlCommand.ExecuteReaderAsync())
                    {
                        if (dataReader.HasRows)
                        {
                            doctorsResponse.IsSuccess = true;
                            doctorsResponse.Message = "Sucessfull";
                            List<DoctorsInfo> doctorsInfos = new List<DoctorsInfo>();
                            doctorsResponse.Doctorinfo = doctorsInfos;
                            while (await dataReader.ReadAsync())
                            {
                                DoctorsInfo doctorsInfo = new DoctorsInfo();
                                doctorsInfo.firstName = dataReader["FirstName"] != DBNull.Value ? Convert.ToString(dataReader["FirstName"]) : "";
                                doctorsInfo.lastName = dataReader["LastName"] != DBNull.Value ? Convert.ToString(dataReader["LastName"]) : "";
                                doctorsInfo.emailid = dataReader["EmailId"] != DBNull.Value ? Convert.ToString(dataReader["EmailId"]) : "";
                                doctorsInfo.award = dataReader["Award"] != DBNull.Value ? Convert.ToString(dataReader["Award"]) : "";
                                doctorsInfo.age = dataReader["Age"] != DBNull.Value ? Convert.ToInt32(dataReader["Age"]) : 0;
                                doctorsInfo.experience = dataReader["Experience"] != DBNull.Value ? Convert.ToInt32(dataReader["Experience"]) : 0;

                                doctorsInfos.Add(doctorsInfo);
                            }

                        }
                        else
                        {
                            doctorsResponse.IsSuccess = false;
                            doctorsResponse.Message = "Unsucessfull";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                doctorsResponse.IsSuccess = false;
                doctorsResponse.Message = ex.Message;
            }

            return doctorsResponse;
        }

        public async Task<SignInResponse> UpdateUser(SignUpRequest signUpRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            signInResponse.IsSuccess = true;
            signInResponse.Message = "Sucessfull";
            SqlConnection sqlConnection = GetConnection();
            try
            {
                if (sqlConnection.State != System.Data.ConnectionState.Open)
                    await sqlConnection.OpenAsync();

                using (SqlCommand sqlCommand = new SqlCommand("dbo.UpdateUser", sqlConnection))
                {
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue("@EmailId", signUpRequest.emailid);
                    sqlCommand.Parameters.AddWithValue("@FirstName", signUpRequest.firstName);
                    sqlCommand.Parameters.AddWithValue("@LastName", signUpRequest.lastName);
                    sqlCommand.Parameters.AddWithValue("@Age", signUpRequest.age);
                    sqlCommand.Parameters.AddWithValue("@Address", signUpRequest.address);

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if(status <= 0)
                    {
                        signInResponse.IsSuccess = false;
                        signInResponse.Message = "Un Sucessfull";
                        return signInResponse;
                    }
                    UserInfo userInfo = new UserInfo();
                    userInfo.firstName = signUpRequest.firstName;
                    userInfo.lastName = signUpRequest.lastName;
                    userInfo.emailid = signUpRequest.emailid;
                    userInfo.address = signUpRequest.address;
                    userInfo.age = Convert.ToInt16(signUpRequest.age);

                    signInResponse.Token = GenerateJwt(userInfo);
                }
            }
            catch (Exception ex)
            {
                signInResponse.IsSuccess = false;
                signInResponse.Message = ex.Message;
            }
            finally
            {
                await sqlConnection.CloseAsync();
                await sqlConnection.DisposeAsync();
            }
            return signInResponse;
        }

        public string GenerateJwt(UserInfo userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("FirstName", userInfo.firstName),
                new Claim("LastName", userInfo.lastName),
                new Claim("EmailId", userInfo.emailid),
                new Claim("Address", userInfo.address),
                new Claim("Age", Convert.ToString(userInfo.age)),
                new Claim("Date", DateTime.Now.ToString()),
            };

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                                _configuration["Jwt:Audiance"],
                                claims,
                                expires: DateTime.Now.AddMinutes(120),
                                signingCredentials: credentials);

            string Data = new JwtSecurityTokenHandler().WriteToken(token);
            return Data;
        }
    }
}
