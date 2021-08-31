using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBackAsp.Models
{
    public class Navbar
    {
        public int Id { get; }
        [Required,StringLength(255)]
        public string Image { get; }
    }
}
