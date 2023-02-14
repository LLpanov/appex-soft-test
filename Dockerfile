FROM node:16-alpine AS builder

WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]
COPY prisma ./prisma/
COPY . .
RUN npm run build
RUN npx prisma generate



FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 5000
CMD [ "npm", "run", "start" ]