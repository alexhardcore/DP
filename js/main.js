

//  Переключатель темы (день/ночь)

const btnDarkMode = document.querySelector(".dark-mode-btn");

// Определяем приорететы


//  Проверка темной темы на уровне системных настроек 

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

//  Проверка темной темы в local storage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}


//  если меняются системные настройки , меняем тему 

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }

});


//  on/off dark mode

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
}



//  Прелодер

var loader = document.getElementById("preloader");

window/addEventListener("load", function(){
    loader.style.display = "none";
})

//  Липкое меню

//var nav = document.getElementById("nav");

//window.onscroll = function(){
   // if(window.pageYOffset >= nav.offsetTop){
      // nav.classList.add("nav-sticky");
   // }
   // else{
     //  nav.classList.remove("nav-sticky");
   // }
//}


//  parallax and tilt

const projects = document.querySelectorAll('.project');

VanillaTilt.init(projects, {
    max: 10,
    glare: true,
    'max-glare': 0.3,
});

const approaches = document.querySelectorAll('.approach');

VanillaTilt.init(approaches, {
    max: 10,
    glare: true,
    'max-glare': 0.3,
});


//  Popup form 

let popupBg = document.querySelector('.popup__bg'); 
let popupForm = document.querySelector('.form'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        e.preventDefault(); 
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});

document.addEventListener('click', (e) => { 
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});