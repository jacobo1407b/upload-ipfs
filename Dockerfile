FROM node:16-slim as builder

COPY package.json yarn.lock* ./
RUN yarn install

COPY . .
COPY .env .env
RUN yarn && yarn cache clean --force

RUN NODE_ENV=production yarn build

FROM node:16-alpine
ENV PORT=$PORT

WORKDIR /app
COPY --from=builder package.json tsconfig.json yarn.lock ./
COPY --from=builder build/ ./build
COPY --from=builder node_modules/ ./node_modules
COPY --from=builder .env .env

#EXPOSE 8080
#ENTRYPOINT [ "yarn", "start"]
CMD [ "yarn","start" ]