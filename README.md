
# 🎮 GamingSite - Application React / Node.js / MongoDB Dockerisée

Bienvenue sur GamingSite, une application web fullstack développée en React, Node.js et MongoDB, entièrement dockerisée sans `docker-compose`.

---

## 📦 Prérequis

- [Docker](https://www.docker.com/) installé sur votre machine
- [Git](https://git-scm.com/) pour cloner le projet
- Accès à un terminal

---

## 🚀 Étapes de lancement

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/gamingsite.git
cd gamingsite
```

---

### 2️⃣ Lancer MongoDB

```bash
docker run -d --name mongodb-container -p 27017:27017 -v mongodata:/data/db mongo
```

✅ MongoDB tourne sur `localhost:27017`

---

### 3️⃣ Lancer le Backend Node.js

📁 Aller dans le dossier `backend` :

```bash
cd backend
```

📄 Créer le fichier `.env` (basé sur `.env.example`) :

```bash
cp .env.example .env
```

✏️ Contenu du fichier `.env` :

```env
PORT=5050
MONGO_URI=mongodb://mongodb:27017/jeux_video
```

🐳 Build & run le conteneur :

```bash
docker build -t backend-jeux-video .
docker run -d --name backend-container --env-file .env --link mongodb-container:mongodb -p 5050:5050 backend-jeux-video
```

✅ Backend dispo sur `http://localhost:5050`

---

### 4️⃣ Lancer le Frontend React

📁 Aller dans le dossier `frontend` :

```bash
cd ../frontend
```

📄 Créer le fichier `.env` :

```bash
cp .env.example .env
```

✏️ Contenu du `.env` :

```env
REACT_APP_API_URL=http://localhost:5050
```

🐳 Build & run le frontend :

```bash
docker build -t frontend-jeux-video .
docker run -d --name frontend-container -p 5051:80 frontend-jeux-video
```

✅ Frontend dispo sur `http://localhost:5051`

---

## 🧪 Tester l'application

- Ouvrir **http://localhost:5051** dans le navigateur
- Toutes les requêtes API passent par **http://localhost:5050**
- La base de données Mongo est accessible en local si besoin (ex : via MongoDB Compass)

---

## 🧼 Commandes utiles

- Voir les conteneurs actifs :

```bash
docker ps
```

- Arrêter et supprimer un conteneur :

```bash
docker rm -f <nom_conteneur>
```

- Voir les logs d’un conteneur :

```bash
docker logs <nom_conteneur>
```

---

## ✨ Auteur

Projet crée dockerisé par Nicolas Draperi 
