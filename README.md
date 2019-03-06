# Games Hub

Games Hub is a full stack JavaScript application with an Express server and MongoDB database.

## Getting Started

These instructions will get the project up and running on your local machine for development purposes.

### Installing

Install dependencies:

```
npm install
```

Run a mongoDB server (leave running in a terminal window):

```
mongod
```

Seed the database:

```
mongo < server/db/seeds.js
```

Run webpack (leave running in a terminal window):

```
npm run build
```

Run express (leave running in a terminal window):

```
npm run server:dev
```

### Using

The application is running on port 300 so visit http://localhost:3000/.
