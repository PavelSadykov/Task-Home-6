//Функция-конструктор Vehicle
  function Vehicle(name, speed, x, y) {
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
  }

  // Метод  изменения координат x и y
  Vehicle.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
    console.log(`${this.name} изменил координаты (${this.x}, ${this.y})`);
  };

  //функция-конструктор Car
  function Car(name, speed, x, y, horsePower) {
 // Вызываем Vehicle с передачей параметров
    Vehicle.call(this, name, speed, x, y);
    this.horsePower = horsePower;
  }

  // Устанавливаем прототип Car как объект Vehicle
  Car.prototype = Object.create(Vehicle.prototype);

  // Метод beep и вывод текста "Бииииип" 
  Car.prototype.beep = function () {
    console.log("Бииип");
  };

  // Создаем объект Car 
  const myCar = new Car("MyCar", 70, 0, 0, 210);
  myCar.move(30, 50);
  myCar.beep();

  console.log(myCar);