import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// Change code below this line

const listEl = document.querySelector('.gallery');
const imgEl = galleryItems
  .map(e => {
    return `<div>
  <a class="gallery__item" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      
      alt="${e.description}"
    />
  </a>
</div>`;
  })
  .join('');

listEl.innerHTML = imgEl;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
