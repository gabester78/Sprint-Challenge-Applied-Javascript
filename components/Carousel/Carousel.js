/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function imgCarousel(){
  const container = document.createElement('div')
  container.classList.add('carousel')

  const leftButton = document.createElement('div')
  leftButton.classList.add('left-button')
  leftButton.textContent = '<'

  const image1 = document.createElement('img')
  image1.src = './assets/carousel/mountains.jpeg'

  const image2 = document.createElement('img')
  image2.src = './assets/carousel/mountains.jpeg'

  const image3 = document.createElement('img')
  image3.src = './assets/carousel/mountains.jpeg'

  const image4 = document.createElement('img')
  image4.src = './assets/carousel/mountains.jpeg'

  const image5 = document.createElement('img')
  image5.src = './assets/carousel/mountains.jpeg'

  const rightButton = document.createElement('div')
  rightButton.classList.add('right-button')
  rightButton.textContent = '>'

  container.append(leftButton, image1, image2, image3, image4, image5, rightButton)

  return container

}

document.querySelector('.carousel-container').appendChild(imgCarousel())