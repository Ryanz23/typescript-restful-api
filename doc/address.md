# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
    "street" : "jl. xxx",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "Indonesia",
    "postal_ code" : "123xx"
}
```

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jl. xxx",
        "city" : "kota",
        "province" : "provinsi",
        "country" : "Indonesia",
        "postal_ code" : "123xx"
    }
}
```

Response Body (failed) :

```json
{
    "error" : "postal_code is required, ..."
}
```

## Get Address

Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jl. xxx",
        "city" : "kota",
        "province" : "provinsi",
        "country" : "Indonesia",
        "postal_ code" : "123xx"
    }
}
```

Response Body (failed) :

```json
{
    "error" : "Address is not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token

Request Body :

```json
{
    "street" : "jl. xxx",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "Indonesia",
    "postal_ code" : "123xx"
}
```

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "street" : "jl. xxx",
        "city" : "kota",
        "province" : "provinsi",
        "country" : "Indonesia",
        "postal_ code" : "123xx"
    }
}
```

Response Body (failed) :

```json
{
    "error" : "postal_code is required, ..."
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Header :
- X-API-TOKEN : token

Response Body (success) :

```json
{
    "data" : "OK"
}
```

Response Body (failed) :

```json
{
    "error" : "Address is not fount"
}
```

## List Address

Endpoint : GET /api/contacts/:idContact/addresses

Request Header :
- X-API-TOKEN : token

Response Body (success) :

```json
{
    "data" : [
        {
            "id" : 1,
            "street" : "jl. xxx",
            "city" : "kota",
            "province" : "provinsi",
            "country" : "Indonesia",
            "postal_ code" : "123xx"
        },
        {
            "id" : 2,
            "street" : "jl. xxx",
            "city" : "kota",
            "province" : "provinsi",
            "country" : "Indonesia",
            "postal_ code" : "123xx"
        }
    ]
}
```

Response Body (failed) :

```json
{
    "error" : "Contact is not found"
}
```