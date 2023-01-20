## TurkishId

Republic of Turkey identity number validator.

### Usage

#### Validate ID Number

```js
const turkishid = require('turkishid');
turkishid.ValidateId(11111111111); // returns false
```

#### Validate Name

```js
const turkishid = require('turkishid');
turkishid.ValidateName('Onur Ravli'); // returns true
turkishid.ValidateName('On2ur Ravli@'); // returns false
```

### License

MIT License. For more details, look [license.md](./license.md) file.
