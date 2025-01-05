const express = require("express");
const app = express();
// const users = require("./routes/users.js");
// const posts = require("./routes/posts.js");
// const cookieParser = require("cookie-parser");

// app.use(cookieParser("secretecode"));

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India", {signed: true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/greet", (req, res) => {
//     let {name = "User"} = req.cookies;
//     res.send(`Hi, ${name}`);
// })

// app.get("/getcookies", (req, res) => {
//     res.cookie("greet", "hello");
//     res.cookie("MadeIn", "India");
//     res.send("Sent you some cookies");
// })

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hello, this is server");
// })

// app.use("/users", users);
// app.use("/posts", posts);

const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

app.get("/register", (req, res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    if(name == "anonymous") {
        req.flash("error", "User not registered!");
    } else {
        req.flash("success", "User registered successfully!"); 
    }
    res.redirect("/hello");
})

app.get("/hello", (req, res) => {
    res.render("page.ejs", {name: req.session.name});
})

// app.get("/request", (req, res) => {
//     if(req.session.count) {
//         req.session.count++;
//     }
//     else {
//         req.session.count = 1;
//     }
//     res.send(`You sent a request ${req.session.count} times`);
// })

// app.get("/test", (req, res) => {
//     res.send("test successful!");
// })

app.listen(3000, () => {
    console.log("server is listing to 3000")
})