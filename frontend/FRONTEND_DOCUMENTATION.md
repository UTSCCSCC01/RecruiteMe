### Frontend Documentation

## Components
Different parts of the frontend are organized into components. Components are located in the src/components folder.

Landing Component
- Contains different parts for the landing page

AuthenticationForms Component
- Contains the Login and Register forms

CreateJobSeekerForm Component
- Contains the form for creating a job seeker profile

Profile Component
- Contains the components for the profile page for the user

Job Postings Component
- Contains the components for the job postings page

Job Details Component
- Contains the components for the job details

Dashboard Component
- Contains the components for the dashboard pages for recruiters and job seekers


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

Dashboard
- Renders the dashboard page for recruiters and job seekers

JobDetailsPage
- Renders the job details page, where the user can see specific details about a job posting

## Controllers
The controllers behave as a bridge between the frontend and the backend. Controllers are located in the src/controllers folder.

Requests.js
- Provides functionallity for making the following requests types:
    - GET: Get
    - POST: Post, PostFile
    - PUT: Put, PutFile

UserController.js
- Provides functionallity for user related requests:
    - Login: POST request to /auth/login logs the user in
    - Register: POST request to /auth/register registers the user
    - getCurrent: GET request to /auth/currUser gets the current user
    - Logout: POST request to /auth/logout logs the user out

RecruiterController.js
- Provides functionallity for recruiter related requests:
    - getRecruiter: GET request to /recruiter/profile gets the profile of the logged-in recruiter
    - addRecruiter: POST request to /recruiter/add adds a new recruiter profile
    - updateRecruiter: PUT request to /recruiter/update updates the recruiter profile
    - getAllRecruiter: GET request to /recruiter/all gets all the recruiters
    - addPfp: POST request to /recruiter/addpfp adds a profile picture for the recruiter
    - updatePfp: PUT request to /recruiter/updatepfp updates the profile picture for the recruiter
    - getPfp: GET request to /recruiter/profilepicture gets the profile picture for the recruiter
    - addResume: POST request to /recruiter/addresume adds a resume for the recruiter
    - updateResume: PUT request to /recruiter/updateresume updates the resume for the recruiter
    - getResume: GET request to /recruiter/resume gets the resume for the recruiter
    - getPost: GET request to /recruiter/myposts gets the job posting for the recruiter
    - addJobPost: POST request to /recruiter/addjobpost adds a job posting for the recruiter

JobSeekerController.js
- Provides functionallity for job seeker related requests:
    - getJobSeeker: GET request to /jobseeker/profile gets the profile of the logged-in job seeker
    - addJobSeeker: POST request to /jobseeker/add adds a new job seeker profile
    - updateJobSeeker: PUT request to /jobseeker/update updates the job seeker profile
    - getAllJobSeeker: GET request to /jobseeker/all gets all the job seekers
    - addPfp: POST request to /jobseeker/addpfp adds a profile picture for the job seeker
    - updatePfp: PUT request to /jobseeker/updatepfp updates the profile picture for the job seeker
    - getPfp: GET request to /jobseeker/profilepicture gets the profile picture for the job seeker
    - getPfpid: GET request to /jobseeker/othersprofilepicture/ + body gets the profile picture of other users
    - addResume: POST request to /jobseeker/addresume adds a resume for the job seeker
    - updateResume: PUT request to /jobseeker/updateresume updates the resume for the job seeker
    - getResume: GET request to /jobseeker/resume gets the resume for the job seeker
    - getResumeId: GET request to /jobseeker/resume/ + body gets the resume of a user with a specific id
    - getJobPost: GET request to /jobseeker/openjobposts gets the job posting for the job seeker
    - getAllOpenJobPosts: GET request to /jobseeker/openjobposts gets all the open job postings
    - getApplications: GET request to /jobseeker/applications gets the job seekers applications
    - applyToJob: POST request to /jobseeker/apply applies to a job posting
    - getJobPostId: GET request to /post/view/ + body gets the job posting with a specific id
    - viewId: GET request to /post/view/ + body gets profile with a specific id

PostController.js
- Provides functionallity for job posting related requests:
    - getPost: GET request to /post/view/:id gets the job posting with the given id
