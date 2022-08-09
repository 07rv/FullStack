using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DataAccessFolder
{
    public interface IAuthDL
    {
        public Task<SignUpResponse> SignUp(SignUpRequest signUpRequest);
        public Task<SignInResponse> SignIn(SignInRequest signInRequest);
    }
}
