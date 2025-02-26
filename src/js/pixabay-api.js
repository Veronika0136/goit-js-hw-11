import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '49074776-667ebd81d42a28579e0443e2e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  },
});

export function getAllImages() {
  return instance.get().then(res => res.data.hits);
}
