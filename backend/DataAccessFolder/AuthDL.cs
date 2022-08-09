using backend.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

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

        public Task<IAsyncResult> SignIn(SignInRequest signInRequest)
        {
            throw new NotImplementedException();
        }

        public async Task<IAsyncResult> SignUp(SignUpRequest signUpRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            signInResponse.IsSuccess = true;
            signInResponse.Message = "Sucessfull";
            try
            {
                SqlConnection sqlConnection = GetConnection();
                if(sqlConnection.State != System.Data.ConnectionState.Open)
                    await sqlConnection.OpenAsync();

                using(SqlCommand sql = new SqlCommand())
                {

                }
            }
            catch(Exception ex)
            {
                signInResponse.IsSuccess = false;
                signInResponse.Message = "UnSucessfull";
            }
            finally
            {

            }
            throw new NotImplementedException();

        }
    }
}
