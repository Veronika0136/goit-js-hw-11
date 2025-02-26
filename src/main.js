import { getAllImages } from './js/pixabay-api';
import { imageTemplate, imagesTemplate } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', searchImages);

function searchImages(e) {
  e.preventDefault();
  const massege = e.target.elements.search.value;

  getAllImages(massege)
    .then(arr => {
      const markup = imagesTemplate(arr);
      refs.gallery.innerHTML = markup;
    })
    .catch(
      window.alert(`Sorry, there are no images matching your search query. Please try again!
  `)
    );

  e.target.reset();
}
