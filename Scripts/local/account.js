
    //let $click = false;
    //let $user = $('input[type=text]');
    //let $pwd = $('input[type=password]');
    //let $email = $('input[type=email]');
    //let $error = $('.alert-danger');
    //let $errorMessage = "<span style='border-left:3px solid red; padding-left:7px;'> Mandatory Fields</span>";

//@section scripts
//{
//        <script src="~/Scripts/local/account.js?version=7"></script>
//        <script>
//            $(document).ready(function () {
//                let $click = false;
//                let $user = $('input[type=text]');
//                let $pwd = $('input[type=password]');
//                let $email = $('input[type=email]');
//                let $error = $('.alert-danger');
//                let $errorMessage = "<span style='border-left:3px solid red; padding-left:7px; background-color:green;'> Mandatory Fields</span> <button type='button' class='btn - close' data-bs-dismiss='alert' aria-label='Close'>X</button>";

//                $(".btn-success").click(function () {
//                    if ($user.val() === "") {
//                        $user.attr("style", "border-right:5px solid red;").attr("data-error", "on");
//                        $error.attr("class", "alert alert-danger p-3");
//                        $click = true;
//                    }

//                    if ($email.val() === "") {
//                        $email.attr("style", "border-right:5px solid red;").attr("data-error", "on");
//                        $error.attr("class", "alert alert-danger p-3");
//                        $click = true;
//                    } else {
//                        $EmailVerifyFunction($email.val());
//                    }

//                    if ($pwd.val() === "") {
//                        $pwd.attr("style", "border-right:5px solid red;").attr("data-error", "on");
//                        $error.attr("class", "alert alert-danger p-3");
//                        $click = true;
//                    }

//                    if ($click === true) {
//                        $error.html($errorMessage);
//                        return false;
//                    } else {
//                        return true;
//                    }
//                });
//                $UserKeyPress_and_Focusout();
//                $EmailKeyPress_and_Focusout();
//                $PasswordKeyPress_and_Focusout();
//            });
//        </script>
//}


////User Keypress and Focusout
//let $UserKeyPress_and_Focusout = function () {
//    $user.keypress(function () {
//        if ($user.val() !== "" && $click === true) {
//            $user.removeAttr("style");
//            return true;
//        }
//    }).focusout(function () {
//        if ($user.val() === "" && $click === true) {
//            $user.attr("style", "border-right:5px solid red;");
//            $error.attr("class", "alert alert-danger p-3").html($errorMessage);
//            return false;
//        } else {
//            $user.removeAttr("style");
//            $error.attr("class", "alert alert-danger p-3 visually-hidden");
//        }
//        validation();
//    });
//}

//    //Email keypress and focusout
//let $EmailKeyPress_and_Focusout = function () {
//    $email.keypress(function () {
//        if ($email.val() !== "" && $click === true) {
//            $email.removeAttr("style");
//            return true;
//        }
//    }).focusout(function () {
//        if ($email.val() === "" && $click === true) {
//            $email.attr("style", "border-right:5px solid red;");
//            $error.attr("class", "alert alert-danger p-3").html($errorMessage);
//            return false;
//        } else {
//            $EmailVerifyFunction($email.val());
//        }
//        validation();
//    });
//}

//    //Password Keypress and focusout
//let $PasswordKeyPress_and_Focusout = function () {
//    $pwd.keypress(function () {
//        if ($pwd.val() !== "" && $click === true) {
//            $pwd.removeAttr("style");
//            return true;
//        }
//    }).focusout(function () {
//        if ($pwd.val() === "" && $click === true) {
//            $pwd.attr("style", "border-right:5px solid red;");
//            $error.attr("class", "alert alert-danger p-3").html($errorMessage);
//            return false;
//        } else {
//            $pwd.removeAttr("style");
//            $error.attr("class", "alert alert-danger p-3 visually-hidden");
//        }
//        validation();
//    });
//}

//Email Verify
//function EmailVerify(e) {
//    let $emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!$emailRegex.test(e)) {
//        $('input[type=email]').attr("style", "border-right:5px solid red;").attr("data-error", "on");
//        $('.alert-danger').attr("class", "alert alert-danger p-3").text("Please Enter Valid Email Address");
//        alert('fail');
//        $click = true;
//    } else {
//        alert('correct');
//        $('input[type=email]').removeAttr("style");
//        $('.alert-danger').attr("class", "alert alert-danger p-3 visually-hidden");
//        $click = false;
//    }
//}
    

    //function validation() {
    //    if ($user.val() === "") {
    //        $user.attr("style", "border-right:5px solid red;").attr("data-error", "on");
    //        $error.attr("class", "alert alert-danger p-3");
    //        $click = true;
    //    }

    //    if ($email.val() === "") {
    //        $email.attr("style", "border-right:5px solid red;").attr("data-error", "on");
    //        $error.attr("class", "alert alert-danger p-3");
    //        $click = true;
    //    } else {
    //        verifyEmail($email.val());
    //    }

    //    if ($pwd.val() === "") {
    //        $pwd.attr("style", "border-right:5px solid red;").attr("data-error", "on");
    //        $error.attr("class", "alert alert-danger p-3");
    //        $click = true;
    //    }
    //}
