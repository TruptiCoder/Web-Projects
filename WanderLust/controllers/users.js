const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signUp = async (req, res) => {
    try {
        let { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome, You are logged in!");
    res.redirect(res.locals.redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out now!");
        res.redirect("/listings");
    });
};
