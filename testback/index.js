const express = require("express");

const app = express();


// define port
const port = 8000;
app.get("/",(req,res) => {
    return res.send("You are visisting the home page");
});
app.get("/signout",(req,res) => {
    return res.send("You are being signout");
});
app.get("/hitesh",(req,res) => {
    return res.send("Hitesh uses instagram");
});
const admin = (req,res) => {
    return res.send("this is an admin dashboard");
};

const isAdmin = (req,res,next) => {
    console.log("isAdmin is running....");
    next();
};

const isLoggedIn = (req,res,next) => {
    console.log("isLoggedIN ................");
    next();
}



app.get("/admin",isLoggedIn,isAdmin,admin);
app.get("/signup",(req,res) => {
    return res.send("you are visiting signup route")
})
app.get("/login",(req,res) => {
    return res.send("You are visiting a login route");
});

app.listen(port, () => {
    console.log("Server is up and running...");
});


