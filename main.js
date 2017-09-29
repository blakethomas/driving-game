class Car {
  constructor(direction, speed, location){
    this.direction = direction
    this.speed = speed
    this.location = location

    const $carHolder = document.createElement('div')
    const $carImage = document.createElement('img')
    $carImage.src = 'http://downloadclipart.org/do-upload/clipart/2017-07/Car_automobile_vehicle_clipart.png'
    $carImage.width = '150'
    $carImage.height = '100'
    $carImage.setAttribute('style', 'position: absolute;')
    $carHolder.appendChild($carImage)
    document.body.appendChild($carHolder)
  }
}

const camry = new Car('north', 0, '0, 0')


const $roadLine = document.createElement('div')
$roadLine.classList.add('roadline')




document.body.appendChild($roadLine)
