using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SocialNetworking.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Profile()
        {
            return View();
        }

        public ActionResult Password()
        {
            return View();
        }

        public ActionResult Website()
        {
            return View();
        }

        public ActionResult AddWebsite()
        {
            return View();
        }

        public ActionResult DeleteWebsite()
        {
            return View();
        }

        public ActionResult Video()
        {
            return View();
        }

        public ActionResult Sitemap()
        {
            return View();
        }
    }
}