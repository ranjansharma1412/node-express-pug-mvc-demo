import User from "../models/user.model.js";

export const renderRegister = async (req, res) => {
    try {
        res.render("registration.pug")
    } catch (error) {
        res.status(404).send("Page not found");
    }
}

export const renderLogin = async (req, res) => {
    try {
        res.render("login.pug")
    } catch (error) {
        res.status(404).send("Page not found");
    }
}

export const addUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        await user.save();
        res.render("login.pug", {
            message: "You register successfully!"
        })
    } catch (error) {
        console.log("=====error===", error)
        res.status(500).send(error);
    }
}

export const getUsers = async (req, res) => {
    try {
        const user = await User.find({});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
