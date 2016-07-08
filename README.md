# Places

> Save the places you love most.
> Discover places your friends love.

## Table of Contents

1. [Product](#product)
1. [Architecture](#architecture)
1. [Technology](#technology)
1. [Microservices](#microservices)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Product

> Place is a new point of interest discovery platform. 
> Enables users to share location and coordinate meetups.


The web platform relies on a main API server, and 4 microservices for full end-to-end functionality. 

Places has two client facing aspects: Mobile and Web.

### Web
Web application empowers the social components of Places. 

It enables users:

- To discover new places by following other users.
- To discover new places through personalized recommendations.
- To view their places on a map view.
- To locate their friends for meetup coordination.

### Mobile
Mobile enables users to pin places of interest along with a note and optional video. 

React Native mobile application enables users:

- To pin places of interest with a note and optional video.

There are 4 microservices which empower Places:

- Background Tracking Service
  - Persists each users current and previous location allowing users to see where their friends are and to identify their current mode of transport.
- Video Storage Service
  - Enables video storage on S3.
- Recommendation Engine
  - Provides custom recommendations to users.
- Data Generation Service
  - Generates random users and places. Allows automated movement of users.

## Architecture

### Services Diagram



### Schema Diagram



## Tech Stack

### Front-End
- React, Redux, React Google Maps, Webpack
- Webpack HMRE, Babel, Eslint, Airbnb Style Guide
- MaterializeCSS, Font Awesome

### Back-End
[Go to the API server repo](https://github.com/places-app/places-app-server).

- Node, Express, PostgreSQL, PassportJS, Multer

### Mobile
[Go to the mobile app repo](https://github.com/places-app/places-app-mobile).

- React Native


## Microservices

Access each microservice repo separately below:

- [Background Tracking Service](https://github.com/places-app/places-app-location-service)
- [Video Storage Service](https://github.com/places-app/places-app-video-service)
- [Recommendation Engine](https://github.com/places-app/places-recommendation)
- [Data Generation Service](https://github.com/places-app/places-app-generator)

## Development

### Installing Dependencies

In order to run the application locally in its full scope, you must have all other microservices and the API server installed and running. 

#### Environmental Variables

All services must have their environmental variables correctly configured in their `env/` directory. (refer to each service's respective repo under Microservices section).

For this web application setup the env vars in two files:

- Create a `clientDev.js` file based on the `.clientEnv.sample` file: used to access environmental variables from within the client JSX components and JS files.

- Create a `development.js` file based on the `.env.sample` file: used to access environmental variables from the client server.

Once all services are running, follow the commands below to run this primary web application.

#### Running the Web App

From within the root directory:

```sh
npm install
npm start
```

### Roadmap

View the project roadmap [here](https://waffle.io/places-app/places-app-web)

## Team

  - __Product Owner__: [Adam Lessen](https://github.com/lessenadam)
  - __Scrum Master__: [Sepehr Vakili](https://github.com/sepehrvakili)
  - __Development Team Members__: [Andrew Phavichitr](https://github.com/aphavichitr), [Jordan Tepper](https://github.com/HeroProtagonist), [Sepehr Vakili](https://github.com/sepehrvakili), [Adam Lessen](https://github.com/lessenadam)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
