import menu from '../data/menu.json'
import createMarkupHbs from '../templates/menu-items.hbs'

const refs = {
    menuList: document.querySelector('.js-menu'),
    chekbox: document.querySelector('.theme-switch__toggle'),
    body: document.body,
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const createMarkup = createMarkupHbs(menu)
refs.menuList.insertAdjacentHTML('beforeend', createMarkup)

const currentTheme = localStorage.getItem('Theme')=== null ? Theme.LIGHT : localStorage.getItem('Theme')
refs.body.classList.add(currentTheme)

refs.chekbox.checked = localStorage.getItem('Theme') === Theme.DARK

refs.chekbox.addEventListener('change', changeTheme)

function changeTheme({ target : {checked} }){
    if (checked) {
        toggleTheme(Theme.DARK, Theme.LIGHT)
    } else {
        toggleTheme(Theme.LIGHT, Theme.DARK)
    }
}

function toggleTheme(add, rem) {   
    refs.body.classList.replace(rem, add)
    localStorage.setItem('Theme', add) 
}
