import express from "express";
const router = express.Router();


// Mock Database
const users = [
    {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
    },
    {
        first_name: "Jane",
        last_name: "Doe",
        email: "janedoe@gmail.com",
    },
];

// Getting thee list of users from the mock database
router.get("/", (req, res) => {
    res.send(users);
});

export default router;