class Car {
  constructor(direction, speed, location){
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  turn(newDirection) {
    this.direction = newDirection
  }
  accelerate(ammount) {
    this.speed += ammount
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
  }
}

class Window {
  constructor(width, height, car){

    this.width = width
    this.height =  height
    this.car = camry
  }
}

const $carHolder = document.createElement('div')
const $carImage = document.createElement('img')
$carImage.src = 'http://downloadclipart.org/do-upload/clipart/2017-07/Car_automobile_vehicle_clipart.png'
$carImage.width = '150'
$carImage.height = '100'
$carImage.setAttribute('style', 'position: absolute;')
$carHolder.appendChild($carImage)
document.body.appendChild($carHolder)

const camry = new Car('north', 0, '0, 0')
const gameWindow = new Window(500, 500)
