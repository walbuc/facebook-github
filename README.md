## facebook GitHub SPA

## URL

Deployed using [now](https://zeit.co/now).

```
https://facebookgithub-oigidvwzpd.now.sh/
```

## Time 5:30 hs.

This web app has been implemented using [create react app](https://github.com/facebook/create-react-app) boilerplate and Redux to manage the global app state.
The[redux saga](https://redux-saga.js.org) middleware has been used to better handle async operations and isolate side effect functions.

Also integration tests has been created with [pupeteer](https://github.com/GoogleChrome/puppeteer) to manage a headless chromium instance and [jest](https://facebook.github.io/jest/) test runner
to validate the correct operation end to end.

## Instructions

### Local development:
``` js
npm install
npm start
```

### Tests:
``` js
npm run test
```

### Production:
Using [serve](https://www.npmjs.com/package/serve) module.
``` js
npm run now-start
```
