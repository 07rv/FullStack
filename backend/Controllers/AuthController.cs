using backend.DataAccessFolder;
using backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        public readonly IAuthDL _authDL;
        public AuthController(IAuthDL authDL) {
            _authDL = authDL;
        }
        [HttpPost]
        public async Task<IActionResult> SignupAsync(SignUpRequest signUpRequest)
        {
            SignUpResponse signUpResponse = new SignUpResponse();
            try
            {
                signUpResponse =  await _authDL.SignUp(signUpRequest);
            }
            catch (Exception ex)
            {
                signUpResponse.IsSuccess = false;
                signUpResponse.Message = ex.Message;
            }

            return Ok(signUpResponse);
        }

        [HttpPost]
        public IActionResult SignIn(SignInRequest signUpRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            try
            {

            }
            catch (Exception ex)
            {
                signInResponse.IsSuccess = false;
                signInResponse.Message = ex.Message;
            }

            return Ok(signInResponse);
        }
    }
}
