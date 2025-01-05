const express = require("express");
const router = express.Router();

// users
router.get("/", (req, res) => {
    res.send("Get for users");
})

router.get("/:id", (req, res) => {
    res.send("Get show users");
})

router.post("/", (req, res) => {
    res.send("Post for users")
})

router.delete("/:id", (req, res) => {
    res.send("delete for user");
})

module.exports = router;