# WanderLust (Airbnb Clone) 

We will be making fronend and backend both.

Technologies:
- frontend: Tailwaind CSS, html, CSS, JS
- Backend: Node.js, express.js, ejs, ejs-mate, cookie-parser, passport
Database: MongoDB

## Project Phase 1

- Getting Started
    Database set Up
    Rest Apis for CRUD

- Commands:
    npm init -y
    // To create package.json

    npm i express
    npm i ejs
    npm i mongoose

1. Creating app.js which will be the main file for our project.
2. Listen for the requests
3. Connect to the database using mongoose
4. Creating Model: Listing
    // Model is create in seperate models folder
    title
    description
    image
        To set the default value of image we can use setter
        set: (v) => v === "" ? link : v
        default: link
    price
    location
    country

5. Initializing database
    This will be used to initialize the database the sample values.
    Using init folder 
        data.js will contain sample data
        index.js will initialize the data

npm install method-override
    This package is used to send the put, patch, delete requests.

### Routes
1. Index Route
    Get --> /listings   --> return all listings
2. Read & Show Route
    Get --> /listings/:id --> return specific listing
    To show price in indian rupee form
        num.toLocaleStirng("en-IN")
3. New & Create Route
    Get --> /listings/new --> form --> submit --> POST --> /listings
4. Edit & Update Route
    Get --> /listings/:id/edit --> edit form --> submit --> PUT --> /listings/:id
5. Delete Route
    Delete --> /listings/:id

### EJS Mate
    npm i ejs-mate
    It helps to create templates and layout like navbar, header, footer, etc.
    <% layout("/layouts/boilerplate") -%> in other files &
    <%- body %> in original file

### Designing
Designing all the components and pages using Bootstrap and style.css

### Error Handling and Middlewares

#### client side validation - Form Validations
    When we enter data in the form, the browser and / or the web server will check to see that the data is in the correct format within the constriants set by the application.

#### Error handling
    using custom wrapAsync on replacement of try-catch
    Using custom expressError
    Using error.ejs for better display of error.

#### Validation for Schema
    We will use Joi to validate our schema.
    npm i joi
    Converting joi validation into a function and use as the middleware

## Project Phase 2

### Handling Deletions
    using Mongoose Middlewares
    We can use 2 middlewares:
        pre - run before the query is executed
        post - run after the query is 

### Reviews
#### Creating New Model: Reviews
    comment
    rating (1 to 5)
    createdAt

1 listing can have multiple review so this is one many relationship.

#### Create Reviews
1. Setting up the Reviews Form
    We will add review form to shows page
2. Submitting the Form
    Post --> /listings/:id/reviews
3. Validations for Reviews
    client side validation
    server side validation using joi
4. Render Reviews
    show reviews in show page.
5. Deleting Reviews
    $pull - The $pull operator removes from an existing array all instances of a value or values that match a specific condition.

    If we delete a review then that review Id should be deleted from the listing reviews array.

    If we delete a listing the reviews related to that listing should be deleted so we will use a post middleware

### Express Router
Express router are a way to organize you express application such that our primary app.js file does not become bloated.

const router = express.Router() // creates new router object

while using express router if we have to pass the parameters from app.js to reviews.js then we have to mergeParams.

### Cookies
web cookies
    HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.

    used for:
        1. Session management
        2. personalization
        3. Tracking

    We will be using cookie-parser package to extract data from cookies which are already set.
        npm i cookie-parser
    
    signed is a property which indicates if the cookie is be signed
    signed cookies cannot be tampered.

### State
- Session
    When a client interacts with our server, this one interaction is called session.
- Stateful Protocol
    stateful protocol requrire server to save the status and session information
    eg - ftp (file transfer protocol)
- Stateless Protocol
    Stateless protocol does not require the server to retain the server information or 
    eg - http

### Express Session
An attempt to make our session stateful
    express session assign unique id to a session and then save their information in a temporary storage not in database.
    The unique id is given to browser in form of a cookie.

    npm i express-session

    by defaults cookies don't have expiry date so we can explicitly add a exipiy date so that cookies remain stored after closing browers.

### connect-flash
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
    npm i connect-flash

### res.locals
Use this property to set variables accessible in templates rendered with res.render.

### Authentication and Authorization

Authentication: Authentication is the process of verifying who someone is.

Authorization: Authorization is the process of verifying what specific application, files, and data a user has access to.

#### Storing Passwords
- We Never store the passwords as it is. We store their hashed form.
- We use hashing function to change password to another form.

#### Hashing
- For every input, there is a fixed output
- They are one-way functions, we can't get input from output
- For a different input, there is a different output but of same length
- Small changes in input should bring large changes in output.

#### Salting
Password salting is a technique to protect passwords stored in databases by adding a string of 32 or more characters and then hashing them.

eg. salt = "%*&"
    abc --> abs%*& (salted string)

#### Passport
- It is library which help in authentication.
- Passport si Express-compatible authentication middleware for Node.js.

- passport-local is used for username and password.
- to use mongodb we use passport-local-mongoose.

npm i passport
npm i passport-local
npm i passport-local-mongoose

#### User Model
- user: username, passport, email

- You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.
- Additionally, Passport-Local Mongoose adds some methods to your Schema.

#### Configuring Strategy

- passport.initialize()
    A middleware that initializes passport.

- passport.session()
    A web application needs the ability to identify users as they browse from page to page. This series of requests and responses, each associated with the same user, is known as a session.

- passport.user(new LocalStrategy(User.authenticate()))

-- passport implements pbkdf2 hashing algorithm.

#### Signup User
- Get --> /signup --> submit --> Post --> /signup

#### login User
- Get --> /login --> submit --> Post --> /login

#### Connecting login Route
- We want that if a user is logged in then only it can create a new listing otherwise not.
- To check if user is logged in
    -> req.isAuthenticated() // passport method

#### Logout User
- Get --> /logout
- req.logout method to logout user through passport

#### Adding styling 
- If user is not logged in then show the signup and login options
- If user is logged in then show logout option
- Adding options to the navbar.ejs
- using req.user to add the functionality
- we cannot use req.user directly in ejs file so we will declare it as local variable in app.js

#### Login after signup
- If we signup then we should be logged in.
- Passport's login method automatically established a login session.
- We can invoke login to automatically login a user.

#### Post Login page
- If a user is trying to create a listing then it needs to be logged in so, login page appears but after it redirects to the listings page.
- But it should redirect to where it wanted to go in this case create listing.
- Using req.originalUrl parameter to resolve this issue

- path --> login --> path (redirectUrl stored as local var using middleware)

#### Listing Owner
- Only the owner of the listing should have permission to delete or edit the listing
- Added owner in listing model

### Authorization
- hinding delete and edit button for those who are not owner of that listing
- Created middleware to handle authoriazation.

#### Authorization of reviews
- For every review it will have author property.

## Project Phase 3

### MVC: Model, View, Controller
- Implement Design Pattern for listings
- We will create a controllers folder where we will create controllers for listings, reviews, and users

### Re-styling the rating
- we will user starability library to restyle the rating

### Image Upload
Problems:
    - form is not able to sent file to backend
    - size limit of mongoDB-BSON
Solution:
    - make form capable of sending files
    - we will not save file in mongoDB
    - use 3rd party service (cloud server)
    - after saving file on cloud it will provide a URL/Link
    - Then we will save URL in mongo

### Manipulating Form
enctype="multipart/form-data"
    - changing encoding type so that the form can be cabable to send file type data to the backend.
    - To parse this type of data we will use Multer Library of npm

### Cloud Setup
- We will use cloudinary for cloude storage

- To store the credentials we will use .env file
    - .evn file is used to store environment variables
    - KEY=value (format of storing variables with no spcaes)
    - To access the environment variables with need npm package dotenv
    - require("dotenv").config();
    - Then we can access variables through process.env
    - ex. console.log(process.env.SECRETE)

### Store File
Multer store cloudinary
- npm i cloudinary multer-storage-cloudinary
- We will create a new file called cloudConfig to store data related to cloudinary

form(file) --> backend(parse) --> cloud(store) --> URL/Link(file)

- To save the link in mongo we will modify the image in schema
    - add url and filename

### Mongo Atlas
    - cloud database service
    - Deploy a multi-cloud database.

### mongo session
    - we will use connect-mongo

### Deployment
- We are using render for this
- In package.json we need to add
    "engines": {
        "node": "20.15.0"
    }
    to specify the node version