# Just Tech News

## Description
Back end for a tech news website where users can post, upvote, and comment on links to news articles.

## Table of Contents
[Installation Instructions](#installation-instructions)   
[Built With](#built-with)  
[Deployed Application](#deployed-application)  
[Contribution](#contribution)  

## Installation Instructions
npm, Node.js, Express.js, MySQL, MySQL2, Sequelize, dotenv, and bcrypt must be installed to use this application.

* To initialize npm, enter "npm init" in terminal while in the root folder of the project
* Node.js can be downloaded and installed from https://nodejs.org/en/download/  
* MySQL can be downloaded and installed from https://dev.mysql.com/downloads/mysql/
* To install Express.js, MySQL2 and Sequelize, enter "npm install express sequelize mysql2" in terminal while in the root folder of the project
* To install the dotenv package, enter "npm install dotenv" in terminal while in the root folder of the project
* To install the bcrypt package, enter "npm install bcrypt" in terminal while in the root folder of the project 

Once the above steps have been followed, follow the steps below to run the application: 
* Enter the database name, your MySQL username and your password into the .env file
* Enter "mysql -u root -p" and enter your MySQL password to navigate to the MySQL Shell
* Enter "source db/schema.sql" in the MySQL Shell to create the "just_tech_news_db" database
* Exit the MySQL Shell and enter "npm run seed" in terminal while in the root folder of the project to seed the data in the "seeds" folder to the database
* Enter "npm start" in terminal to launch live server

## Built With
* Node.js
* JavaScript

## Deployed Application
https://just-tech-news-dch.herokuapp.com/

## Contribution
Made with ❤️ by Dylan Hay