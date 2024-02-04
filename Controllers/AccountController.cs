using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SocialNetworking.ViewModel;

namespace SocialNetworking.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Signup(RegistrationViewModel reg)
        {
            if (ModelState.IsValid)
            {
                return View(reg);
            }
            else
            {
                return View(reg);
            }
        }


        public ActionResult Signin()
        {
            return View();
        }
    }
}