# Étape de build
FROM node:18 as build
WORKDIR /site-e-commerce
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape de production
FROM nginx:stable-alpine
COPY --from=build /site-e-commerce/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
