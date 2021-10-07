# Artsy Multienv

Load multiple dotenv style environment files

## Install

```bash
# with npm
npm install @artsy/multienv

# or with Yarn
yarn add @artsy/multienv
```

## Usage

As early as possible in your application, require and configure dotenv.

```javascript
import { loadEnvs } from '@artsy/multienv'
```

Create some `.env` files in the root directory of your project. Add
environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

db.env

```dosini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

redis.env

```dosini
REDIS_HOST=localhost
REDIS_USER=root
REDIS_PASS=s1mpl3
```

```javascript
loadEnvs('db.env', 'redis.env')
```

`process.env` now has the keys and values you defined in your `.env` files.
