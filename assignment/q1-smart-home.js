/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here

class BaseSignal {
  #type;

  // Constructor
  constructor(type) {
    if (this.constructor === BaseSignal) {
      console.log(this.constructor === BaseSignal);
      throw new Error('This class cannot be instantiated');
    }
    this.#type = type;
  }

  // Getters
  get getType() {
    return this.#type;
  }

  // Setters
  set setType(value) {
    this.#type = value;
  }

  // Methods
  send() {
    console.log(`Sending ${this.getType} signal`);
  }
}

class TvSignal extends BaseSignal {
  constructor(tvBrand) {
    super('tv');
    this.tcBrand = tvBrand;
  }
  get getBrand() {
    return this.tcBrand;
  }
}

class AirconSignal extends BaseSignal {
  constructor(airConBrand) {
    super('aircon');
    this.airConBrand = airConBrand;
  }
  get getBrand() {
    return this.airConBrand;
  }
}

class DoorSignal extends BaseSignal {
  constructor(doorBrand) {
    super('door');
    this.doorBrand = doorBrand;
  }
}

const tv = new TvSignal('Sharp', 'tv');
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal('Hitachi', 'door');
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal('Mitsubishi', 'aircon');
aircon.send(); // prints "Sending aircon signal"
