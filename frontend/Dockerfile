# Étape 1 : Build React
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Le port réel de Nginx est 80, donc :
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
