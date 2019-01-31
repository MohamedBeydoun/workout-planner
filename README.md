# workout-planner

## Table of Contents

* [Summary](#summary)
* [Technologies](#technologies)                                                                  
	* [Backend](#backend)                                                                        
	* [Frontend](#frontend)                                                                      
* [Demo](#demo)                                                                                  
* [Running your project](#running-the-project)

## Summary

A platform for fitness enthousiasts to keep their workout schedules and meal plans in check. Users log into their accounts and are greeted by all their current and past workout plans (summarized with a title, main objective, and intensity). Once a plan is selected, the user will see a 7-day layout coupled with a meal plan. The webapp makes it easy to browse through previous plans to either revisit, change, or use them as inspiration for a new workout routine.

## Technologies

* Vue/Vuex/Vuetify
* NodeJS
* Express
* MongoDB
* Bycrypt
* JWT

#### Requirments
* [NodeJS/npm](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Vue CLI](https://cli.vuejs.org/)

### Backend

##### [Express](https://expressjs.com/)

Express is used to manage the API's endpoints.

##### [MongoDB](https://www.mongodb.com/)

I used MongoDB in tandem with the mongoose library to send and query data from a database. The database stores user information: authentication information, workout routines, and meal plans.

### Frontend

#### [VueJS](https://vuejs.org/)

VueJS is used to structure the frontend alongside Vuex and Vuetify. The latter two are used for global state management and to provide a smoother user experience respectively. I use vue router to manage different front-end componnents while maintining a single page web application.

## Demo

![](/readme-images/login.png?raw=true)

![](/readme-images/dashboard.png?raw=true)

![](/readme-images/newPlan.png?raw=true)

![](/readme-images/plan.png?raw=true)

![](/readme-images/openPlan.png?raw=true)

## Running the Project

* Run `mongod` in its own terminal
* Run `npm start` in the back-end folder
* Run `npm run serve` in fornt-end folder
* Navigate to [localhost:8080](http://localhost:8080)
