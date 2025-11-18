const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryContainer = document.querySelector('.gallery');

const markup = images.map(item => `
  <li class="gallery-list">
  <img src="${item.url}" alt="${item.alt}"></img>
  </li>`
).join("");

galleryContainer.style.display = "flex"
galleryContainer.style.justifyContent = "center";
galleryContainer.style.flexWrap = "wrap"
galleryContainer.style.gap = "24px"
galleryContainer.style.listStyle = "none"
galleryContainer.style.padding = "0";
galleryContainer.style.margin = "0";


galleryContainer.insertAdjacentHTML("beforeend", markup);

document.querySelectorAll('.gallery img').forEach(img => {
  img.style.width = "300px";
  img.style.height = "auto";
  img.style.objectFit = "cover";
  img.style.border = "1px solid #000";
  img.style.padding = "3px";
})

// function createMarkup(arr) {
//   return arr.map(item => {
//     const li = document.createElement('li');
//     const img = document.createElement('img');
//     img.src = item.url;
//     img.alt = item.alt;
//     li.append(img)
//     return li
//   });
// }

// const markup = createMarkup(images);
// galleryContainer.append(...markup);


// galleryContainer.style.display = "flex";
// galleryContainer.style.justifyContent = 'center';
// galleryContainer.style.flexWrap = "wrap";
// galleryContainer.style.gap = "20px";
// galleryContainer.style.listStyle = "none";
// galleryContainer.style.padding = "0";
// galleryContainer.style.margin = "0";

// document.querySelectorAll('.gallery img').forEach(img => {
//   img.style.width = '300px';
//   img.style.height = 'auto';
//   img.style.display = 'block';
//   img.style.borderRadius = '8px';
//   img.style.objectFit = 'cover';
// });




