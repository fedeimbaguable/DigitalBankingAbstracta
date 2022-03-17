# DigitalBankingAbstracta

## Prerequisites

* Install [Java SDK](https://openjdk.java.net/)
* Install [Git](https://git-scm.com/)
* Install [Docker](https://www.docker.com/products/docker-desktop)
* Install [NodeJs](https://nodejs.org/en/)

### Instaling and hosting the Digital Bank application

1. Clone the repository from github: (https://github.com/fedeimbaguable/DigitalBankingAbstracta) 
2. To host the app, you must enter the root directory of the project by console, and then:
cd  deploy/docker-compose
docker-compose -f docker-compose-postgres.yml up 
After it finishes initializing everything, the application will be accessible from:
http://localhost:8080/bank and to the api documentation at
http://localhost:8080/bank/swagger-ui.html
To go back to before services:
cd  deploy/docker-compose
docker-compose -f docker-compose-postgres.yml down 
3. To install the dependencies you must enter the root directory of the project by console and run "npm install"


#### To run the tests:

1) Open VSC in the directory you cloned the repository

2) In VSC open a new terminal

<<<<<<< HEAD
3) Type the command: npm run test to run the whole test. (to run only the login use: npm run login, to run only the checkings: npm run checking, to run only the savings: npm run savings and to run only the deposit: npm run deposit)
=======
3) Type the command: npm run test to run the whole test. (to run only the login use: npm run login and to run only the checkings: npm run checking)
>>>>>>> f9943a293b665c459a747fcd7279c64ef94f08a6
