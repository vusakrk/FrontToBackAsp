using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBackAsp.Models
{
    public class Arrivals
    {
        public int Id { get; }
        [Required, StringLength(255)]
        public string Name { get; }
        [Required, StringLength(255)]
        public Decimal Price { get;  }
    }
}
