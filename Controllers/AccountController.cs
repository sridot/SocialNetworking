using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
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

        [HttpPost]
        public ActionResult Signin(LoginViewModel login)
        {
            if (ModelState.IsValid)
            {
                login.ErrorMessage = "Success";
                return View(login);
            }
            else
            {
                login.ErrorMessage = "Please Enter Valid Username & Password";
                return View(login);
            }
        }

        public ActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public ActionResult ForgotPassword(RegistrationViewModel reg)
        {
            ModelState.Remove("Username");
            ModelState.Remove("Password");
            ModelState.Remove("ConfirmPassword");

            if (ModelState.IsValid)
            {
                reg.ErrorMessage = "Success";
            }
            else
            {
                reg.ErrorMessage = "Please Enter Email Address";
            }

            return View(reg);
        }
    }
}