export const Counter = () => {
    return(`
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  <!-- Counter item -->
    <div class="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
        <div class="flex justify-center items-center p-4 bg-yellow-100 dark:bg-gray-900 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            <span class="text-6xl text-yellow-600 dark:text-yellow-300 px-4"><i class="fas fa-tv"></i></span>
            <div class="ml-4">
                <div class="flex items-center justify-center">
                    <h5 class="purecounter text-2xl font-bold mb-0 dark:text-white" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">10</h5>
                    <span class="text-2xl font-bold text-gray-900 dark:text-white">K</span>
                </div>
                <p class="text-gray-900 dark:text-gray-300 mt-2">Online Movies</p>
            </div>
        </div>
    </div>
    
        <!-- Counter item -->
        <div class="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div class="flex justify-center items-center p-4 bg-blue-100 dark:bg-gray-900 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-blue-600 dark:text-blue-300 px-4"><i class="fas fa-user-tie"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0 dark:text-white" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-delay="200" data-purecounter-duration="0">200</h5>
                        <span class="text-2xl font-bold text-gray-900 dark:text-white">+</span>
                    </div>
                    <p class="text-gray-900 dark:text-gray-300 mt-2">Expert Tutors</p>
                </div>
            </div>
        </div>
        
        <!-- Counter item -->
        <div class="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div class="flex justify-center items-center p-4 bg-purple-100 dark:bg-gray-900 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-purple-600 dark:text-purple-300 px-4"><i class="fas fa-user-graduate"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0 dark:text-white" data-purecounter-start="0" data-purecounter-end="60" data-purecounter-delay="200" data-purecounter-duration="0">60</h5>
                        <span class="text-2xl font-bold text-gray-900 dark:text-white">K+</span>
                    </div>
                    <p class="text-gray-900 dark:text-gray-300 mt-2">Online Students</p>
                </div>
            </div>
        </div>
        
        <!-- Counter item -->
        <div class="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div class="flex justify-center items-center p-4 bg-blue-100 dark:bg-gray-900 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-blue-600 dark:text-blue-300 px-4"><i class="bi bi-patch-check-fill"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0 dark:text-white" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300" data-purecounter-duration="0">6</h5>
                        <span class="text-2xl font-bold text-gray-900 dark:text-white">K+</span>
                    </div>
                    <p class="text-gray-900 dark:text-gray-300 mt-2">Certified Movies</p>
                </div>
            </div>
        </div>

        </div>
    `);
}
