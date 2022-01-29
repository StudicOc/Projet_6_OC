const express = require("express");
const mongoose = require("mongoose");

//---Path donne acces à notre chemin de system de fichiers.
const path = require("path");

const helmet = require("helmet");

const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

const app = express();

//--- CORS---//
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //--Accés pour tous--//
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next(); //---Passer next pour exécuter le middleware suivant--//
});

//---Connection de notre base de donnée MANGODB---//
mongoose
  .connect(
    "mongodb+srv://Hot-sauces-P6:projet6sauce@cluster0.ga9k0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json()); //---Intercepte toutes requêtes qui ont un content-type json---//

app.use("/images", express.static(path.join(__dirname, "images"))); //---Path donne acces à notre chemin de system de fichiers.
app.use("/api/sauces", sauceRoutes);
app.use("/api/auth", userRoutes);

//--- Sécurisation  des en-têtes HTTP---//

app.use(helmet());

module.exports = app;
