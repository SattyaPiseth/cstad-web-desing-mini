export const Card = (movie) => {
    return (`
<div class="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-gray-800 shadow-md rounded-xl w-96">
  <div class="relative h-4/6 mx-4 mt-4 overflow-hidden bg-blue-500 dark:bg-blue-700 shadow-lg rounded-xl shadow-blue-500/40 dark:shadow-blue-700/40">
    <img
      class="object-cover w-full h-full transition-transform duration-500 ease-in-out transform scale-110 hover:scale-100"
      src="${movie?.poster_path}"
      alt="${movie?.title}"
    />
  </div>
  <div class="p-6 space-y-4">
    <h5 class="text-xl font-semibold leading-snug tracking-normal text-gray-900 dark:text-gray-100">
      ${movie?.title}
    </h5>
    <p class="text-base font-light leading-relaxed text-gray-700 dark:text-gray-300">
      The istad movie is the best website to watch movies online for free. We have a huge collection of movies and TV series. You can watch movies online for free without registration.
    </p>
    <h5 class="flex items-center font-bold text-gray-700 dark:text-gray-300">
      <i class="far fa-calendar mr-2" aria-hidden="true"></i>
      ${movie.release_date}
    </h5>
  </div>
  <div class="flex flex-col justify-center px-5 pb-5">
    <button class=" px-6 py-3 text-xs font-bold text-center text-white uppercase transition-all duration-300 bg-gray-400 rounded-lg shadow-md hover:bg-green-500 dark:bg-gray-700 dark:text-gray-200 shadow-gray-900/10 dark:shadow-gray-700/10 hover:shadow-lg hover:shadow-gray-900/20 dark:hover:shadow-gray-700/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none transform hover:scale-105" type="button">
      Watch Now
    </button>
  </div>
</div>
  `);
};
