# Projet_6_OC

## Conception de l'API

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

## Usage

Exécutez `nodemon server` pour démarrer votre serveur.

Exécutez `npm install mongoose` pour enregistrer nos données de notre application.

## Installation ⚙️

- Intallation de nodemon, exécutez `npm install -g nodemon`.

- Installation du framework Express.js, exécutez `npm install express --save`.

## Installation User ⚙️

Afin d'assurer la sécurité de notre application et les données de nos utilisateurs :

- Installer le package `npm install mongoose-unique-validator`, afin d'éviter que deux utilisateurs utilisent la même adresse mail et qu'elle soit unique.
- Point très important, installer le package `npm install bcrypt`, il stocke sous forme de hachage (hash), chiffrement de données. 🔒
