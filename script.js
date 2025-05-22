const track = document.querySelector('.slider-track');
const leftBtn = document.querySelector('.slider-button.left');
const rightBtn = document.querySelector('.slider-button.right');

let currentIndex = 0;
const slideWidth = 300 + 16; // 300px + 1rem gap

rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > track.children.length - 1) currentIndex = 0;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = track.children.length - 1;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});


document.addEventListener('DOMContentLoaded', () => {
  fetch('data/angebote.json')
    .then(response => response.json())
    .then(daten => {
      const produktListe = document.getElementById('produktListe');
      
      daten.forEach(produkt => {
        const produktDiv = document.createElement('div');
        produktDiv.classList.add('produkt');
        
        produktDiv.innerHTML = `
          <img src="images/${produkt.bild}" alt="${produkt.titel}" />
          <div class="titel">${produkt.titel}</div>
          <div class="preis">${produkt.preis} <span class="rabatt">${produkt.rabatt}</span></div>
        `;
        
        produktListe.appendChild(produktDiv);
      });
    })
    .catch(err => console.error('Fehler beim Laden der Produkte:', err));
});
