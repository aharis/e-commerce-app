import express from "express";

const router = express.Router();

router.post("/userposttest", (req, res) => {
    const username = req?.body?.username;
    res.send(`Your username is: ` + username)
})


export default router;