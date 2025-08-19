# Contact API Spec

## Create Contact

Endpoint : GET /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ariyan Andryan",
        "last_name" : "Aryja",
        "email" : "andryan@example.com",
        "phone" : "08xxxxxxxxxx"
    }
}
```

Response Body (Failed) :

```json
{
    "errors" : "Contact is not found"
}
```

## Get Contact

Endpoint : POST /api/contacts

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
    "first_name" : "Ariyan Andryan",
    "last_name" : "Aryja",
    "email" : "andryan@example.com",
    "phone" : "08xxxxxxxxxx"
}
```

Response Body (Success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ariyan Andryan",
        "last_name" : "Aryja",
        "email" : "andryan@example.com",
        "phone" : "08xxxxxxxxxx"
    }
}
```

Response Body (Failed) :

```json
{
    "errors" : "first_name must not blank, ..."
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
    "first_name" : "Ariyan Andryan",
    "last_name" : "Aryja",
    "email" : "andryan@example.com",
    "phone" : "08xxxxxxxxxx"
}
```

Response Body (Success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Ariyan Andryan",
        "last_name" : "Aryja",
        "email" : "andryan@example.com",
        "phone" : "08xxxxxxxxxx"
    }
}
```

Response Body (Failed) :

```json
{
    "errors" : "first_name must not blank, ..."
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "data" : "OK"
}
```

Response Body (Failed) :

```json
{
    "errors" : "Contact is not found"
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter :
- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :
- X-API-TOKEN : token

Response Body (Success) :

```json
{
    "data" : [
        {
            "id" : 1,
            "first_name" : "Ariyan Andryan",
            "last_name" : "Aryja",
            "email" : "andryan@example.com",
            "phone" : "08xxxxxxxxxx"
        },
        {
            "id" : 2,
            "first_name" : "Ariyan Andryan",
            "last_name" : "Aryja",
            "email" : "andryan@example.com",
            "phone" : "08xxxxxxxxxx"
        }
    ],
    "paging" : {
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10
    }
}
```

Response Body (Failed) :

```json
{
    "errors" : "Unauthorized"
}
```