using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class DoctorsRequest
    {
        [Required]
        public string emailid { get; set; }
        [Required]
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public int experience { get; set; }
        public string award { get; set; }
    }

    public class DoctorsResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }

}
