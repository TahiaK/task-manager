# Task-Manager
 A task manager website that is centered around the CRUD methodology. The frontend includes a form analyst that communicates with the database by sending requests to the API. The fundamental features lets the user create new tasks, edit them, declare them as completed or not, and to delete them. This project showcases the API that was created using Node.js and Express.js to communicate with a cloud database (MongoDB Atlas).

## Preview
Add task            |  Edit/Delete task
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/105739044/187035719-7807f142-3da4-4cde-a083-5858b15c358e.png)  |  ![image](https://user-images.githubusercontent.com/105739044/187035736-3eb1511f-fe4e-49c5-b2f4-9ea5ebaccb1f.png)

## Get Started
1. Clone this reposity and run:
```sh
npm install
```
2. Add your connection string into your application code
- Ceate a .env file inside the src folder.
- Inside the file asign the connection string to MONGO_URI.
```sh
MONGO_URI = <connection string>
```
3. Run the connection:
```sh
npm start
```
4. Website to access:
```sh
http://localhost:3000/
```
