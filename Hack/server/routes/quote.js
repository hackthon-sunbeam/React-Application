const db = require("../utils/dbpool");
const { apiSuccess, apiError } = require("../utils/apiresult");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const path = require("path");


//Get All Quotes
router.get("", (req, resp) => {
	db.query("SELECT * FROM quote", (err, results) => {
		if (err) return resp.send(apiError(err));
		resp.send(apiSuccess(results));
	});
});


module.exports = router