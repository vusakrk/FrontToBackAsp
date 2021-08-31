using FrontToBackAsp.DAL;
using FrontToBackAsp.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontToBackAsp.Controllers
{
    public class HomeController : Controller
    {
        public AppDbContext  _context { get; }
        public HomeController (AppDbContext context) {
            _context = context;
        }
        public async Task <IActionResult> Index()
        {
            HomeViewModel homeViewModel = new HomeViewModel
            {
                Slides = await _context.Slides.ToListAsync()

            };
            return View(homeViewModel);
        }
    }
}
