const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
});

router.post(
    "/signup",
    wrapAsync(async (req, res) => {
        try {

            let { email, username, password } = req.body;
            const newUser = new User({ email, username });
            const registeredUser = await User.register(newUser, password);
            req.login(registeredUser, (err) => {
                if(err) {
                    return next(err);
                }
                req.flash("success", "Welcome to WanderLust");
                res.redirect("/listings");
            });
        } catch(e) {
            req.flash("error", e.message);
            res.redirect("/signup");
        }
    })
);

router.get("/login", (req, res) => {
    res.render("user/login.ejs");
});

router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login", 
        failureFlash: true
    }), 
    wrapAsync(async (req, res) => {
        req.flash("success", "Welcome, You are logged in!");
        res.redirect(res.locals.redirectUrl);
}));

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out now!");
        res.redirect("/listings");
    });
});

module.exports = router;
