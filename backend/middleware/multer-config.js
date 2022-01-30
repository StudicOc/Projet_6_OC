//----GESTION DES FICHIERS ENTRANTS---//

const multer = require("multer");

//---Type de fichier accepté--//
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

//--- Objet de config pour multer---//
const storage = multer.diskStorage({
  //--First argument--//
  destination: (req, file, callback) => {
    callback(null, "images"); //---Enregistrement ---//
  },
  //---Next argument---//
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
