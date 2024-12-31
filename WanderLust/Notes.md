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