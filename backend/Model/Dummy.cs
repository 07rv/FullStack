using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class Dummy
    {
        [Required]
        [Key]
        public string Emailid { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
