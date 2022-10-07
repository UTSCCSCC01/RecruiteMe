### Frontend Documentation

## Components
Different parts of the frontend are organized into components. Components are located in the src/components folder.

Landing Component
- Conatins different parts for the landing page

AuthenticationForms Component
- Conatins the Login and Register forms

CreateJobSeekerForm Component
- Contains the form for creating a job seeker profile

Profile Component
- Contains the components for the profile page for the user


## Pages
The frontend is organized based on pages. Pages are located in the src/pages folder.

LandingPage
- Renders the landing page for the website

CreateProfilePage
- Renders the page for creating a profile

LoginPage
- Renders the login page

SignupPage
- Renders the signup page

## Controllers
The controllers behave as a bridge between the frontend and the backend. Controllers are located in the src/controllers folder.

Requests.js
- Provides functionallity for making the following requests types:
    - GET
    - POST
    - PUT

UserController.js
- Provides functionallity for user related requests:
    - Login: POST request to /auth/login logs the user in
    - Register: POST request to /auth/register registers the user
    - getCurrent: GET request to /auth/currUser gets the current user
    - Logout: POST request to /auth/logout logs the user out

RecruiterController.js
- Provides functionallity for recruiter related requests:
    - getRecruiter: GET request to /recruiter/profile gets the profile of the loggedin recruiter
    - addRecruiter: POST request to /recruiter/add adds a new recruiter profile
    - updateRecruiter: PUT request to /recruiter/update updates the recruiter profile
    - getAllRecruiter: GET request to /recruiter/all gets all the recruiters

JobSeekerController.js
- Provides functionallity for job seeker related requests:
    - getJobSeeker: GET request to /jobseeker/profile gets the profile of the loggedin job seeker
    - addJobSeeker: POST request to /jobseeker/add adds a new job seeker profile
    - updateJobSeeker: PUT request to /jobseeker/update updates the job seeker profile
    - getAllJobSeeker: GET request to /jobseeker/all gets all the job seekers

