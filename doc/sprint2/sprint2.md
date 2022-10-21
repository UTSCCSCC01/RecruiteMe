# Sprint 1 Planning Meeting

On our first stand up meeting for sprint 2 on October 11, 2022, all members were present to choose the next 5 user stories to work on and reflect on sprint 1. We divided the stories into smaller tasks which were split into frontend and backend. Each member then chose the task they were most comfortable with.

Trello invite link: https://trello.com/invite/404notfound76/ATTIddc9b686868a01aa3f5031bd8560321094FAF36D

## Goal

The goal for the sprint was to add functionality such that job seekers can view and apply for job postings created by recruiters seamlessly, and allow recruiters to see information about the applicant in one convenient location

**User stories:** #3, #5, #7, #16, #20

## Task Breakdown

1.  **#3:** As a user of the app, I want to view all the open job postings.
    -   **Estimated Points**: 6
    -   Create a ‘Postings List’ page in frontend that displays all job postings
    -   Make backend provide a list of job postings
    -   Frontend: Raisa 
    -   Backend: Alton (“get all” endpoint)

2.  **#5:** As a recruiter Linda, create job postings so I can communicate potential job opportunities to the job-seekers
    -   **Estimated Points:** 8
    -   Create a ‘New job’ page in frontend with a form for job details
    -   Add new posting into database in backend
    -   Frontend: Rakshit
    -   Backend: Alton (“post request for adding new job posts” endpoint)

3.  **#7:** As a recruiter, I want to see and review all the job applications for a particular job post so I can see the applicants for this particular job(recruiter tracking page)
    -   **Estimated Points:** 6
    -   Create a ‘Applications’ page with a list of profiles of job seekers that applied
    -   Track a list of applicants and link to their profile page
    -   Update job seeker’s list of applications and applications on the recruiter’s post
    -   Frontend : Billy
    -   Backend : Pritish ( GET req/id  and  GET all), Alton (add functionality to get a profile pic based on user id passed in from front end)

4.  **#16:** As a job-seeker John, I want to apply for a job so recruiters can see my general information, work experiences, and skill sets.
    -   **Estimated Points:** 6
    -   Create a ‘Posting’ page with expanded details for current posting and button to apply
    -   Add job seeker to application list for the posting
    -   Frontend : Tony
    -   Backend : Pritish (“put updated job posting” endpoint)

5.  **#20:** As a job-seeker, I want to see an application tracker page when I log in to my account.
    -   Estimated Points: 6
    -   1 dashboard, different components
    -   Jobseeker: list of job postings applied to, 
    -   Backend : Get Request
    -   Add navbar to all pages
    -   Frontend : Raymond
    -   Backend : Pritish (“get all posts applied to” endpoint)

6.  **System Design Document:** Everyone
7.  **CRC Cards:** Everyone
8.  **Sprint1.md:** Everyone
9.  **RPM.md:** Everyone
10. **Documentation:** Everyone
11. **Standups:** Everyone

## Spikes

-   We might need to refactor some past code to add functionality to jobseekers/recruiters

## Team Capacity

| Member        | Capacity |
| ------------- | -------- |
| Rakshit Patel | 2        |
| Alton Liu     | 2        |
| Raisa Haque   | 2        |
| Pritish Panda | 2        |
| Raymond Weng  | 2        |
| Tony Xia      | 2        |
| Billy Zhou    | 2        |

**Participants:** Rakshit Patel, Alton Liu, Raisa Haque, Pritish Panda, Raymond Weng, Tony Xia, Billy Zhou
