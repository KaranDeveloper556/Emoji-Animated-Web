import React from 'react'

const Hero = () => {
    return (
        <section className="Hero_section">
            <div className="h-screen w-screen bg-black">
                <div className="mx-auto max-w-[100rem] pt-16 sm:pt-24">
                    <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <span
                                        className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                        Early Access
                                    </span>
                                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                        <span className="sm:text-6xl">
                                        </span> Wireless Bluetooth Earbuds
                                        <span
                                            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">StellarGlo
                                        </span>
                                        <br />
                                        go beyond sound.
                                    </h1>
                                </div>

                                <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                    Immerse yourself in superior audio quality with the StellarGlo Wireless Bluetooth Earbuds.
                                    These sleek and lightweight earbuds deliver crystal-clear sound and rich bass.
                                </p>

                            </div>

                            <div className="border-t border-gray-700"></div>

                            <div className="flex space-x-4 items-center text-white">
                                <div className="flex items-center space-x-2">
                                    <div className="flex flex-shrink-0 -space-x-1">
                                        <img loading="lazy" width="400" height="400" decoding="async"
                                            className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                            style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/29.jpg" alt="User 1" />
                                        <img loading="lazy" width="400" height="400" decoding="async"
                                            className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                            style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/90.jpg" alt="User 2" />
                                        <img loading="lazy" width="100" height="100" decoding="async"
                                            className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                            style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/75.jpg" alt="User 3" />
                                        <img loading="lazy" width="200" height="200" decoding="async"
                                            className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                            style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/5.jpg" alt="User 4" />
                                    </div>

                                    <span className="flex-shrink-0 text-xs font-medium leading-5">+15</span>

                                </div>

                                <div className="h-4 border-l border-gray-700"></div>

                                <div className="flex items-center">

                                    <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                        <path
                                            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                        </path>
                                    </svg>

                                </div>
                                <div className="h-4 border-l border-gray-700"></div>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light" alt="Product Hunt Badge" className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16" width="250" height="54" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
