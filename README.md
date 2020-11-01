**Setup the server**
```
cd server
docker-compose up
```
**Setup the client**
```
cd client
docker-compose up
```

```
Once both are active, you may send HTTP requests to localhost:4000 for the server
Some interesting sample characters are in the server/character builds directory and can be copied directly into your API 
testing tool of choice (I use Talented API with Chrome, but Postman is also popular)

Or you may access the minimalist GUI with a pregenerated character at localhost:3000
```

**Development Notes**
```
This program developed using Webstorm on Windows 10.

The sample character "Briv" from the challenge notes will not work as written, due to the lack of capital lettering in
the wizard class entry.  Changing the wizard's hitdicevalue to hitDiceValue will allow it to be entered. 
```
