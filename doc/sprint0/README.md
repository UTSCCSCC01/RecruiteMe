# *RecruitMe*

*RecruitMe* is an application focused on accelerating the job search and talent acquisition process. We accomplish this by providing recruiters and job seekers the ability to complete the entire hiring process without the need for any third-party platforms to fill out forms or to conduct interviews.

## Installation
1. Install [Node](https://nodejs.org/en/download/current/)
2. Install the dependencies starting from the main project directory.
```
cd backend
npm install
cd ../frontend
npm install
```
3. Create a file named ```.env``` in the ```backend``` directory and copy the following.
```
PORT = 3000
MONGO_PASS = yikMlMV1gB8wcAZo
```
4. Start the frontend.
```
cd frontend
npm start
```
5. Start the backend.
```
cd backend
npm run devstart
```
## Contributing
We use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
- the ```master``` branch is for the latest stable production release.
- the ```dev``` branch contains the stable features for the next release.
- the ```feature``` branches are for developing new features. Should be in the form ```feature/<Jira ticket ID>: feature name```.
- the ```release``` branch is for bug fixes, documentation generation, and other release-oriented tasks.
- the ```hotfix``` branches are for patching production releases. Should be in the form ```hotfix/<Jira ticket ID>: feature name```.

We will use Jira for our ticketing. Pull requests are mandatory and need to be reviewed by at least 2 team members.
