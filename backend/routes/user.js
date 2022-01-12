const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

//---Requête poste, frontend va nous envoyer des info( mtp et mail)---//
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
