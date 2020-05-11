# Training app

## API server setup

* [fastify](https://www.fastify.io/)
* [fastify-swagger](https://github.com/fastify/fastify-swagger)


## Testing setup

* [Jest](https://jestjs.io/)

## Code convention

* [standard js](https://standardjs.com/)

## CI/CD

* github actions

### Starting application in development environment

In order to have hot reload run scripts:

```
npm run start:watch
npm run build:frontend:dev
```

Backend will serve new builds as frontend will be rebuilded on changes.
