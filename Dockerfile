FROM node:16-alpine AS builder

WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]
COPY prisma ./prisma/
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY --form=builder /app ./
EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]