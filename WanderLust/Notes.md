# WanderLust (Airbnb Clone) 

We will be making fronend and backend both.

Technologies:
frontend: Tailwaind CSS, html, CSS, JS
Backend: Node.js, express.js, ejs, ejs-mate, cookie-parser
Database: MongoDB

## Project Phase 1

Getting Started
    Database set Up
    Rest Apis for CRUD

Commands:
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

#### Routes
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