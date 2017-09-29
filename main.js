class Car {
  constructor(direction, speed, location)
  this.direction = direction
  this.speed = speed
  this.location = location
}

const $carHolder = document.createElement('div')

const $roadLine = document.createElement('div')
$roadLine.classList.add('roadline')

const $carImage = document.createElement('img')
$carImage.setAttribute('src', 'http://downloadclipart.org/do-upload/clipart/2017-07/Car_automobile_vehicle_clipart.png')
Object.assign($carImage.style, {
  width: '150px',
  height: '100px'
})

$carHolder.appendChild($carImage)
document.body.appendChild($roadLine)
document.body.appendChild($carHolder)
