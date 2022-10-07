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
          "firstName": "Pritish",
          "lastName": "Panda",
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
          "firstName": "Pritish2",
          "lastName": "Panda2",
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
<p align="center">
    <u><h2 align="center">Job Seeker</h2></u>
</p>

-   **Add Job Seeker** : POST {/jobseeker/add}
    - Endpoint to add job seeker : http://localhost:4000/jobseeker/add
    - The user has to be loggedIn to use this endpoint
    - Sample body request
      ```
      {
        "firstName": "Alton",
        "lastName": "Liu",
        "phoneNumber": 9999999999,
        "age": 20,
        "bio": "Hello world",
        "workExp": [{"company": "National Bank", "jobTitle": "IT Analyst", "startDate": "Aug 2021 - May 2022", "description": "a" }, {"company": "National Bank2",    "jobTitle": "IT Analyst", "startDate": "Aug 2021", "endDate": "May 2022", "description": "a" }],
        "education": [{"school": "UTSC", "program": "Computer Science", "gradDate": "2024"}, {"school": "U of T", "program": "MBA", "gradDate": "2026"}],
        "currStatus": "SEEKING FOR JOB IN SUMMER 2023"
      }
      ```
    - Return 200 for success and 401 for aunthentication failure, with an error in the response body


-   **Update Job Seeker** : PUT {/jobseeker/update}
    - Endpoint to update Job Seeker profile : http://localhost:4000/jobseeker/update 
    - The user has to be loggedIn to use this endpoint
    - Sample body request can include any of the below fields
      ```
      {
        "firstName": "Alton",
        "lastName": "Liu",
        "phoneNumber": 9999999999,
        "age": 20,
        "bio": "Hello world",
        "workExp": [{"company": "National Bank", "jobTitle": "IT Analyst", "startDate": "Aug 2021 - May 2022", "description": "a" }, {"company": "National Bank2",    "jobTitle": "IT Analyst", "startDate": "Aug 2021", "endDate": "May 2022", "description": "a" }],
        "education": [{"school": "UTSC", "program": "Computer Science", "gradDate": "2024"}, {"school": "U of T", "program": "MBA", "gradDate": "2026"}],
        "currStatus": "SEEKING FOR JOB IN SUMMER 2023"
      }
      ```
    - Return 200 for success and 400 for user creation failure , with an error in the response body

-   **View Job Seeker profile** : GET {/jobseeker/profile}
    - View the profile of the current loggedIn user who is a job seeker
    - View Job Seeker : http://localhost:4000/jobseeker/profile
    - Sample Response:
      ```
      {
        "_id": "633fc52b7a2bc4e4c4d5316c",
        "firstName": "Alton",
        "lastName": "Liu",
        "uid": "633e2eb14988c2467ea47872",
        "phoneNumber": 9999999999,
        "age": 20,
        "bio": "Hello world",
        "workExperience": [
            {
                "company": "National Bank",
                "jobTitle": "IT Analyst",
                "startDate": "Aug 2021 - May 2022",
                "description": "a",
                "_id": "633fc52b7a2bc4e4c4d5316d"
            },
            {
                "company": "National Bank2",
                "jobTitle": "IT Analyst",
                "startDate": "Aug 2021",
                "endDate": "May 2022",
                "description": "a",
                "_id": "633fc52b7a2bc4e4c4d5316e"
            }
        ],
        "education": [
            {
                "school": "UTSC",
                "program": "Computer Science",
                "gradDate": "2024",
                "_id": "633fc52b7a2bc4e4c4d5316f"
            }
        ],
        "appliedPost": {},
        "currStatus": "SEEKING FOR JOB IN SUMMER 2023",
        "__v": 0
      }
      ```

-   **View All Job Seeker profiles** : GET {/jobseeker/viewall}
    - View profiles of all job seekers
    - The user has to be loggedIn to use this endpoint
    - View Job Seeker : http://localhost:4000/jobseeker/viewall
    - Sample Response:
      ```
      [
        {
          "_id": "633f9abb8bf53704fb42e91e",
          "firstName": "ds",
          "lastName": "sd",
          "uid": "633f9a8d8bf53704fb42e907",
          "phoneNumber": 1123,
          "age": 20,
          "bio": "asd",
          "workExperience": [
            {
                "company": "sds",
                "jobTitle": "d",
                "startDate": "dsd",
                "description": "sdss",
                "_id": "633f9abb8bf53704fb42e91f"
            }
          ],
          "education": [
            {
                "school": "UTSC",
                "program": "Computer Science",
                "gradDate": "2024",
                "_id": "633f9abb8bf53704fb42e920"
            }
          ],
          "appliedPost": {},
          "currStatus": "asd",
          "__v": 0
        },
        {
          "_id": "633fc52b7a2bc4e4c4d5316c",
          "firstName": "Alton",
          "lastName": "Liu",
          "uid": "633e2eb14988c2467ea47872",
          "phoneNumber": 9999999999,
          "age": 20,
          "bio": "Hello world",
          "workExperience": [
            {
                "company": "National Bank",
                "jobTitle": "IT Analyst",
                "startDate": "Aug 2021 - May 2022",
                "description": "a",
                "_id": "633fc52b7a2bc4e4c4d5316d"
            },
            {
                "company": "National Bank2",
                "jobTitle": "IT Analyst",
                "startDate": "Aug 2021",
                "endDate": "May 2022",
                "description": "a",
                "_id": "633fc52b7a2bc4e4c4d5316e"
            }
          ],
          "education": [
            {
                "school": "UTSC",
                "program": "Computer Science",
                "gradDate": "2024",
                "_id": "633fc52b7a2bc4e4c4d5316f"
            }
          ],
          "appliedPost": {},
          "currStatus": "SEEKING FOR JOB IN SUMMER 2023",
          "__v": 0
        }
      ]
      ```
      
-   **Add Resume** : POST {/jobseeker/addresume}
    - Endpoint to add resume to the current loggedIn job seeker: http://localhost:4000/jobseeker/addresume
    - The user has to be loggedIn to use this endpoint
    - Files must be sent as form-data
    - When taking in the file from the front end, the name of the input must be "resume" as shown below:
      <input type="file" name="resume" value="" required>
    - Sample body request
      
      ![image](https://user-images.githubusercontent.com/68790482/194496469-d09f4917-88e9-4145-969d-383e4734dfb9.png)

    - Return 200 for success and 401 for aunthentication failure, with an error in the response body

-   **Update Resume** : PUT {/jobseeker/updateresume}
    - Endpoint to update resume of the current loggedIn job seeker : http://localhost:4000/jobseeker/updateresume
    - The user has to be loggedIn to use this endpoint
    - Files must be sent as form-data
    - When taking in the file from the front end, the name of the input must be "resume" as shown below:
      <input type="file" name="resume" value="" required>
    - Sample body request
      
      ![image](https://user-images.githubusercontent.com/68790482/194496894-770ebe0b-bf1f-4148-bb5f-39b0ae12e608.png)


    - Return 200 for success and 401 for aunthentication failure, with an error in the response body

-   **Get Resume** : GET {/jobseeker/resume}
    - Get the resume of the current loggedIn job seeker in the form of binary data
    - Get Resume : http://localhost:4000/jobseeker/resume
    - Sample Response:
      ```
      {
        "_id": "633e2eb14988c2467ea47872",
        "name": "mock_resume.pdf",
        "data": {
          "type": "Buffer",
          "data": [
          {Binary Data}
          ]
        },
        "__v": 0
      }
      ```
      
<p align="center">
    <u><h2 align="center">Profile Picture</h2></u>
</p>

-   **Add Profile Picture** : POST {/{jobseeker OR recruiter}/addpfp}
    - Endpoint to add profile picture : http://localhost:4000/{jobseeker OR recruiter}/addpfp
    - The user has to be loggedIn to use this endpoint
    - Pictures must be sent as form-data
    - When taking in the picture from the front end, the name of the input must be "image" as shown below:
      <input type="file" name="image" value="" required>
    - Sample body request
      
      ![image](https://user-images.githubusercontent.com/68790482/194485394-93f37106-ff9d-4753-85dc-3f1123682b73.png)

      
    - Return 200 for success and 401 for aunthentication failure, with an error in the response body

-   **Update Profile Picture** : PUT {/{jobseeker OR recruiter}/updatepfp}
    - Endpoint to update profile picture : http://localhost:4000/{jobseeker OR recruiter}/updatepfp
    - The user has to be loggedIn to use this endpoint
    - Pictures must be sent as form-data
    - When taking in the picture from the front end, the name of the input must be "image" as shown below:
      <input type="file" name="image" value="" required>
    - Sample body request
      
      ![image](https://user-images.githubusercontent.com/68790482/194486518-98bd06dd-9ee0-4b28-a23e-ab9dd66184ba.png)


    - Return 200 for success and 401 for aunthentication failure, with an error in the response body

-   **View Profile Picture** : GET {/{jobseeker OR recruiter}/profilepicture}
    - View the profile picture of the current loggedIn user
    - View Profile Picture : http://localhost:4000/{jobseeker OR recruiter}/profilepicture
    - Front end developers must use base64 to display image (check step 10 of https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/)
    - Sample Response:
      ```
      {
        "_id": "633e2eb14988c2467ea47872",
        "data": {
          "type": "Buffer",
          "data": [
          {Binary Data}
          ]
        },
        "__v": 0
      }
      ```
