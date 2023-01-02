# Just Tech News

## Description
Back end for a tech news website where users can post, upvote, and comment on links to news articles.

## License  
This application is covered under the following license. Please review the link below for additional information pertaining to the license.
    
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)  
https://www.gnu.org/licenses/gpl-3.0

## Table of Contents
[Built With](#built-with)  
[Installation](#installation)   
[Testing](#testing)  
[Contribution](#contribution)  

## Deployed Application

## Built With
* JavaScript
* Node.js
* Express.js
* MySQL2
* Sequelize
* Sessions
* dotenv
* bcrypt
* Handlebars
* HTML
* CSS
* Jest
* Git
* Insomnia
* Cyclic

## Installation
To run locally once cloned:
* Enter `npm install` in the command line while in the root folder to install the required npm packages
* Create a .env file in the root folder and add the following lines to the file, filling in your MySQL username and password:

    `DB_NAME='just_tech_news_db'`  
    `DB_USER=''`  
    `DB_PASSWORD=''` 

* Enter `mysql -u root -p` and enter your MySQL password to navigate to the MySQL Shell
* Enter `source db/schema.sql` in the MySQL Shell to create the `just_tech_news_db` database
* Exit the MySQL Shell and enter `npm run seed` in the command line while in the root folder to seed the database
* Enter `npm start` in terminal to launch live server
* Routes can tested and database can be edited via an API development platform such as Insomnia

## Testing
* Enter `npm test` in the command line while in the root folder to run Jest

## Contribution
Built by Dylan Hay