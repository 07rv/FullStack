using backend.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Common;

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
                            signInResponse.Message = "Login Sucessfull";
                        }
                        else
                        {
                            signInResponse.IsSuccess = false;
                            signInResponse.Message = "Login Unucessfull";
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
            throw new NotImplementedException();
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

        public Task<DoctorsResponse> CreateDoctor(DoctorsRequest doctorsRequest)
        {
            DoctorsResponse doctorsResponse = new DoctorsResponse();
            doctorsResponse.IsSuccess = true;
            doctorsResponse.Message = "Sucessfull";
            try
            {

            }
            catch(Exception ex)
            {

            }
            finally
            {

            }
            throw new NotImplementedException();
        }
    }
}
