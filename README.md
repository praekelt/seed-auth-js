# seed-auth-js
js client for seed-auth-api

## install

```
$ npm install @praekelt/seed-auth
```

## usage

```js
const auth = require('@praekelt/seed-auth');

auth.users.list()
  .then(res => console.log(resp.data));
```

## api

### configuration

Configuration can be provided as an options object for each api method:

```js
auth.users.list({conf: {token: '1234'}});
```

or set for all api methods:

```js
auth.conf.token = '1234';
```

#### `conf.prefix`

The prefix to use for requests. Defaults to `http://localhost:8000`.

#### `conf.token`

The authentication token to use for requests.


### query params

Query params for api methods can be provided directly in the options object for each api method:

```js
auth.users.list({archived: true});
```

### pagination

The result object contains `next()`, `prev()`, `hasNext()` and `hasPrev()` methods for traversing paginated results:

```js
auth.users.list({
    page: 1,
    page_size: 2
  })
  .then(res => {
    // `true` if there is a next page, otherwise `false`
    console.log(res.hasNext());

    // `true` if there is a previous page, otherwise `false`
    console.log(res.hasPrev());

    return res
  })
  .then(res => res.next()) // next page (or `null` if there is no next page)
  .then(res => res.prev()); // prev page (or `null` if there is no prev page)
```

### [`auth.user`](src/user.js)
### [`auth.tokens`](src/tokens.js)
### [`auth.passwords`](src/passwords.js)
### [`auth.users`](src/users.js)
### [`auth.organizations`](src/organizations.js)
### [`auth.teams`](src/teams.js)
