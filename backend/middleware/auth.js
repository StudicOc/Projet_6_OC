//--- Authentification par Token---//

//---Importation du package---//
const jwt = require("jsonwebtoken");

//--- Middleware--//
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //---Recupération du  token--//
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET"); //--Extraction du userId--//
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "User Id non valable";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Requête non authentifié!"),
    });
  }
};
