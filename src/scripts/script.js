import {Navbar} from "../navbar.js";
import {Banner} from "../component/banner.js";
import {Content} from "../component/content.js";
import {movies} from "../data/api-movie.js";
import {Card} from "../component/card.js";
import {Counter} from "../component/counter.js";
import {Footer} from "../component/footer.js";

const render_navbar = document.querySelector("#navbar");
const render_banner = document.querySelector("#banner");
const render_content = document.querySelector("#content");
const render_counter = document.querySelector("#counter");
const render_card = document.querySelector("#card");
const render_footer = document.querySelector("#footer");

render_navbar.innerHTML = Navbar();
render_banner.innerHTML = Banner();
render_content.innerHTML = Content();
render_counter.innerHTML = Counter();
render_footer.innerHTML = Footer();
movies.map((movie) => {
    render_card.innerHTML += Card(movie);

   return render_card.innerHTML += Card(movie);
});

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});
