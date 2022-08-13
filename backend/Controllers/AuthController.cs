using backend.DataAccessFolder;
using backend.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = Microsoft.AspNetCore.Authentication.JwtBearer.JwtBearerDefaults.AuthenticationScheme)]
    public class AuthController : ControllerBase
    {
        public readonly IAuthDL _authDL;
        public AuthController(IAuthDL authDL) {
            _authDL = authDL;
        }
        [HttpPost]
        [AllowAnonymous]
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
        [AllowAnonymous]
        public async Task<IActionResult> SignIn(SignInRequest signInRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            try
            {
                signInResponse = await _authDL.SignIn(signInRequest);
            }
            catch (Exception ex)
            {
                signInResponse.IsSuccess = false;
                signInResponse.Message = ex.Message;
            }

            return Ok(signInResponse);
        }

        [HttpGet]
        public async Task<IActionResult> GetDoctors()
        {
            DoctorsResponse doctorsResponse = new DoctorsResponse();
            try
            {
                doctorsResponse = await _authDL.GetDoctors();
            }
            catch(Exception ex)
            {
                doctorsResponse.IsSuccess = false;
                doctorsResponse.Message = ex.Message;
            }

            return Ok(doctorsResponse);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateUser(SignUpRequest signUpRequest)
        {
            SignInResponse signInResponse = new SignInResponse();
            try
            {
                signInResponse = await _authDL.UpdateUser(signUpRequest);
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
