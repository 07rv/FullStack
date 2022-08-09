using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DataAccessFolder
{
    public interface IAuthDL
    {
        public Task<IAsyncResult> SignUp(SignUpRequest signUpRequest);
        public Task<IAsyncResult> SignIn(SignInRequest signInRequest);
    }
}
