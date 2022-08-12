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
        [Key]
        public string emailid { get; set; }
        [Required]
        public string password { get; set; }
    }
    public class SignInResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public string Token { get; set; }
    }

    public class UserInfo 
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string emailid { get; set; }
        public string address { get; set; }
        public int age { get; set; }
    }

}
