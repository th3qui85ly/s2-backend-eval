const express = require("express");
const router = express.Router();

const SavingsAccount = require("../Models/savingsAccount");
const MasterAccount = require("../Models/masterAccount");
const FixedAccount = require("../Models/fixedAccount");

router.get("/", async (req, res) => {
	try {
		const masterAccount = await MasterAccount.find().populate("userId");
		return res.send(masterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.get("/:id", async (req,res)=>{
	try{
		const getUser = await MasterAccount.findById("userId");
		return res.status(200).json(getUser);
	}
	catch(err){
		return res.status(200).send(err.message);
	}
})
router.post("/", async (req, res) => {
	try {
		const createmasterAccount = await MasterAccount.create(req.body);
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.patch("/:id/fixedAccount", async (req, res) => {
	try {
		const createmasterAccount = await FixedAccount.find({fixedAccount: req.params.id});
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.patch("/:id/savingsAccount", async (req, res) => {
	try {
		const createmasterAccount = await SavingsAccount.find({savingsAccount_id: req.params.id});
		return res.send(createmasterAccount);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;