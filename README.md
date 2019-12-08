[![Build Status](https://travis-ci.com/yossarianirving/CSCRecipes.svg?branch=master)](https://travis-ci.com/yossarianirving/CSCRecipes)\
[![Coverage Status](https://coveralls.io/repos/github/yossarianirving/CSCRecipes/badge.svg?branch=master)](https://coveralls.io/github/yossarianirving/CSCRecipes?branch=master)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

To install this project, run 

```
git clone https://github.com/yossarianirving/CSCRecipes.git
cd CSCRecipes
npm install
```

## Running

Run `npm run start` to start a development server. 

Run `npm run build` to build the project in production mode

## Environment files

As it stands, the `.env` file contains the needed environment variables for development, testing and deployment.

To override these variables create a `.env.development` file for development, `.env.test` for testing, and `.env.production` for production.
Then add the necessary variables and react will automatically use those instead of the included `.env` file.
