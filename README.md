**Setup the server**
```
cd server
docker-compose up

Alternatively can be ran locally
npm run build
npm start
```
**Setup the client**
```
cd client
docker-compose up

Alternatively can be ran locally with a simple
npm start
```

```
Once both are active, you may send HTTP requests to localhost:4000 for the server
Some interesting sample characters are in the server/character builds directory and can be copied directly into your 
API testing tool of choice (I use Talented API with Chrome, but Postman is also popular)

Or you may access the minimalist GUI with a pregenerated character at localhost:3000
```

**Expected Mechanics**
```
Damage taken will subtract first from Temporary Hitpoint, which if depleted with carry on to deplete from regular 
hitpoints, with no action as a shield against a large hit.

Healing will only hit regular Hitpoints and will not heal above maximum

Negative hitpoints are not a thing due to the baseline 5e D&D mechanics

Resistance and Vulnerability to a source at the same time will cause it to deal full damage.

Immunity will provide full immunity regardless of vulnerability from other sources

Absorption acts like immunity, but also heals by half of the damage taken.  This also cannot be negated nor reduced by
having vulnerability.

Resistance stacked on top of Immunity, so long as there is also no vulnerability, will cause absorption.

Multiple sources of the same type of defense are irrelevant to any calculation.

```

**Development Notes**
```
This program developed using Webstorm on Windows 10.

The sample character "Briv" from the challenge notes will not work as written, due to the lack of capital lettering in
the wizard class entry.  Changing the wizard's hitdicevalue to hitDiceValue will allow it to be entered. 
```
