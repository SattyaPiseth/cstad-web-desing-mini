export const Counter = () => {
    return(`
<div class="container mx-auto">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <!-- Counter item -->
        <div class="col-sm-6 col-xl-3">
            <div class="flex justify-center items-center p-4 bg-yellow-400 bg-opacity-50 rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-yellow-500"><i class="fas fa-tv"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0" data-purecounter-start="0" data-purecounter-end="10" data-purecounter-delay="200" data-purecounter-duration="0">10</h5>
                        <span class="text-2xl font-bold text-gray-700">K</span>
                    </div>
                    <p class="mb-0 text-gray-700">Online Movies</p>
                </div>
            </div>
        </div>
        <!-- Counter item -->
        <div class="col-sm-6 col-xl-3">
            <div class="flex justify-center items-center p-4 bg-blue-500 bg-opacity-10 rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-blue-500"><i class="fas fa-user-tie"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0" data-purecounter-start="0" data-purecounter-end="200" data-purecounter-delay="200" data-purecounter-duration="0">200</h5>
                        <span class="text-2xl font-bold text-gray-700">+</span>
                    </div>
                    <p class="mb-0 text-gray-700">Expert Tutors</p>
                </div>
            </div>
        </div>
        <!-- Counter item -->
        <div class="col-sm-6 col-xl-3">
            <div class="flex justify-center items-center p-4 bg-purple-500 bg-opacity-10 rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-purple-500"><i class="fas fa-user-graduate"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0" data-purecounter-start="0" data-purecounter-end="60" data-purecounter-delay="200" data-purecounter-duration="0">60</h5>
                        <span class="text-2xl font-bold text-gray-700">K+</span>
                    </div>
                    <p class="mb-0 text-gray-700">Online Students</p>
                </div>
            </div>
        </div>
        <!-- Counter item -->
        <div class="col-sm-6 col-xl-3">
            <div class="flex justify-center items-center p-4 bg-blue-500 bg-opacity-10 rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
                <span class="text-6xl text-blue-500"><i class="bi bi-patch-check-fill"></i></span>
                <div class="ml-4">
                    <div class="flex items-center">
                        <h5 class="purecounter text-2xl font-bold mb-0" data-purecounter-start="0" data-purecounter-end="6" data-purecounter-delay="300" data-purecounter-duration="0">6</h5>
                        <span class="text-2xl font-bold text-gray-700">K+</span>
                    </div>
                    <p class="mb-0 text-gray-700">Certified Movies</p>
                </div>
            </div>
        </div>
    </div>
</div>

    `);
}