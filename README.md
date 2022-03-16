# AlMatarLoyalty

### Database Used:
- Mongodb 

### Setup 
- Create .env file in app root directory 
- follow env.sample for env name:-
```
        PORT= 3000  ## Application Running Port
        DBURI=mongodb://ip:port/db-name ##Database URI
        JWT_SECRET_KEY = MY_SECRET_KEY  ##JWT Encryption secret
        USER_EMAIL= xyz@gmail.com ##gmail account to send email (gmail is used for ease)
        USER_PASSWORD=1234 ##gmail account password
````
- Run npm i


### API

### Users:  
1- POST /api/users/signup 
```
body: 
        username: string
        email: string
        passowrd: string 
```

2- POST /api/users/signIn 
```
body: 
        email: string
        passowrd: string 
```

3 - GET /api/users/points --> to get user points

4- GET /api/users/transactions --> to get user transactions



### Transfers:

1- POST /api/transfere
```
body: 
 recieverId: string,
 points: number

```

2- POST /api/transfere/:transferId/confirm