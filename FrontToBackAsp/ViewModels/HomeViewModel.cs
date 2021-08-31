using FrontToBackAsp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBackAsp.ViewModels
{
    public class HomeViewModel
    {
        public Navbar Navbar { get; set; }
        public List<Slide> Slides { get; set; }
        public Arrivals Arrivals { get; set; }
        public Choices Choices { get; set; }

    }
}
