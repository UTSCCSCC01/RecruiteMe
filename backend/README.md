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
        "email": "test2mail.com",
        "password": "lol1"
      }
      ```
    - Return 200 for success and 401 for aunthentication failure , with a error in the resposne body


-   **Register User** : POST {/auth/register}
    - Endpoint to register a user : http://localhost:4000/auth/register 
    - Sample body request:
      ```
      {
        "name": "Pritish",
        "email": "test2mail.com", 
        "password": "lol1",
        "recruiter": false,
      }
      ```
    - Return 200 for success and 400 for user creation failure , with a error in the resposne body

-   **Logout User** : POST {/auth/logout}
    - Logs out the user : http://localhost:4000/auth/logout
    - No request body
    - Return 200 for success and 400 for user creation failure , with a error in the response body


<p align="center">
    <u><h2 align="center">Recruiter</h2></u>
</p>

-   **Add recruiter** : POST {/recruiter/add}
    - Endpoint to add recruiter : http://localhost:4000/recruiter/add
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

-   **View Recruiter** : GET {/recruiter/logot}
    - View Recruiter : http://localhost:4000/recruiter/:id
    - TODO


