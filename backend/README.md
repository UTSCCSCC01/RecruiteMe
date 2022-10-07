-   To install all the dependencies run

```bash
npm i
```

-   Create a `.env` file and create a variable called PORT and MONGO_PASS , and store the following values like this

```
  PORT = 4000
  MONGO_PASS  = "yikMlMV1gB8wcAZo"
```

-   To run the application, start up your terminal /command prompt ,and go to the project folder and then run the following command

```bash
node index.js
```

or

```bash
nodemon index.js
```

<p align="center">
    <u><h2 align="center">User Authentication</h2></u>
</p>

-   **Login User** : POST {/auth/login}
    - Endpoint to login a user : http://localhost:4000/auth/login
    - Sample body request
      ```
      {
        "username": "test2mail.com",
        "password": "lol1"
      }
      ```
    - Return 200 for success and 401 for aunthentication failure , with a error in the resposne body


-   **Register User** : POST {/auth/register}
    - Endpoint to register a user : http://localhost:4000/auth/register 
    - Sample body request:
      ```
      {
        "email": "test2mail.com", 
        "password": "lol1",
        "recruiter": false,
      }
      ```
    - Return 200 for success and 400 for user creation failure , with a error in the resposne body
-   **Current User** : GET {/auth/currUser}
    - Returnt the data of the current loggedIn user: http://localhost:4000/auth/currUser
    - Sample Response 
      ```
      {
        "_id": "633db44ea20a4ba95d79120d",
        "email": "testmail.com",
        "recruiter": false,
      }
      ```  

-   **Logout User** : POST {/auth/logout}
    - Logs out the user : http://localhost:4000/auth/logout
    - No request body
    - Return 200 for success and 400 for user creation failure , with a error in the response body


<p align="center">
    <u><h2 align="center">Recruiter</h2></u>
</p>

-   **Add recruiter** : POST {/recruiter/add}
    - Endpoint to add recruiter : http://localhost:4000/recruiter/add
    - The user has to be loggedIn to use this endpoint
    - Sample body request
      ```
      {
            "name": "Pritish",
            "company": "UTSC",
            "age": 21,
            "bio": "Hello world",
            "workExp": {"USTC": 1},
            "currStatus": "SEEKING FOR JOB IN WINTER 2023"
      }
      ```
    - Return 200 for success and 401 for aunthentication failure , with a error in the resposne body


-   **Update recruiter** : PUT {/recruiter/update}
    - Endpoint to update recruiter profile : http://localhost:4000/recruiter/update 
    - The user has to be loggedIn to use this endpoint
    - Sample body request can include any of the below fields
      ```
      {
          "company": "UTSC",
          "bio": "Hello world",
          "workExp": {"USTC": 1},
          "currStatus": "SEEKING FOR JOB IN WINTER 2023"
      }
      ```
    - Return 200 for success and 400 for user creation failure , with a error in the resposne body

-   **View Recruiter profile** : GET {/recruiter/profile}
    - View the profile of the current loggedIn user who is a recruiter
    - View Recruiter : http://localhost:4000/recruiter/profile
    - Sample Response:
      ```
      [
        {
        "_id": "633b877883b4dabc802e382f",
        "name": "Pritish",
        "uid": "6338949197b101fd3b6c38a9",
        "company": "UTM",
        "email": "testmail.com",
        "age": 21,
        "bio": "Hello world",
        "workExperience": {
          "USTC": 1
        },
        "jobPosts": [],
        "currStatus": "SEEKING FOR JOB IN WINTER 2023",
        "__v": 0}
      ]
      ```

-   **View All Recruiter profiles** : GET {/recruiter/viewall}
    - View profiles of all recruiters
    - The user has to be loggedIn to use this endpoint
    - View Recruiter : http://localhost:4000/recruiter/viewall
    - Sample Response:
      ```
      [
        {
          "_id": "633b877883b4dabc802e382f",
          "name": "Pritish",
          "uid": "6338949197b101fd3b6c38a9",
          "company": "UTM",
          "email": "testmail.com",
          "age": 21,
          "bio": "Hello world",
          "workExperience": {
            "USTC": 1
          },
          "jobPosts": [],
          "currStatus": "SEEKING FOR JOB IN WINTER 2023",
          "__v": 0
        },
        {
          "_id": "633b877883b4dabc802e382e",
          "name": "Pritish2",
          "uid": "6338949197b101fd3b6c38a9",
          "company": "UTM2",
          "email": "test2mail.com",
          "age": 22,
          "bio": "Hello world",
          "workExperience": {
            "USM": 2
          },
          "jobPosts": [],
          "currStatus": "SEEKING FOR JOB IN Summer 2023",
          "__v": 0
        }
      ]
      ```
