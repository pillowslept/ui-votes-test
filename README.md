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

```
{host}/api/user *GET*
```

```
{host}/api/user/:id *GET*
```

```
{host}/api/user *POST*
```

```
{host}/api/user/login *POST*
```

```
{host}/api/user/:id *PUT*
```

### vote

```
{host}/api/vote *GET*
```

```
{host}/api/vote/user/:useId *GET*
```

```
{host}/api/user *POST*
```

## Author

* **Juan Camilo Velásquez Vanegas** - [Juan Camilo Velásquez](https://github.com/pillowslept)
