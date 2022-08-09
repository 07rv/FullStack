using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class SignInRequest
    {
        [Required]
        public string Emailid { get; set; }
        [Required]
        public string password { get; set; }
    }
    public class SignInResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
