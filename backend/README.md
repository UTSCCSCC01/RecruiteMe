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

-   **Get sample Recruiter** : GET {/recruiters/:id}
    -   In the request url replace $id with thec recruiter id u want to view
    -   Sample Request: http://localhost:3000/recruiters/632e3f93538a67e9e21cd068
    -   Sample Ouput/schema: {"\_id":"632e3f93538a67e9e21cd068","name":"Pritish","email":"pritish@mail.com","age":21,"company":"UTSC","\_\_v":0}
