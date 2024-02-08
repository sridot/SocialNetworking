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
        public ActionResult Profle()
        {
            return View();
        }

        public ActionResult Password()
        {
            return View();
        }
    }
}