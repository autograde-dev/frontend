# Etapa 1: Construcción de la aplicación
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar archivos de construcción desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar archivo de configuración de Nginx si es necesario
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto en el que Nginx escucha
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]