import React from 'react'
import Carru1 from '../img/Carru1.jpeg'
import Carru2 from '../img/Carru2.png'
import Carru3 from '../img/carru3.png'

const Carrusel = () => {

    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    const slideWidth = carouselContainer.clientWidth;
    let slideIndex = 0;
    
    prevButton.addEventListener('click', () => {
      slideIndex = Math.max(slideIndex - 1, 0);
      carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });
    
    nextButton.addEventListener('click', () => {
      slideIndex = Math.min(slideIndex + 1, carouselContainer.children.length - 1);
      carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    });

  return (
    <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-slide">
    <img src={Carru1} alt="Imagen 1"> </img>
      </div>
      <div class="carousel-slide">
        <img src={Carru2} alt="Imagen 2"></img>
      </div>
      <div class="carousel-slide">
        <img src={Carru3} alt="Imagen 3"></img>
      </div>
    </div>
    <button class="carousel-prev">Anterior</button>
    <button class="carousel-next">Siguiente</button>
  </div>
  )
}

export default Carrusel