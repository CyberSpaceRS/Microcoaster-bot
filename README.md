![Contributors](https://img.shields.io/github/contributors/microcoaster/discord-bot.svg?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/microcoaster/discord-bot.svg?style=for-the-badge)
![Stargazers](https://img.shields.io/github/stars/microcoaster/discord-bot.svg?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/microcoaster/discord-bot.svg?style=for-the-badge)
![License](https://img.shields.io/github/license/microcoaster/discord-bot.svg?style=for-the-badge)

![JS](https://img.shields.io/badge/JS-20232A?style=for-the-badge\&logo=javascript\&logoColor=f1c513)
![Docker](https://img.shields.io/badge/Docker-20232A?style=for-the-badge\&logo=docker\&logoColor=1D63ED)
![MySQL](https://img.shields.io/badge/MySQL-20232A?style=for-the-badge\&logo=mysql\&logoColor=00758f)

<img src="https://media.discordapp.net/attachments/1387054323925651668/1387054412253630505/245e2a9ca9588591ba21607d59a1532e.png?ex=685bf296&is=685aa116&hm=a732cc20410d0c807eebd1adb5ad66cdde5bc349d4ce1d18fb2b104dbe8e93ce&=&format=webp&quality=lossless" align="right" width="10%" />

# MicroCoaster Discord Bot

Bot officiel du serveur **MicroCoaster™**, conçu pour automatiser la gestion des produits, la modération et les services communautaires.

> \[!NOTE]
> Lisez attentivement chaque section pour comprendre la structure du projet et faciliter votre contribution ou déploiement.

> \[!TIP]
> Nous recommandons l’utilisation de Docker et Docker Compose pour simplifier l’installation.

---

## Rejoignez la communauté

Rejoignez le serveur Discord pour obtenir de l'aide ou discuter avec la communauté :

[Rejoindre le Discord](https://discord.gg/NXqd4eYYQf)

---

## Table des matières

* [Fonctionnalités principales](#fonctionnalités-principales)
* [Prérequis](#prérequis)
* [Configuration](#configuration)
* [Structure du projet](#structure-du-projet)
* [Utilisation avec Docker](#utilisation-avec-docker)
* [Qualité du code](#qualité-du-code)
* [Contribution](#contribution)
* [Licence](#licence)

---

## Fonctionnalités principales

* **Activation Premium** via [`#redeem-voucher`](https://discord.com/channels/1103592569360891954/1382644266026663946)

  * Un code reçu lors de l’achat débloque le rôle `🎖️ Premium`.

* **Activation de Garantie** via [`#warranty-activation`](https://discord.com/channels/1103592569360891954/1382644556901781555)

  * Le code active une garantie d’un an. Un rappel automatique est envoyé 1 mois avant expiration.

* **Système de Tickets** via [`#support`](https://discord.com/channels/1103592569360891954/1382647557888675841)

  * Gestion des demandes de support ou candidatures via des boutons et canaux privés.

* **Auto-modérateur**

  * Filtrage automatique des messages offensants, journalisation dans `#logs-moderation`.

---

## Prérequis

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

> \[!IMPORTANT]
> Docker et Docker Compose sont nécessaires pour un déploiement simple et stable.

---

## Configuration

Créez un fichier `.env` à la racine avec les variables suivantes :

```dotenv
TOKEN=
ID=
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
```

> \[!CAUTION]
> **Avec Docker, ne remplissez pas les variables MySQL ci-dessus** : elles sont gérées par `docker-compose.yml`.

---

## Structure du projet

* **commands** : Commandes disponibles pour les utilisateurs.
* **buttons** : Gestion des interactions par boutons Discord.
* **events** : Réactions aux événements Discord (nouveaux membres, messages, etc.).
* **config** : Paramètres globaux du bot.
* **dao** : Requêtes SQL et accès à la base de données.
* **scheduler** : Tâches automatisées (rappels, expiration garantie).
* **utils** : Fonctions utiles partagées dans le code.

---

## Utilisation avec Docker

### Démarrage

```bash
docker-compose up -d
```

### Reconstruire et redémarrer

```bash
docker-compose up --build -d
```

### Build uniquement

```bash
docker-compose build
```

### Arrêt et nettoyage

```bash
docker-compose down
# ou avec suppression des images :
docker-compose down --rmi all
```

> \[!WARNING]
> Sauvegardez vos données avant de supprimer les containers !

---

## Qualité du code

### Lint (ESLint)

```bash
npm run lint
```

### Formatage (Prettier)

```bash
npm run prettier
```

---

## Contribution

1. Forkez le dépôt
2. Créez une branche :

   ```bash
   git checkout -b feature/ma-fonction
   ```
3. Commitez vos changements :

   ```bash
   git commit -m "Ajout de ma fonctionnalité"
   ```
4. Poussez la branche et ouvrez une Pull Request

> \[!NOTE]
> Toute contribution est la bienvenue ✨

---

## Licence

Ce projet est sous licence [MIT](./LICENSE).
Vous pouvez librement l'utiliser et le modifier selon les termes de cette licence.

---

<p align="right">(<a href="#microcoaster-discord-bot">retour en haut</a>)</p>
