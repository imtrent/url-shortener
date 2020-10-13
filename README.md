# URL Shortener

Built with TypeScript, GraphQL, Apollo, PostgreSQL, and React

## Installation

Install the yarn dependencies in the root directory, client directory, and server directory, by running the following command.

```
yarn install
```

Next up, you need to create a new postgres database so that the URLs can be stored. If you do not have PostgreSQL installed on your machine, you can download it on the [PostgreSQL website](https://www.postgresql.org/download/).

1. Connect to PostgreSQL through the command line.

```
psql
```

2. Create a new database

```
CREATE DATABASE "url_shortener";
```

3. Disconnect from the postgres terminal.

```
exit
```

Once you have disconnected from postgres, create an env file and copy the contents of the .env.example file that is in the server directory.

```
cd server && cp .env.example .env
```

Make sure the database variables in the `.env` file reflect the database you just created.

```
NODE_ENV=development
PORT=8000

DB_CONNECTION=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=url_shortener
DB_USERNAME=postgres
DB_PASSWORD=secret
```

### Local Development

To start both the frontend and backend local development servers, run the following command from the root directory.

```
yarn start
```

You are now able to access the React frontend at http://localhost:3000/ and the TypeScript GraphQL backend at http://localhost:8000/
