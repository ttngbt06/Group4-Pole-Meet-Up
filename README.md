# Group4-Poll-Meet-Up<!-- omit from toc -->
By:   Martin, Zach, Toan and Sheila   
![alt text](public/images/logo.png)
## Description <!-- omit from toc -->
This is a interactive and mobile responsive site to assist you and your friends with deciding where to meet up. Logged in users can create a poll(s) with suggestion and the group can vote on their preferred choice.  Logged in users can also view past polls, create polls, users, user email, and vote.   
## Table of Contents <!-- omit from toc -->
  
- [Installation](#installation)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Database Model Diagram](#database-model-diagram)
- [Wireframe](#wireframe)
- [View of homepage](#view-of-homepage)
- [Features](#features)
- [Challenges](#challenges)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)
- [Badges](#badges)
    


## Installation
- Clone the repository to get your starter code  
- Install dependencies
  - npm init  
    - npm install Sequelize  
    - npm install dotenv package  
    -  npm install MySQL  
    -  npm install MySQL2  
    -  npm install Node.js  
  
  ### User Story
- AS A developer with various social circles    
    - I WANT an accessible app  
    - SO THAT I can browse events and activities in my local area, create polls with friends & family, and quickly reach a consensus on how to spend an evening 
  
  ### Acceptance Criteria  
-  **GIVEN** a social media-style application
     - **WHEN** I visit the app for the first time
     - **THEN**  I am greeted with a display of various types of events including food, sports, and entertainment, showcasing what the app has to offer


     - **WHEN**  I click on the home
     - **THEN**  I am taken to the homepage
     
     - **WHEN**  I choose to sign up
     - **THEN**  I am prompted to create a username and a password, and submit an email address

     - **WHEN**  I click the sign up button
     - **THEN**  my credentials are saved and I am logged in

     - **WHEN**  I revisit the site and choose to log in
     - **THEN**  I am prompted to enter my username and password

     - **WHEN**  I am logged into the site
     - **THEN**  I see options for Browse, Create Poll, Poll History, Contact List, and to log out

     - **WHEN**  I click Browse
     - **THEN**  I am brought to another screen showing all active polls

     - **WHEN**  I click a Create Poll
     - **THEN**  I am brought to a form to create a Poll and to enter up to five options with a Create Poll button

     - **WHEN**  I click Submit
     - **THEN**  as the users vote I will see a live status of results

     - **WHEN**  I click Poll History
     - **THEN**  I am able to view a list in chronological order of all Polls I have been created by users

     - **WHEN**  I click Contacts List
     - **THEN**  I am brought to a screen with a list on users who you may email  
      
## Usage 
- Run schema
  -  Develop folder - db folder - right click schema.sql 
      -  Then open in an integrated terminal and type the following commands in  
           -  mysql -u root -p  
           -  password - [enter your password]  
           -  source db/schema.sql  
           -  quit (this is going to end the sql shell = Bye)  
            ![alt text](assets/imgs/mysql.png)
- Run seeds
  - JS server.js - right click server.js
      - Then open in an integrated terminal and type the follow commands in  
          - npm i (run to make sure all the dependencies are installed before you begin)
          - npm run seed  
              ![alt text](assets/imgs/seeds.png)
      - Starting the server 
          - npm start
           - response on last line = Now Listening  
              ![alt text](<assets/imgs/npm start.png>)

## Database Model Diagram  
  ![alt text](assets/imgs/ERD.png)
  
## Wireframe    
- Laying out the group ideas on the first day  
  
  ![alt text](assets/imgs/wireframe.png)  

## View of homepage  
  ****ADD IMAGE OF HOMEPAGE HERE****


## Features
  - Using socket.io
  - Using handlebars

## Challenges  
  - Learning a new language, socket.io and handlebars  
  - Group project 
    - divide and conquer while maintaining great communication to all cohorts


## Contributing
[NPM](https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme#installation)  
[Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4)  
[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)    
[Node.js](https://nodejs.org/docs/latest/api/) 
[Stack Overflow](https://stackoverflow.com/?newreg=67d94556b887449fa2885dadf54a5439)  
[JS Cheatsheet](https://htmlcheatsheet.com/js/)  
[W3school](https://www.w3schools.com/)  
[DEV](https://dev.to/envoy_/150-badges-for-github-pnk#contact)  
[Shields](https://shields.io/)  
[Sequelize](https://sequelize.org/docs/v6/getting-started/)   
[YouTube](https://youtube.com)  
[Insomnia](https://insomnia.rest)  
[Logo Maker](https://logo.com/)  
[cdnjs](https://cdnjs.com/libraries)  
[socket.io](https://socket.io/blog/socket-io-3-release/)  
[handlebars](https://handlebarsjs.com/)  
[heroku](https://stackoverflow.com/questions/69196421/seed-mysql-database-on-heroku)  
U of M teachers and materials from bootcamp  

## Testing
-  2 programs below were used for testing  
  
    - Insomnia  
    ![  ](assets/imgs/insomnia.png)  
    - MySQL Workbench  
        ![alt text](<assets/imgs/mywork bench.png>)


## Questions
![Ask me anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
If you have any questions, or additional feedback, please feel free to email us and we will respond as soon as possible.
    
* Github -
[https://github.com/ttngbt06/Group4-Pole-Meet-Up.git](https://github.com/ttngbt06/Group4-Pole-Meet-Up.git)  

* Heroku -
  [https://poll-meetup-e1093fdd4126.herokuapp.com/](https://poll-meetup-e1093fdd4126.herokuapp.com/)

* Email the team -   
  - Sheila  
    slhanson11@live.com  
  - Martin  
    martin.aguero84@gmail.com  
  - Toan  
    ttngbt06@gmail.com  
  - Zach  
    zach.zsa.allen@gmail.com  

## License 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Badges
![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Insomnia](https://img.shields.io/badge/Insomnia-black?logo=insomnia&logoColor=5849BE) ![MYSQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)    
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat-square) 
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)   
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)  ![Lenovo](https://img.shields.io/badge/lenovo-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)  ![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat-square)
![W3schools](https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=W3Schools&logoColor=white) ![JSON](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=red)  ![Socket.io](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)  
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white) ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)  ![Google Chrome](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)  ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)  
![MYSQLITE](https://img.shields.io/badge/Sqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) ![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)  ![Lenovo](https://img.shields.io/badge/lenovo%20laptop-E2231A?style=for-the-badge&logo=lenovo&logoColor=white)   ![Handlebars](https://img.shields.io/badge/Handlebars%20js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)
 