import {Navbar} from "../component/navbar.js";
import {Banner} from "../component/banner.js";
import {Content} from "../component/content.js";
import {movies} from "../data/api-movie.js";
import { Card } from "../component/card.js";
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
});
