**Sprint 3 Planning Meeting:**

On our first stand up meeting for sprint 3 on October 24, 2022, all members were present to choose the next 5 user stories to work on and reflect on sprint 2. We divided the stories into smaller tasks which were split into frontend and backend. Each member then chose the task they were most comfortable with.

Goal:
Add functionality relating to companies and enrich functionality surrounding job posts

Trello invite link: https://trello.com/invite/404notfound76/ATTIddc9b686868a01aa3f5031bd8560321094FAF36D

User stories:

#4, #6, #9, #12, #17

Frontend: Rakshit, Billy, Raisa, Tony, Raymond

Backend: Alton, Pritish

Task Breakdown:

**1.  #4: As a recruiter Linda, I want to create and update company page with company information and job openings so job-seekers can search for jobs and find out more about the specific company**

-   Acceptance Criteria: recruiters will have a fully functional button that allows them to input information into a form which will create or update a company page in the server

-   Backend: 

    -  create company schema, make "create", "update", and "get" endpoints (Pritish)

    -  make "create", "update", and "get" company pfp endpoints (Alton)

-   Frontend: create a form for recruiter to input company info and a 'Company' page that displays the info

    -  Form (Billy)

    -  Page (Raisa)

-   Story Points: 14

**2.  #6: As a job-seeker, I want to filter my feed or search for job postings so I can see which specific jobs align with my interest**

-   Acceptance Criteria: Job seeker can select what they want to filter by from a drop down menu and enter the filter in a textbox

-   Backend: Nothing

-   Frontend: Create a drop down menu to select what to filter by. Create a text box on job posting page where user can input filters for company, roles, and qualifications:(Rakshit)

-   Story Points: 5

**3.  #9: As a recruiter Linda, select job-seekers/applicant who is going to move forward so I can select the candidates that have potential**

-   Acceptance Criteria: recruiters will have a menu that will allow them to choose among 4 statuses per applicant, which will update the applicant's status for that job post in the server

-   Backend: Nothing

-   Frontend: Button to move applicant to next stage, and button to reject applicant(Raymond)

-   Story Points: 3

**4.  #12: As a job-seeker, I want to View and provide company review and avg salary so other members can know more about the company and what to expect**

-   Acceptance Criteria: Job seekers can click on the "Add Review" button and leave a rating, comment and salary.

-   Backend: create and view a review object with the following fields: review comment, rating, salary : Pritish

-   Frontend: Form on the company page to enter review. Add a review section to view the reviews. (Tony)

-   Story Points: 7

**5.  #17: As a job-seeker, I want to see my application status for all my applications(i.e application tracker) so it is easier to see which companies have shown interest in me.**

-   Acceptance Criteria: job seekers will be able to see their status for the job post in the application tracker section, and this status will be pulled from the database

-   Backend: None

-   Frontend: (Raymond)

    -  Create view all job applications page.

    -  ["Under Review", "Interview Scheduled", "Rejected", "Accepted"]

-   Story Points: 3

1.  System Design Document: Rakshit

2.  CRC Cards: Everyone

3.  Documentation: Alton

4.  Sprint3.md: Everyone

5.  SR2.md: Everyone

6.  Standups: Everyone

Spikes
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



Participants: Rakshit Patel, Alton Liu, Raisa Haque, Pritish Panda, Raymond Weng, Tony Xia, Billy Zhou
