# Projet_6_OC

## Conception de l'API 🔥

Construire une API sécurisée pour une application d'avis gastronomiques.

Une application web dans laquelle les utilisateurs peuvent ajouter
leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.

Chque utilisateur peut modifier, supprimer sa propre sauce.

## Exigences de sécurité 🔒

- Algorithmes de hachage.
- Gestion du contrôle d'accés pour que les utilisateurs ne puissent pas modifier ou supprimer une sauce d'autres utilisateurs.
- Adresse email unique.

## Framework et services utilisés

- MangoDB
- Express.js

## Installation Backend ⚙️

Installer les dépendances qui seront recquis pour notre application :

- Nodemon, `npm install -g nodemon`
- Framework Express.js, `npm install express --save`
- Unique `npm install mongoose-unique-validator`
- Bcrypt `npm install bcrypt`
- Token `npm install jsonwebtoken`
- Multer `npm install multer`

Faire `npm list` pour vérifier la bonne installation des packages.

## Usage

- Avec la commande `cd` se rendre dans le backend et lancer le serveur: `nodemon server`
- Avec la commande `cd` se rendre dans Front-end et lancer l'application :`run npm install`, and `run npm install --save-dev run-script-os`, démarrer l'application avec `npm start`.

## Important information

Afin de tester l'application, veuillez créer un dossier `images` en suivant la même syntaxte.

Le dossier est renvoyé sur le fichier `.gitignore` afin de ne pas envoyer les images sur github.
