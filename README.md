# Install dependencies

`yarn` or `npm install`

## Run source

`yarn start` or `npm run start`
In the project directory, you can run:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Structure source
├── src
│   ├── assets
│   │   ├── images              // define static image used in project
│   │   └── scss                // core scss in project
│   │       ├── default.scss
│   │       ├── utils.min.css
│   │       └── variables.scss
│   ├── constants               // define constants
│   │   ├── common.js
│   │   ├── homePage.js
│   │   ├── index.js
│   │   ├── localStorage.js
│   │   ├── searchPage.js
│   │   └── store.js
│   ├── layouts                 // define all layout of website (auth, not auth, v..v)
│   │   ├── BasicLayout
│   │   │   └── index.js
│   │   ├── BlankLayout
│   │   │   └── index.js
│   │   ├── components
│   │   │   ├── Header
│   │   │   └── Menu
│   │   └── index.js
│   ├── libs                    // define functions utils
│   │   ├── auth.js
│   │   ├── axios.js
│   │   └── store.js
│   ├── routes                  // define type of route (Auth, Not Auth)
│   │   ├── DefaultRoute.js
│   │   ├── NotLoggedInRoute.js
│   │   ├── PrivateRoute.js
│   │   └── index.js            // define routing in website
│   ├── services                // define services to call API use with axios
│   │   └── MovieService.js
│   ├── store                   // state manangement - store 
│   │   ├── auth
│   │   ├── movie
│   │   │   ├── actions.js      // define actions to called in UI and in saga 
│   │   │   ├── mutations.js    // define mutations to update state
│   │   │   ├── reducer.js      // define type to update state (each type <=> each mutation)
│   │   │   └── saga.js         // define saga function to call API and call actions
│   │   ├── index.js
│   │   ├── rootReducers.js     // define all reducers in project
│   │   └── rootSagas.js        // define all sagas in project
│   ├── views                   // define all view pages 
│   │   ├── Auth
│   │   │   ├── Login
│   │   │   └── Register
│   │   ├── Common
│   │   │   └── PageNotFound.js
│   │   ├── DiningTable
│   │   │   ├── index.js
│   │   │   └── style.module.scss
│   │   ├── Home
│   │   │   ├── components      // define components of page Home
│   │   │   ├── index.js
│   │   │   ├── style.module.scss
│   │   │   └── style.scss
│   │   ├── Movie
│   │   │   ├── components
│   │   │   └── index.js
│   │   ├── SearchTable
│   │   │   ├── components
│   │   │   ├── index.js
│   │   │   └── style.module.scss
│   │   └── components          // define common components used in many view pages
│   │       └── ChooseTable
│   ├── App.js
│   ├── configStore.js          // config store and add redux middleware (redux-saga)
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── README.md
├── craco.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
└── yarn.lock
