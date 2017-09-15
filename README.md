# Garbarino-api

## Technologies
> - Node JS Version 8.4.0
> - ECMAScript 6, 7
> - Express
> - RethinkDB

## Instalation
```
npm install
```

## Set database default

1. open node in the proyect root
2. type in node console: 
```
var Db = require('./lib/models/db/connection');
var db = new Db({setup: true});
db.connect().then(c => {console.log(c)});
db.disconnect().then(c => {console.log(c)})
```

## Run
```
npm start
```

## Endpoint
> ### GET:
> - http://localhost:3000/api/products/list 
> ### POST: 
> - http://localhost:3000/api/products/save
> ### Body POST
>```JSON
>{
>	"name": "televisor 32 LED",
>	"price": 19999.99,
>	"list_price": 29999.99,
>	"brand": "SONY",
>	"category_id": 12345,
>	"virtual": false
>}
>```

## Set NODE_ENV for test
> ### Windows:
> ``` 
> SET NODE_ENV=test
> ```
> ### Linux:
> ``` 
> NODE_ENV=test
> ```

## Run test

```
npm test
```