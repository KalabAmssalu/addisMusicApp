# Addis Music Application 

**Task breakdown for the Addis Software Test Project - MERN Stack**
## Project Objective
Creating a music website application using MERN stack.



# Tasks Progress

### 1. Make a folder **"AdissMusicApp"**
   
        mkdir AdissMusicApp

### 2. Create a github repository **"addisMusicApp"** 
   
   - On GitHub create a new repository named "addisMusicApp".
### 3. Create a frontend

        npm create-react-app frontend --template typescript

### 4. Create a backend 

        npm init -y

### 5. Install required packages 

----
### Frontend Package

**- Install emotion Styled System**   

    npm i @emotion/styled @emotion/react @emotion/core

**- Install Redux Toolkit**

    npm install @reduxjs/toolkit
    npm install react-redux
**- Install Redux-Saga**

    npm install redux-saga
**- Install Styled system**

    npm i styled-system styled-components @types/styled-components
**- Install React-Router-Dom**

    npm install react-router-dom
**- Install Lucide React icons**

    npm install lucide-react
**- Install React Toastify** 

    npm install --save react-toastify
---

### Backend Package

**- Install Mongoose, express, cors**

    npm intall mongoose express cors
**- Install Nodemon**

    npm install nodemon
**- Install dotenv**

    npm install dotenv
**- Install cookie parser**

    npm install cookie-parser
**- Install bycrpt, jsonwebparser**

    npm install bcryptjs jsonwebtoken
---

# Backend Development 

### 6. Define Song Model, Artist Model, Album Model with controller and Routes

Define MongoDB schema for songs Include fields:
- Title
- Artist
- Album
- Genre
- cover-image (coverUrl)
- releaseDate
  
Define MongoDB schema for album Include fields:
- Title
- Artist
- cover-image (coverUrl)
- releaseDate
- Genre
  
Define MongoDB schema for artist Include fields:
- Name
- Artist-image (artistUrl)
- Genre

### 7. Define User Model, Controller, routes 

Define MongoDB schema for User Include fields:
- name
- email
- password
  
### 8. Develop REST API Endpoints

- Create endpoint to create a new song
- Create endpoint to list all songs
- Create endpoint to update a song
- Create endpoint to delete a song
- Create endpoint to create a new user
- *---Create endpoint to list all users*
- Create endpoint to update a user
- Create endpoint to delete a user

### 7. Authentication setup
- Create Authentication 
- Create a protect middleware
  

### 9. Implement Statistics Endpoints

- Create endpoint to calculate and return overall statistics
- Include statistics such as total songs, artists, albums, genres, songs per genre, etc.
  
### 10. Test API Endpoints

- Write unit tests for each endpoint using testing frameworks like Jest
- Test API functionality using Thunder Client
  
### 11. Dockerize Backend

- Create Dockerfile for backend
- Docker-compose for MongoDB and backend
  


---
---
---
---
---
---



# Frontend Development

### Set Up React App

- Initialize React project with Typescript
- Install required packages (Redux Toolkit, Redux-Saga, Emotion, Styled System)

### Create a Landing page
- creating an intractive Landing page for the website
  
### Create a About page
- creating an intractive About page for the website

### Create Song Listing Page

- Design UI for displaying list of songs
- Fetch songs from backend API and display them
- Implement functionality to add, update, and delete songs
- Update UI dynamically when songs are added, updated, or deleted without page reload

### Implement Statistics Section

- Design UI to display overall statistics
- Fetch statistics data from backend API and display them

### Add Filtering Functionality

- Implement filtering functionality, such as filter by genre
- Update song list based on applied filters

### Integration with Backend

- Integrate frontend with backend REST API endpoints
- Test integration and ensure proper data flow between frontend and backend

### Testing and Debugging

- Write unit tests for components and Redux logic
- Test UI functionality and behavior
- Debug and fix any issues

### Deploy Frontend

- Host frontend application on platforms like Netlify or Vercel

### Bonus Tasks

- Implement additional features like user 
    - authentication, 
    - search functionality, etc.
- Deploy backend using platforms like Heroku or Render

