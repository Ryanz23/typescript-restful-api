# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "dryan",
    "password" : "rahasia",
    "name" : "Andryan"
}
```

Response Body :

```json
{
    "data" : {
        "username" : "dryan",
        "name" : "Andryan"
    }
}
```

Response Body (failed) :

```json
{
    "errors" : "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "dryan",
    "password" : "rahasia",
}
```

Response Body :

```json
{
    "data" : {
        "username" : "dryan",
        "name" : "Andryan",
        "token" : "uuid"
    }
}
```

Response Body (failed) :

```json
{
    "errors" : "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body :

```json
{
    "data" : {
        "username" : "dryan",
        "name" : "Andryan"
    }
}
```

Response Body (failed) :

```json
{
    "errors" : "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
    "password" : "rahasia", // tidak wajib
    "name" : "Andryan" // tidak wajib
}
```

Response Body :

```json
{
    "data" : {
        "username" : "dryan",
        "name" : "Andryan"
    }
}
```

Response Body (failed) :

```json
{
    "errors" : "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body :

```json
{
    "data" : "OK"
}
```

Response Body (failed) :

```json
{
    "errors" : "Unauthorized, ..."
}
```