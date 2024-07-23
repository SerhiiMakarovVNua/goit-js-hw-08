const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const createGalleryCard = pictureInfo => {
  
  const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery-item');
    
    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery-link');
    galleryLinkEl.href = pictureInfo.original;
    galleryItemEl.append(galleryLinkEl);

    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery-image');
    galleryImgEl.src = pictureInfo.preview;
    galleryImgEl.dataset.source = galleryLinkEl.href 
    galleryImgEl.alt = pictureInfo.description;
    galleryImgEl.width = 360;
    galleryImgEl.height = 200;
    galleryItemEl.append(galleryImgEl);

  return galleryItemEl;
};

const galleryCardsArr = images.map(imgInfo => createGalleryCard(imgInfo));
const galleryListEl = document.querySelector('.gallery');
galleryListEl.append(...galleryCardsArr);

const css = '.gallery { list-style-type: none;  margin: 0 auto; padding: 0; display: flex; justify-content: center; flex-direction: row; flex-wrap: wrap; row-gap: 24px; column-gap: 24px;}' +
            '.gallery-image {display: block; transition: transform 0.3s ease; }' +
            '.gallery-image:hover {transform: scale(1.045);};' +
            '.gallery-item {overflow: hidden;};'
const styleElement = document.createElement('style');
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);

const lists = document.querySelector("ul.gallery");
lists.addEventListener("click", function (event) {
  console.log(event.target);
});

galleryListEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const originalImageUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${originalImageUrl}" width="1112" height="640">
    `);
    instance.show();
  }
});