# 🎮 GamingSite - Application React / Node.js / MongoDB Dockerisée

Bienvenue sur GamingSite, une application web fullstack développée en React, Node.js et MongoDB, dockerisée avec Docker Compose.

---

## 📦 Prérequis

- [Docker](https://www.docker.com/) installé sur votre machine
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/) pour cloner le projet
- Accès à un terminal

---

## 🚀 Lancer le projet avec Docker Compose

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/gamingsite.git
cd gamingsite
```

---

### 2️⃣ Configurer les fichiers `.env`

📁 Créer les fichiers `.env` :

- À la racine : `.env` (pour Docker Compose)
- Dans `/backend` : `.env`
- Dans `/frontend` : `.env`

```bash
cp .env.example .env
cd backend && cp .env.example .env && cd ../frontend && cp .env.example .env && cd ..
```

### Contenu recommandé :

📄 `.env` (à la racine) :
```env
# Ports
MONGO_PORT=27017
BACKEND_PORT=5050
FRONTEND_PORT=5051
```

📄 `backend/.env` :
```env
PORT=5050
MONGO_URI=mongodb://mongo:27017/jeux_video
```

📄 `frontend/.env` :
```env
REACT_APP_API_URL=http://localhost:5050
```

---

### 3️⃣ Lancer tous les conteneurs

```bash
docker compose --env-file .env up --build
```

---

## 🧪 Accéder à l'application

- 🧠 MongoDB tourne sur `localhost:27017`
- 🚀 Backend Node.js : `http://localhost:5050`
- 🎨 Frontend React : `http://localhost:5051`

---

## 🧼 Commandes utiles

- Voir les conteneurs actifs :

```bash
docker ps
```

- Arrêter tout :

```bash
docker compose down
```

- Voir les logs d’un service :

```bash
docker compose logs backend
```

---

## ✨ Auteur

Projet dockerisé par Nicolas Draperi