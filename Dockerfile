FROM node:18-alpine
WORKDIR /spyd-frontend
COPY package*.json .
RUN npm install && npm i vite && apk add xdg-utils
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
