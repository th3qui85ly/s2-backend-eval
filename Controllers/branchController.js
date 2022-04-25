const express = require("express");
const router = express.Router();

const Branch = require("../Models/masterAccount");

router.get("/", async (req, res) => {
	try {
		const branch = await Branch.find().populate("userId");
		return res.send(branch);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;