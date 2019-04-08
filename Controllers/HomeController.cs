using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RandomPass.Models;
using Microsoft.AspNetCore.Http;


namespace RandomPass.Controllers
{
    public class HomeController : Controller
    {

        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            int? counter = HttpContext.Session.GetInt32("counter");
            counter = (counter == null) ? 0 : counter;
            counter++;

            ViewBag.Count = counter;
            ViewBag.passcode = RandomString(14);
            HttpContext.Session.SetInt32("counter", (int)counter);
            return View();
           
        }

        
        [Route("/getpass")]
        [HttpGet]
        public JsonResult GetPAss()
        {
            int? counter = HttpContext.Session.GetInt32("counter");
            counter = (counter == null) ? 1 : counter;
            counter++;

            // ViewBag.Count = counter;
            ViewBag.passcode = RandomString(14);
            HttpContext.Session.SetInt32("counter", (int)counter);
            var AnonObject = new
            {
                count = counter,
                passcode = ViewBag.passcode,
               
            };

            return Json(AnonObject);
            // return ViewBag.passcode;

        }

    }
}
