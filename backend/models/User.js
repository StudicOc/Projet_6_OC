//---Modèle de données utilisateurs---//

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//---Création du schéma---//
const userSchema = mongoose.Schema({
  //---Informations stockés---//
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
