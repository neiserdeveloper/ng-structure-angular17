
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

# Fase de ejecución: Utiliza una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia el artefacto de construcción desde la fase de construcción al directorio de servicio de Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

EXPOSE 80

# Inicia Nginx y mantiene el proceso en primer plano
CMD ["nginx", "-g", "daemon off;"]
