# hackable-nuxt
Hackable aims to provide a base setup of Nuxt with user authentication setup. It handles session through the use tokens stored in the cookie.

# API
A very simple express authentication setup. You can howerver choose to swap this out with any backend setup you choose. When doing so, make sure to change the env settings to match your API server.

## .env

```
SITE_URL=http://localhost:3000
API_URL=http://localhost:3001 # or http://api
API_URL_BROWSER=http://localhost:3001
LOGIN_PATH=/login # Coming soon
REGISTRATION_PATH=/registration # Coming soon
```

SITE_URL: for CORS purpose so it only allows your domain access
API_URL_BROWSER: a public facing url that will be accessible by the browser
API_URL: Optional if you have a local dns(like when using docker links) that you want to bind your API host to

# Coming next
[ ] Ability to change Login and Registration path
