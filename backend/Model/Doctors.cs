using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class DoctorsResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public List<DoctorsInfo> Doctorinfo { get; set; }
    }


    public class DoctorsInfo
    {
        public string emailid { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public int age { get; set; }
        public int experience { get; set; }
        public string award { get; set; }
    }
}
