# ui-votes-test

## This branch contains

* Web application developed using VueJS.
* Backend application developed using NestJS.

# Considerations

## /api
* Create a file at root directory called .env
* Create a MySQL database
* Configure at the .env file the next database properties: name, port, username and password.
* For the example: PORT = 3000, PREFIX = 'api' and DATABASE_PROVIDER = 'mysql'

## /app
* For the communication with the API the base URL is = 'http://localhost:3000/api'

## CRUD

### user

* Requires Authorization as a header (String for test purposes)

```
/api/user *GET*
```

```
/api/user/:id *GET*
```

```
/api/user *POST*
```

```
/api/user/login *POST*
```

```
/api/user/:id *PUT*
```

### vote

```
/api/vote *GET*
```

```
/api/vote/user/:useId *GET*
```

```
/api/vote *POST*
```

## Author

* **Juan Camilo Velásquez Vanegas** - [Juan Camilo Velásquez](https://github.com/pillowslept)
