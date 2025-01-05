const express = require("express");
const router = express.Router();

// posts
router.get("/", (req, res) => {
    res.send("Get for posts");
})

router.get("/:id", (req, res) => {
    res.send("Get show posts");
})

router.post("/", (req, res) => {
    res.send("Post for posts")
})

router.delete("/:id", (req, res) => {
    res.send("delete for posts");
})

module.exports = router;