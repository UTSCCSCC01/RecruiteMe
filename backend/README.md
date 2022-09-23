- To install all the dependencies run 
```bash
npm i
```
- Create a ```.env``` file and  create a variable called PORT and MONGO_PASS , and store the following values like this
```
  PORT = 3000
  MONGO_PASS  = "ask me i will tell u"
```

- To run the application, start up your terminal /command prompt ,and go to the project folder and then run the following command
```bash
nodemon index.js
```

- **Get sample Recruiter** : GET {/find-recuiter/$id}
   - In the request url replace $id with thec recruiter id u want to view
   - Sample Request: http://localhost:3000/find-recuiter/632e3f93538a67e9e21cd068
   - Sample Ouput/schema: {"_id":"632e3f93538a67e9e21cd068","name":"Pritish","email":"pritish@mail.com","age":21,"company":"UTSC","__v":0}
    



