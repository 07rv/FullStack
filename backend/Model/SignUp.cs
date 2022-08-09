using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class SignUpRequest
    {
        [Required]
        public string firstName {get;set;}
        [Required]
        public string lastName { get; set; }
        [Required]
        public string emailid { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string confirmPassword { get; set; }        
    }

    public class SignUpResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
