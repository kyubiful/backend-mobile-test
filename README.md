## NodeJS RESTFUL api TEST

A test api for NodeJS

#### Installation

- Clone the repo usin ```git clone```.
- Run ``` npm install ``` on the cloned directory.
- Edit .env.example file to suit your needs

#### API Endpoints 

##### Users
```sh
GET http://localhost:3000/api/users
GET http://localhost:3000/api/users/:id
POST http://localhost:3000/api/users
PUT http://localhost:3000/api/users
DELETE http://localhost:3000/api/users
```

##### Invoices 
```sh
GET http://localhost:3000/api/invoices
GET http://localhost:3000/api/invoices/:id
POST http://localhost:3000/api/invoices
PUT http://localhost:3000/api/invoices
DELETE http://localhost:3000/api/invoices
```

##### Equipments
```sh
GET http://localhost:3000/api/equipments
GET http://localhost:3000/api/equipments/:id
POST http://localhost:3000/api/equipments
PUT http://localhost:3000/api/equipments
DELETE http://localhost:3000/api/equipments
```

##### Authorizations
```sh
POST http://localhost:3000/api/login
```