export const Card = (movie) => {
    return(`
<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-4/6 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      class="card-image max-w-none object-cover w-full h-auto transition-transform duration-300 ease-in-out transform scale-110 hover:scale-100"
      src="${movie?.poster_path}"
      alt="${movie?.title}"
    />

  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      ${movie?.title}
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The istad movie is the best website to watch movies online for free. We have a huge collection of movies and tv series. You can watch movies online for free without Registration.
    </p>
    <h5 class="text-gray-700 mb-2 flex items-center font-bold">
    <i class="far fa-calendar mr-2" aria-hidden="true"></i>
                                ${movie.release_date}
    </h5>
  </div>
  <div class="flex flex-col px-5 -mt-5">
  <button class="align-middle select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:bg-green-600 transition-colors duration-300" type="button">
      Watch Now
  </button>

 </div>
</div>  
    `)
}