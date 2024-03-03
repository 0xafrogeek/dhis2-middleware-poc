# DHIS2 Middleware for Public Portal

-   Proof-of-concept for a more secure implementation of a DHIS2 Midddleware for Public Portals

What is this PoC about?

-   A minimal working PoC for a more secure DHIS2 Middleware for public data visualization portals.

-   Additional security measures and best practices are implemented to ensure that only authorized users can access the middleware endpoint/s, using the following:

> **_NOTE:_** This is in no way a comprehensive list of security measures, but a starting point towards a more secure implementation of a DHIS2 Middleware for public portals.

    -   API Key Authorization
    -   IP Whitelisting
    -   Rate Limiting
    -   Request Logging
    -   Error Handling
    -   Caching (in-memory) for frequently accessed endpoints to reduce the load on the DHIS2 server.

## Pre-requisites

-   Node.js >= v16.20.1

# Installation

1. Clone the repository to your local machine:

```bash
git clone git@github.com:0xafrogeek/dhis2-middleware-poc.git
```

2. Change directory to the project folder:

```bash
cd dhis2-middleware-poc
```

3. Install packages:

```bash
npm i
```

4. Copy the `example.env` file to `.env` and update the values accordingly.

```bash
cp example.env .env
```

5. Run the project in development mode:

```bash
npm run dev
```

6. Once middleware is up and running, any unauthorized request to the /indicators endpoint will be rejected with a 401 Unauthorized response. Only requests with a valid API Key will be allowed.
