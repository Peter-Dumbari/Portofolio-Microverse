const barcontainer = document.querySelector('.baricon');

function barstogglers() {
  barcontainer.classList.toggle('change');
}

function toggleNavMenu() {
  const menu = document.querySelector('.nav-items');
  barcontainer.addEventListener('click', barstogglers);
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'none';
  }
}

function addNavMenuToggleListener() {
  const toggleButton = document.querySelector('#nav-toggler');
  toggleButton.addEventListener('click', toggleNavMenu);
}

function removeNavMenuToggleListener() {
  const toggleButton = document.querySelector('#nav-toggler');
  toggleButton.removeEventListener('click', toggleNavMenu);
}

function checkScreenSize() {
  const toggleButton = document.querySelector('#nav-toggler');
  if (window.innerWidth <= 768) {
    toggleButton.addEventListener('click', addNavMenuToggleListener);
  } else {
    toggleButton.removeEventListener('click', removeNavMenuToggleListener);
    const navMenu = document.querySelector('.nav-items');
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  }
}

const navlinks = document.querySelectorAll('.nav-link');

function navlinkautoremover() {
  const menu = document.querySelector('.nav-items');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    barstogglers();
  }
}
navlinks.forEach((navlink) => {
  navlink.addEventListener('click', navlinkautoremover);
});
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

const modalData = [
  {
    main: true,
    name: 'Weather Application',
    languages: ['SASS', 'React js', 'Typescript'],
    description:
      ' The application give the accurate weather informations about the entire universe, it was build Lifesoft',
    img: '/Assets/images/middlesectionimage.png',
    livelink: 'https://lworldweather.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/weather-application',
  },
  {
    main: false,
    name: 'Lazk Calculator',
    languages: ['React', 'SASS', 'Bootstrap'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    livelink: 'https://lazkcalculator.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/Calculator',
  },
  {
    main: false,
    name: 'Weather App',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1649327259/img-9_pjsix9.jpg',
    livelink: 'https://lworldweather.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/weather-application',
  },
  {
    main: false,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1646324026/taras-shypka-iFSvn82XfGo-unsplash_yagqjs.jpg',
    livelink: '#',
  },
  {
    main: false,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1646303394/cld-sample.jpg',
    livelink: 'https://lworldweather.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/weather-application',
  },
  {
    main: false,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1647697660/Pic3_ii24tb.jpg',
    livelink: 'https://lworldweather.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/weather-application',
  },
  {
    main: false,
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1646324026/taras-shypka-iFSvn82XfGo-unsplash_yagqjs.jpg',
    livelink: 'https://lworldweather.netlify.app/',
    source: 'https://github.com/Peter-Dumbari/weather-application',
  },
];
(() => {
  modalData.forEach((project, index) => {
    let lang = '';
    if (project.main) {
      project.languages.forEach((element) => {
        lang += `  <li><button class="default-btn">${element}</button></li>`;
      });
      document.querySelector('#professional_art_printing-section').innerHTML = `
      <div class="middlesection-container">
                    <div class="middlesection_header">
                        <h2 class="middlesection_header_title">My Recent Works</h2>
                        <div class="line_container">
                            <hr>

                        </div>
                    </div>

                    <div class="midddlesection_image_container">
                        <img class="middlesection-image" src="${project.img}"
                            alt="${project.name}" />
                        <div class="middlesection_texts_container">
                            <h3 class="multiples-stories_header">${project.name}</h3>
                            <p class="multiples-stories_paragraph">A daily selection of privately personalized reads;
                                ${project.description}
                            </p>
                            <section class="button-flex">
                                <ul class="buttons">

                                  ${lang}
                                </ul>
                            </section>

                            <div class="multiple-btn-container">
                                <button class="smallprimarybtn" data-index="${index}" id="see_more_btn">See Project</button>
                            </div>
                        </div>
                    </div>

                </div>
      `;
    } else {
      project.languages.forEach((item) => {
        lang += `<li><button class="transparent-btn">${item}</button></li>`;
      });
      document.querySelector(
        '#professional_art_printing-section2',
      ).innerHTML += `
      <div class="professional_art_printing-section-items">
      <img class="portfolio_image" src="${project.img}"></img>
      <div class="art_print_container">
          <h2 class="art_print_header">${project.name}</h2>
          <p class="art_print_paragraph">
              ${project.description}}
          </p>
          <ul class="art_print_btn_container">
             ${lang}
          </ul>
      </div>
      <div class="art-main-btn-container">
          <button class="primarybtn" data-index="${index}" id="see_more_btn">See Project</button>
      </div>
  </div>
      `;
    }
  });
})();
const openPopup = (index) => {
  let lang = '';
  modalData[index].languages.forEach((element) => {
    lang += ` <li class="lang-list default-btn">${element}</li>`;
  });
  document.querySelector('.modal-container').style.display = 'block';
  document.querySelector('#popuptitle').textContent = modalData[index].name;
  document.querySelector('#modallanguages').innerHTML = lang;
  document.querySelector('#modal-description').textContent = modalData[index].description;
  document
    .querySelector('#modal-img')
    .setAttribute('src', modalData[index].img);
  document
    .querySelector('#livelink')
    .setAttribute('href', modalData[index].livelink);
  document
    .querySelector('#source')
    .setAttribute('href', modalData[index].source);
};

const modalDisplayBtn = document.querySelectorAll('#see_more_btn');

modalDisplayBtn.forEach((element) => {
  element.addEventListener('click', () => {
    openPopup(element.getAttribute('data-index'));
  });
});

document.querySelector('.modal-close-btn').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'none';
});

// CONTACT FORM VALIDATION AND LOCAL STORAGE STARTS HERE //

const form = document.querySelector('#form');

const emailInput = document.querySelector('#email');
const fullNameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');

function subMitform(event) {
  const email = emailInput.value.trim();
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const error = document.querySelector('span');
    error.textContent = 'Please enter your email in lower case.';
    error.style.color = '#f55800';
    error.style.fontFamily = 'Inter';
    error.style.width = '400px';
    form.appendChild(error);
    setTimeout(() => {
      error.remove();
    }, 1000);
  } else {
    const fullName = fullNameInput.value.trim();
    const message = messageInput.value.trim();
    const formData = {
      fullName,
      email,
      message,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  }
}
if (emailInput.value.toLowerCase) {
  emailInput.addEventListener('change', subMitform);
}
fullNameInput.addEventListener('change', subMitform);
messageInput.addEventListener('change', subMitform);

form.addEventListener('submit', subMitform);
const object = localStorage.getItem('formData');
const getValue = JSON.parse(object);

window.addEventListener('load', () => {
  if (localStorage.getItem('formData')) {
    document.querySelector('#name').value = getValue.fullName;
    document.querySelector('#email').value = getValue.email;
    document.querySelector('#message').value = getValue.message;
  }
});
