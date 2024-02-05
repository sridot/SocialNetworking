using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SocialNetworking.ViewModel
{
    public class RegistrationViewModel
    {
        [Required(ErrorMessage ="Please Enter Username")]
        public string Username { get;set; }
        [Required(ErrorMessage ="Please Enter Password")]
        public string Password { get;set; }
        [Required(ErrorMessage = "Please Enter Confirm Password")]
        [Compare("Password", ErrorMessage ="Password Not Match")]
        public string ConfirmPassword { get; set; }
        [Required(ErrorMessage ="Please Enter Email Address")]
        [EmailAddress(ErrorMessage ="Please Enter Valid Email Adress")]
        public string Email { get;set; }
        public string ErrorMessage { get; set; }
    }
}