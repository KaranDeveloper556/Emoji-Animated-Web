import React, { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-slate-700 backdrop-blur-md">
            <div className="mx-auto px-8 py-7">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-300 hover:text-gray-400 transition-colors">
                        Emojify
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#about" className="text-gray-300 hover:text-gray-600 transition-colors">
                            About
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-gray-400 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-300 hover:text-gray-400 pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                            <div className="flex flex-col p-4 space-y-4">
                                <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors pointer-events-none">
                                    About
                                </a>
                                <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors pointer-events-none">
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav
