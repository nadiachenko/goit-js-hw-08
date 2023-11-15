import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    list: document.querySelector('.gallery'),
  };
  
  const imageMarkup = createMarkup(galleryItems);
  
  
  
  function createMarkup(items) {
    return items.map(item => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
     </a>
    </li>`).join('');
  }
  
  refs.list.innerHTML = imageMarkup;

  refs.list.addEventListener('click', displaySlider)

function displaySlider(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': "alt",
   'captionPosition': 'bottom',
    'captionDelay': 250
    });

}