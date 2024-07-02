import express from "express";
import { v4 as uuidv4 } from "uuid";


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

// Implementing the POST request
router.post("/", (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });
    res.send(`User with the name ${user.first_name} added to the database successfully!`);
});

export default router;