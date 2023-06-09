// const PETS = [
//   {
//     id: 0,
//     name: 'Jennifer',
//     img: '../images/pets-1/jennifer.png',
//     img_2x: '../images/pets-2/jennifer.png',
//     type: 'Dog',
//     breed: 'Labrador',
//     description:
//       "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//     age: '2 months',
//     inoculations: ['none'],
//     diseases: ['none'],
//     parasites: ['none'],
//   },
//   {
//     id: 1,
//     name: 'Sophia',
//     img: '../images/pets-1/sophia.png',
//     img_2x: '../images/pets-2/sophia.png',
//     type: 'Dog',
//     breed: 'Shih tzu',
//     description:
//       "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//     age: '1 month',
//     inoculations: ['parvovirus'],
//     diseases: ['none'],
//     parasites: ['none'],
//   },
//   {
//     id: 2,
//     name: 'Woody',
//     img: '../images/pets-1/woody.png',
//     img_2x: '../images/pets-2/woody.png',
//     type: 'Dog',
//     breed: 'Golden Retriever',
//     description:
//       'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
//     age: '3 years 6 months',
//     inoculations: ['adenovirus', 'distemper'],
//     diseases: ['right back leg mobility reduced'],
//     parasites: ['none'],
//   },
//   {
//     id: 3,
//     name: 'Scarlett',
//     img: '../images/pets-1/scarlett.png',
//     img_2x: '../images/pets-2/scarlett.png',
//     type: 'Dog',
//     breed: 'Jack Russell Terrier',
//     description:
//       'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
//     age: '3 months',
//     inoculations: ['parainfluenza'],
//     diseases: ['none'],
//     parasites: ['none'],
//   },
//   {
//     id: 4,
//     name: 'Katrine',
//     img: '../images/pets-1/katrine.png',
//     img_2x: '../images/pets-2/katrine.png',
//     type: 'Cat',
//     breed: 'British Shorthair',
//     description:
//       'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
//     age: '6 months',
//     inoculations: ['panleukopenia'],
//     diseases: ['none'],
//     parasites: ['none'],
//   },
//   {
//     id: 5,
//     name: 'Timmy',
//     img: '../images/pets-1/timmy.png',
//     img_2x: '../images/pets-2/timmy.png',
//     type: 'Cat',
//     breed: 'British Shorthair',
//     description:
//       'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
//     age: '2 years 3 months',
//     inoculations: ['calicivirus', 'viral rhinotracheitis'],
//     diseases: ['kidney stones'],
//     parasites: ['none'],
//   },
//   {
//     id: 6,
//     name: 'Freddie',
//     img: '../images/pets-1/freddie.png',
//     img_2x: '../images/pets-2/freddie.png',
//     type: 'Cat',
//     breed: 'British Shorthair',
//     description:
//       'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
//     age: '2 months',
//     inoculations: ['rabies'],
//     diseases: ['none'],
//     parasites: ['none'],
//   },
//   {
//     id: 7,
//     name: 'Charly',
//     img: '../images/pets-1/charly.png',
//     img_2x: '../images/pets-2/charly.png',
//     type: 'Dog',
//     breed: 'Jack Russell Terrier',
//     description:
//       'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
//     age: '8 years',
//     inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
//     diseases: ['deafness', 'blindness'],
//     parasites: ['lice', 'fleas'],
//   },
// ];
import data from './data.mjs';
const PETS = [...data];
const firstPage = document.querySelector('.first-page'),
  previousPage = document.querySelector('.previous-page'),
  currentPageNumber = document.querySelector('.page-number'),
  nextPage = document.querySelector('.next-page'),
  lastPage = document.querySelector('.last-page'),
  sliderPages = document.querySelector('.pets-cards .slider__list'),
  popUpElem = document.querySelector('.pop-up'),
  popUpContainer = document.querySelector('.pop-up__container'),
  popUpClose = document.querySelector('#pop-up__close'),
  sliderButtons = document.querySelector('.slider__buttons'),
  hamburger = document.querySelector('.hamburger'),
  navList = document.querySelector('.nav__list'),
  logo = document.querySelector('.logo'),
  overlay = document.querySelector('.overlay');

/* -------------- ОСНОВНЫЕ ПЕРЕМЕННЫЕ И МЕДИА УСЛОВИЯ ------------------- */
let arrOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
let arrOf48Numbers = [];

for (let i = 0; i < 6; i++) {
  arrOf48Numbers.push(...arrOfNumbers);
}

let numberOfcardsPerPage;
let firstCardNumber = 0;

if (document.documentElement.clientWidth >= 1280) {
  numberOfcardsPerPage = 8;
} else if (
  document.documentElement.clientWidth > 1280 &&
  document.documentElement.clientWidth >= 768
) {
  numberOfcardsPerPage = 6;
} else {
  numberOfcardsPerPage = 3;
}

let subarray = []; //массив в который будет выведен результат.
let suffeledArr = [];
for (
  let i = 0;
  i < Math.ceil(arrOf48Numbers.length / numberOfcardsPerPage);
  i++
) {
  subarray[i] = arrOf48Numbers.slice(
    i * numberOfcardsPerPage,
    i * numberOfcardsPerPage + numberOfcardsPerPage
  );
  shuffle(subarray[i]);
  suffeledArr.push(...subarray[i]);
}

/* -------------- ОСНОВНЫЕ ФУНКЦИИ ------------------- */

function createCardTemplate() {
  const card = document.createElement('div');
  card.classList.add('slider__item');
  return card;
}

function shuffle(array) {
  // функция для перемешивания чисел в массиве
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/* -------------- ДИНАМИЧЕСКАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ ------------------- */
function generateCards() {
  const width = window.innerWidth;

  if (width < 576) {
    numberOfcardsPerPage = 3;
  } else if (width < 1280 && width >= 576) {
    numberOfcardsPerPage = 6;
  } else {
    numberOfcardsPerPage = 8;
  }

  for (let i = 0; i < numberOfcardsPerPage; i++) {
    const card = createCardTemplate();
    let petCardNumber = suffeledArr[i + firstCardNumber];
    card.setAttribute('data-petnumber', petCardNumber);
    card.innerHTML = `<div class="slider__img">
                            <img src='${PETS[petCardNumber].img}' alt="${PETS[petCardNumber].name}">
                        </div>
                        <div class="slider__nickname">${PETS[petCardNumber].name}</div>
                        <div class="slider__info-btn">
                            <button class="btn btn_border" type="button">Learn more</button>
                        </div>`;
    sliderPages.appendChild(card);
  }
}

window.addEventListener('load', () => {
  sliderPages.innerHTML = '';
  generateCards();
  currentPageNumber.innerHTML = '1';
  previousPage.setAttribute('disabled', 'disabled');
  firstPage.setAttribute('disabled', 'disabled');
});

/* -------------- ЗАГРУЖАТЬ НОВЫЕ КАРТОЧКИ ------------------- */

nextPage.addEventListener('click', () => {
  let pageNum = +currentPageNumber.innerHTML + 1;
  currentPageNumber.innerHTML = pageNum;
  sliderPages.innerHTML = '';
  // console.log(firstCardNumber);
  firstCardNumber += numberOfcardsPerPage;
  // console.log(firstCardNumber);

  generateCards();
});

previousPage.addEventListener('click', () => {
  let pageNum = +currentPageNumber.innerHTML - 1;
  currentPageNumber.innerHTML = pageNum;
  sliderPages.innerHTML = '';
  firstCardNumber -= numberOfcardsPerPage;

  generateCards();
});

lastPage.addEventListener('click', () => {
  let pageNum = Math.ceil(arrOf48Numbers.length / numberOfcardsPerPage);
  currentPageNumber.innerHTML = pageNum;
  sliderPages.innerHTML = '';
  firstCardNumber = arrOf48Numbers.length - numberOfcardsPerPage;
  generateCards();
});

firstPage.addEventListener('click', () => {
  let pageNum = 1;
  currentPageNumber.innerHTML = pageNum;
  sliderPages.innerHTML = '';
  firstCardNumber = 0;
  generateCards();
});

sliderButtons.addEventListener('click', () => {
  if (currentPageNumber.innerHTML > 1) {
    previousPage.removeAttribute('disabled', 'disabled');
    firstPage.removeAttribute('disabled', 'disabled');
  } else {
    previousPage.setAttribute('disabled', 'disabled');
    firstPage.setAttribute('disabled', 'disabled');
  }

  if (
    currentPageNumber.innerHTML ==
    Math.ceil(arrOf48Numbers.length / numberOfcardsPerPage)
  ) {
    nextPage.setAttribute('disabled', 'disabled');
    lastPage.setAttribute('disabled', 'disabled');
  } else {
    nextPage.removeAttribute('disabled', 'disabled');
    lastPage.removeAttribute('disabled', 'disabled');
  }
});

/* -------------- POP-UP ------------------- */

function openPopUp(e) {
  // console.log(e.target.id);
  if (e.target.id == 'slider__list_center') {
    return true;
  }

  popUpElem.style.display = 'block';
  document.querySelector('body').classList.toggle('not-scroll');

  const popUpCard = document.createElement('div');
  popUpCard.classList.add('pop-up__body');

  let petCardNumber = e.target.closest('.slider__item').dataset.petnumber;

  popUpCard.innerHTML = `
                    <div class="pop-up__img">
                        <img src="${PETS[petCardNumber].img_2x}" alt="${PETS[petCardNumber].name}">
                    </div>
                    <div class="pop-up__text">
                        <h3 class="title_h3">${PETS[petCardNumber].name}</h3>
                        <h4 class="title_h4">${PETS[petCardNumber].type} - ${PETS[petCardNumber].breed}</h4>
                        <p>${PETS[petCardNumber].description}</p>
                        <ul>
                            <li><strong>Age:</strong> ${PETS[petCardNumber].age}</li>
                            <li><strong>Inoculations:</strong> ${PETS[petCardNumber].inoculations}</li>
                            <li><strong>Diseases:</strong> ${PETS[petCardNumber].diseases}</li>
                            <li><strong>Parasites:</strong> ${PETS[petCardNumber].parasites}</li>
                        </ul>
                    </div>`;

  popUpContainer.prepend(popUpCard);
  let popUpBody = document.querySelector('.pop-up__body');

  popUpBody.addEventListener('mouseout', () => {
    popUpClose.style.backgroundColor = '#F1CDB3';
  });

  popUpBody.addEventListener('mouseover', () => {
    popUpClose.style.backgroundColor = 'transparent';
  });
}

function closePopUp() {
  let popUpBody = document.querySelector('.pop-up__body');
  popUpBody.remove();
  popUpElem.style.display = 'none';
  document.querySelector('body').classList.toggle('not-scroll');
}

sliderPages.addEventListener('click', openPopUp);

popUpClose.addEventListener('click', closePopUp);
popUpElem.addEventListener('click', function (e) {
  if (e.target != this) {
    return true;
  } //отменяем событие на дочернем элементе
  closePopUp(); // закрывает поп-ап при клине вне модального окна
});

/* -------------- МЕНЮ ГАМБУРГЕР ------------------- */
// function toggleMenu() {
//   hamburger.classList.toggle('open');
//   navList.classList.toggle('open');
//   logo.classList.toggle('open-nav-position');
//   overlay.classList.toggle('open');
//   document.querySelector('body').classList.toggle('not-scroll');
// }

// hamburger.addEventListener('click', toggleMenu);
// navList.addEventListener('click', toggleMenu);
// overlay.addEventListener('click', toggleMenu);
