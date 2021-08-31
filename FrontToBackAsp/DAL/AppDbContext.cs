using FrontToBackAsp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBackAsp.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Slide> Slides { get; set; }
        //public DbSet<Navbar> Navbars { get; set; }
        //public DbSet<Arrivals> Arrivals { get; set; }
        //public DbSet<Choices> Choices { get; set; }

    }
}
