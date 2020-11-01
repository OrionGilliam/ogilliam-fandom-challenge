#APIs

**Register a Character**: '/characterRegistration'

**Method**: POST

**Data Constraints**

```json
Items can reference a stat by specific name, maxHP, tempHP, or defenses.

Example stat:
    {
      "name":"Ioun Stone of Fortitude",
      "modifier":{
        "affectedObject":"stats",
        "affectedValue": <"strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma">,
        "value": <number>
      }
Example HP:
    {
      "name":"Ioun Stone of Fortitude",
      "modifier":{
        "affectedObject": <"maxHP" | "tempHP">,
        "affectedValue":"",
        "value": <number>
      }
Example Defenses:
    {
      "name":"Ioun Stone of Fortitude",
      "modifier":{
        "affectedObject":"defenses",
        "affectedValue":<
                           "fire" |
                           "cold" |
                           "lightning" |
                           "slashing" |
                           "piercing" |
                           "bludgeoning" |
                           "radiant" |
                           "necrotic" |
                           "psychic" |
                           "thunder" |
                           "acid" |
                           "force"
                         >,
        "value": < "resistance" | "immunity" | "vulnerable">
      }

```

**Data Example**

As per example character JSON

```json
{
  "name": "Briv",
  "level": 5,
  "classes": [
    {
      "name": "fighter",
      "hitDiceValue": 10,
      "classLevel": 3
    },
    {
      "name": "wizard",
      "hitDiceValue": 6,
      "classLevel": 2
    }
  ],
  "stats": {
    "strength": 15,
    "dexterity": 12,
    "constitution": 14,
    "intelligence": 13,
    "wisdom": 10,
    "charisma": 8
  },
  "items": [
    {
      "name": "Ioun Stone of Fortitude",
      "modifier": {
        "affectedObject": "stats",
        "affectedValue": "constitution",
        "value": 2
      }
    }
  ],
  "defenses": [
    {
      "type": "fire",
      "defense": "immunity"
    },
    {
      "type": "slashing",
      "defense": "resistance"
    }
  ]
}
```

**Response**

```json
{
  "name": "Briv",
  "level": 5,
  "classes": [
    { "name": "fighter", "hitDiceValue": 10, "classLevel": 3 },
    { "name": "wizard", "hitDiceValue": 6, "classLevel": 2 }
  ],
  "stats": { "strength": 15, "dexterity": 12, "constitution": 16, "intelligence": 13, "wisdom": 10, "charisma": 8 },
  "items": [
    { "name": "Ioun Stone of Fortitude", "modifier": { "affectedObject": "stats", "affectedValue": "constitution", "value": 2 } },
    { "name": "Ioun Stone of TempHP", "modifier": { "affectedObject": "tempHP", "affectedValue": "", "value": 9 } },
    {
      "name": "Ioun Stone of Cold Vulnerability",
      "modifier": { "affectedObject": "defenses", "affectedValue": "cold", "value": "vulnerable" }
    }
  ],
  "defenses": [
    { "type": "fire", "defense": "immunity" },
    { "type": "slashing", "defense": "resistance" },
    { "type": "cold", "defense": "vulnerable" }
  ],
  "calculatedStats": { "strength": 15, "dexterity": 12, "constitution": 16, "intelligence": 13, "wisdom": 10, "charisma": 8 },
  "maxHP": 41,
  "remainingHP": 41,
  "tempHP": 9
}
```

**Register a Character**: '/actions'

**Method**: POST

**Data Constraints**

```json
{
  action: <"attack" | "healing" | "tempHP">,
  source: <
    | "fire"
    | "cold"
    | "lightning"
    | "slashing"
    | "piercing"
    | "bludgeoning"
    | "radiant"
    | "necrotic"
    | "psychic"
    | "thunder"
    | "acid"
    | "force">,
  value: <number>
}
```

**Example Data**

```json
{
  "action": "attack",
  "source": "cold",
  "value": 10
}
```

**Response**

```json
{
  "name": "Briv",
  "level": 5,
  "classes": [
    { "name": "fighter", "hitDiceValue": 10, "classLevel": 3 },
    { "name": "wizard", "hitDiceValue": 6, "classLevel": 2 }
  ],
  "stats": { "strength": 15, "dexterity": 12, "constitution": 16, "intelligence": 13, "wisdom": 10, "charisma": 8 },
  "items": [
    { "name": "Ioun Stone of Fortitude", "modifier": { "affectedObject": "stats", "affectedValue": "constitution", "value": 2 } },
    { "name": "Ioun Stone of TempHP", "modifier": { "affectedObject": "tempHP", "affectedValue": "", "value": 9 } },
    {
      "name": "Ioun Stone of Cold Vulnerability",
      "modifier": { "affectedObject": "defenses", "affectedValue": "cold", "value": "vulnerable" }
    }
  ],
  "defenses": [
    { "type": "fire", "defense": "immunity" },
    { "type": "slashing", "defense": "resistance" },
    { "type": "cold", "defense": "vulnerable" }
  ],
  "calculatedStats": { "strength": 15, "dexterity": 12, "constitution": 16, "intelligence": 13, "wisdom": 10, "charisma": 8 },
  "maxHP": 30,
  "remainingHP": 41,
  "tempHP": 0
}
```
