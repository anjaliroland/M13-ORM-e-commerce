# E-commerce Back End


## Table of Contents

- [Description](#📝-description)
    - [User Story](#👤-user-story)
    - [Acceptance Criteria](#☑️-acceptance-criteria)
- [Technologies Used](#🛠️-technologies-used)
- [Usage](#💻-usage) 
    - [Screenshot](#📸-screenshot)
- [License](#📃-license)
- [Links](#🔗-links-to-docs)

---------------

## 📝 Description

For Module #13 on Object-Relational Mapping we were given the task of modifying starter code to build the back end for an e-commerce site. Using sequelize models and routes I was able to add code that makes the app meet the criteria below.


### 👤 User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### ☑️ Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
---------------


## 🛠️ Technologies Used

<ul>
<li>JavaScript
<li>Node
<li>dotenv
<li>express
<li>MySQL2
<li>sequelize
</ul>

---------------

## 💻 Usage

**Video Walkthrough:** 

><em>MySQL has to be installed on computer for this application to run.</em>

***Steps for Usage***  
**1:** once repo is cloned to local machine cd into it in the terminal  
**2:** use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data   
**3:** run `npm i` to install dependencies     
**4:** run `mysql -u root -p` to start mysql     
**5:** once logged into mysql shell run `source schema.sql;` to create the database then `exit` to quit mysql shell  
**6:** run `npm run seed` to seed data into database  
**7:** run `node server` to start app  
**8:** open Insomnia or another  API development app to GET, POST, PUT, and delete the routes for catergories, products, and tags    


### 📸 Screenshot

![screenshot of insomnia get request](/assets/screenshot.png)

---------------

## 📃 License

Please refer to the LICENSE in the repo.

---------------

##  🔗 Links to Docs

**dotenv:** https://www.npmjs.com/package/dotenv  
**express:** https://www.npmjs.com/package/express  
**mysql2:** https://www.npmjs.com/package/mysql2  
**sequelize:** https://www.npmjs.com/package/sequelize  

