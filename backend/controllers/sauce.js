const Sauce = require("../models/Sauce");

const fs = require("fs"); //---files system--//

//---IMPORTATION DE LA LOGIQUE DE CHAQUE REQUETE HTTP---//

//--- Création d'une sauce---//
exports.createSauce = (req, res, next) => {
  const userSauce = JSON.parse(req.body.sauce);

  delete userSauce._id;
  const sauce = new Sauce({
    ...userSauce,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  console.log(sauce);
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//---Récupération d'une sauce spécifique--//
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

//--- Modification d'une sauce---//
exports.modifySauce = (req, res, next) => {
  const userSauce = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...userSauce, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//---Supression d'une sauce---//
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const filename = sauce.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

//--- Affichage de toutes les sauces--//
exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.postLikesDislike = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id }) //---Paramêtre de route dynamique --- Accéder à l'id de la sauce---//

    .then((likeDislike) => {
      // ----------1 CONDITION POUR LES LIKES---------------------//

      //Si like = 1, l'utilisateur aime (= like) + Si like =0, le user retire son like ---//

      if (
        !likeDislike.usersLiked.includes(req.body.userId) &&
        req.body.like == 1
      ) {
        Sauce.updateOne(
          { _id: req.params.id },
          { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "like ajouté" }))
          .catch((error) => res.status(400).json({ error }));
      } else if (
        likeDislike.usersLiked.includes(req.body.userId) &&
        req.body.like == 0
      ) {
        Sauce.updateOne(
          { _id: req.params.id },
          { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "like retiré" }))
          .catch((error) => res.status(400).json({ error }));
      }
      //---------2 CONDITION POUR LES DESLIKES-------------//
      if (
        !likeDislike.usersDisliked.includes(req.body.userId) &&
        req.body.like == -1
      ) {
        Sauce.updateOne(
          { _id: req.params.id },
          { $inc: { dislikes: 1 }, $push: { usersDisliked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "Dislike ajouté" }))
          .catch((error) => res.status(400).json({ error }));
      } else if (
        likeDislike.usersDisliked.includes(req.body.userId) &&
        req.body.like == 0
      ) {
        Sauce.updateOne(
          { _id: req.params.id },
          { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId } }
        )
          .then(() => res.status(200).json({ message: "like retiré" }))
          .catch((error) => res.status(400).json({ error }));
      }
    }) //---Fin de la promise then---//

    //--- GESTION DES ERREURS---//

    .catch((error) => res.status(500).json({ error }));
};
