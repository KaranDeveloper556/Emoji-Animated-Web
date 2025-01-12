import React, { useState } from 'react'
import logo from "../../assets/web-images/logo.png"
import CustomButton from '../common/CustomButton'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
            <div className="mx-auto max-w-[130rem] px-8 py-4 flex items-center justify-between text-white">

                {/* Logo */}
                <img src={logo} alt="logo" className=' h-[4rem]' />

                {/* Mobile Menu Button */}
                <CustomButton
                    onClick={() => setIsOpen(!isOpen)}
                    text="Menu"
                    LeadIcons={() => (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </>
                            ) : (
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </>
                            )}
                        </svg>
                    )}
                />

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg">
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
        </nav>
    )
}

export default Nav
