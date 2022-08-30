# Build stage
FROM node:16-alpine3.14 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN apk add --update-cache build-base python3 libheif vips-dev ffmpeg
RUN npm ci

COPY . .

RUN npm run build


# Prod stage
FROM node:16-alpine3.14

WORKDIR /usr/src/app

RUN chown node:node /usr/src/app

RUN apk add --no-cache setpriv

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

COPY package.json package-lock.json ./
COPY start-server.sh start-microservices.sh ./

RUN mkdir -p /usr/src/app/dist \
  && apk add --no-cache libheif vips ffmpeg

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

RUN npm prune --production

EXPOSE 3001
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 24678
CMD ["npm", "run", "dev"]



# # Web
# FROM node:16-alpine3.14 as base

# WORKDIR /usr/src/app

# RUN chown node:node /usr/src/app

# RUN apk add --no-cache setpriv

# COPY --chown=node:node package*.json ./

# RUN npm ci

# COPY --chown=node:node . .

# EXPOSE 3000

# FROM base AS dev
# ENV CHOKIDAR_USEPOLLING=true
# EXPOSE 24678
# CMD ["npm", "run", "dev"]

# FROM base as prod
# ENV NODE_ENV=production



# #----------------my test below
# #Build stage
# FROM node:16-alpine3.14 as builder

# WORKDIR /usr/src/app

# COPY package.json package-lock.json ./

# RUN apk add --update-cache build-base python3 libheif vips-dev ffmpeg
# RUN npm ci

# COPY . .

# RUN npm run build


# # Prod stage
# FROM node:16-alpine3.14

# WORKDIR /usr/src/app

# #web
# RUN chown node:node /usr/src/app

# COPY package.json package-lock.json ./
# COPY start-server.sh start-microservices.sh ./

# RUN mkdir -p /usr/src/app/dist \ && apk add --no-cache libheif vips ffmpeg setpriv
# #web
# COPY --chown=node:node package*.json ./

# RUN npm ci

# COPY --chown=node:node . .

# EXPOSE 3000

# # FROM base AS dev
# ENV CHOKIDAR_USEPOLLING=true
# EXPOSE 24678
# CMD ["npm", "run", "dev"]

# # FROM base as prod
# # ENV NODE_ENV=production

# COPY --from=builder /usr/src/app/node_modules ./node_modules
# COPY --from=builder /usr/src/app/dist ./dist

# RUN npm prune --production

# EXPOSE 3001