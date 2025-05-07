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


router.post("", (req, resp) => {
    const {author,contents} = req.body
    //const encPasswd = bcrypt.hashSync(passwd, 10)
    //const enabled = 1
    //const role = "ROLE_CUSTOMER"
    db.query("INSERT INTO quote (author,contents,createdTime) VALUES (?,?,now())",
        [author,contents],
        (err, result) => {
            if(err)
                return resp.send(apiError(err))
            // if user inserted successfully, return new user object
            if(result.affectedRows === 1) {
                db.query("SELECT * FROM quote WHERE id=?", [result.insertId],
                    (err, results) => {
                        if(err)
                            return resp.send(apiError(err))
                        resp.send(apiSuccess(results[0]))
                    }
                )
            }
        }
    )
})


module.exports = router