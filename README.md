# CS-465-R3371-Full-Stack-Development-with-MEAN

## Project Stack
[![Angular](https://img.shields.io/badge/Angular-FF5733?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

## Tools
[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)](https://code.visualstudio.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)


## Architecture

**_Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)._**

  - Each framework, Express HTML, JavaScript and Angular serve a purpose in the front-end development world, Express is a traditional choice for simple web applications utilizing traditional server-side rendering, Express will reload a page each time a user sends a new request, this can have its draw backs at times. JavaScript can be utilized for creating dynamic HTML and CSS content and is typically used in conjunction with some frameworks. Single Page Applications allow for dynamic loading as views are loaded initially, Angular utilizes JavaScript for client-side routing and more, SPA’s can allow for a responsive and pleasant user experience, potentially reduce server resources required as full page reloads are not necessary, On the contrary Initial load times may be slower than a express website. Deciding a front-end framework will be dependent on the requirements and design constraints per projects, I personally have gained a liking for Angular.
    
**_Why did the backend use a NoSQL MongoDB database?_**

  - MongoDB is an open-source NoSQL database that is beginner friendly, scalable, and highly flexible. MongoDB utilizes a document style data model that factors into its high flexibility. MongoDB uses JavaScript based language for queries and naturally integrated with the backend of this project (Node.js) very well. I personally enjoy using MongoDB due to their well written documentation, fast queries, and my familiarity with the database. Given MongoDB is free to use, integrates seamlessly into our backend, and is structured in a way that beginners can quickly understand how data will be structured makes this a great choice for an entry level full stack development class. 


##


## Functionality

**_How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?_**

- JSON is a data interchange format based on JavaScript and JavaScript is a scripting language, they have similarities in terms of syntax, but JSON tends to follow a slightly stricter formatting policy. JSON is used to essential standardized data formatting when communicating with the front end or backend servers.

**_Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components._**
  - During this full stack application’s development, a few examples of refactoring code segments within my full stack application include, Implementing a separate routing file to separate main application components declaration and imports, to enhancing my error handling, Additional refactoring or enhancements I would like to make would be implementing a toast management service to provide the user with feedback based on actions such as notifying when a successful creation occurs. Utilizing Angular component-based project structure allows for the creation of user interfaces that can be built using components as building blocks. Allowing for reusability, dynamic rendering of data and more, an example of this could be the navigation bar although it is utilized in the app component structure when placed in the main app component it will be rendered across all views of the single page web application. Additionally, I have implemented a component for a trip listing that dynamically creates a new instance of itself per trip listing stored in the database. 

##


## Testing

**_Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application._**

**API Endpoints**
| Method | Purpose | URL |
| --- | --- | --- |
| `POST` | Login Authentication | `/api/login` |
| `POST` | Register | `/api/register` |
| `GET` | Retrieve list of trips | `/api/trips` |
| `POST` | Add new trip | `/api/trips` |
| `GET` | Retrieve single trip | `/api/trips/{tripCodeHere}` |
| `PUT` | Update existing trip info | `/api/trips/{tripCodeHere}` |
| `DELETE` | Delete a trip | `/api/trips/{tripCodeHere}` |

_HTTP Methods_ `GET`, `POST`, `PUT`, `DELETE` define actions a user can take when manipulating data on a web application. _Endpoints_ are a specific URL a user can access to accomplish specific task, HTTP Methods and Endpoints work in conjunction to allow a user to perform a certain action on data. For example, `GET` <-method `/api/trips` <- endpoint in this application will allow the user to retrieve a list of trips stored in the Travlr Getaways database. Security in this application utilizes JSON Web Tokens that contain a header as well as a payload and a signature, the header contains the type of signing algorithm used, the payload being the new and or edited data, and the signature to verify token. JWT has a life expectancy that can be modified. This expiration ensures a user will need to be re authenticated after x amount of time passes. The authentication process involves having a username and password stored and will be compared to the login attempt the user makes, Once the user is verified a JWT is generated and verified and stored locally, if the user meets the requirements for certain protected routes, they will now be able to access these. API endpoint testing took place utilizing Postman and making request to the backend to ensure proper responses. 

##


## Reflection

**_How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?_**

- This full stack development course has opened my eyes to my true enjoyment for full stack development and has provided me with the knowledge of the following front-end frameworks, Angular & Express, as expanding my knowledge on the Node.js backend framework. The knowledge and skills gained from this class has allowed me to set out on my own creating an additional full stack application utilizing MongoDB, Angular and Spring boot. I will utilize my new skills to continue to improve on my coding abilities and attempt to pursue a career in full stack development. Other skill increases this class has provided include proper utilization of error handling and feedback for troubleshooting purposes, utilization of browser tools to assist in troubleshooting and meeting industry standard coding practices in terms of HTML format and others. Understanding fundamental usage of JWT and authenticating users. This has been a wonderful class and I truly wish I had more full stack development classes to take! 
