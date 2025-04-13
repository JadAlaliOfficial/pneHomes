import Logo from '@/assets/Group 1.svg';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { BsCalendar2Date } from 'react-icons/bs';
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaPencilAlt, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiZillow } from 'react-icons/si';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                {/* Header */}
                <header className="sticky top-0 z-10 mb-6 w-full bg-white px-4 py-3 shadow-md sm:px-6 lg:px-8 dark:bg-[#161615]">
                    <nav className="mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <img src={Logo} alt="Logo" className="h-10 w-auto" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button className="text-[#1b1b18] lg:hidden dark:text-[#EDEDEC]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-8">
                            {['Floor Plans', 'Gallery', 'Communities'].map((link) => (
                                <Link
                                    key={link}
                                    href={''}
                                    className="font-medium text-[#1b1b18] capitalize hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]"
                                >
                                    {link.replace('-', ' ')}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center font-medium text-[#1b1b18] capitalize hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]"
                                >
                                    Services
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`absolute top-full left-0 mt-2 w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-200 dark:bg-[#161615] dark:ring-[#3E3E3A] ${isServicesOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'}`}
                                >
                                    <div className="py-1">
                                        {['Custom Homes', 'Basement Design and Finish', 'Consultation'].map((service, index) => (
                                            <>
                                                <Link
                                                    key={service}
                                                    href={''}
                                                    className="block px-4 py-3 text-sm text-[#1b1b18] transition-colors duration-150 hover:bg-gray-100 dark:text-[#EDEDEC] dark:hover:bg-[#262625]"
                                                >
                                                    {service}
                                                </Link>
                                                {index < 2 && <div className="mx-4 border-t border-gray-200 dark:border-[#3E3E3A]" />}
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href={''}
                                className="rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                    <div className="lg:hidden">
                        <button className="text-[#1b1b18] dark:text-[#EDEDEC]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </button>

                        {isMobileMenuOpen && (
                            <div className="absolute right-0 left-0 z-20 mt-2 bg-white shadow-lg dark:bg-[#161615]">
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {['Floor Plans', 'Gallery', 'Communities'].map((link) => (
                                        <Link
                                            key={link}
                                            href=""
                                            className="block rounded-md px-3 py-2 text-base font-medium text-[#1b1b18] hover:bg-gray-100 dark:text-[#EDEDEC] dark:hover:bg-[#262625]"
                                        >
                                            {link.replace('-', ' ')}
                                        </Link>
                                    ))}

                                    {/* Mobile Services Dropdown */}
                                    <div>
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-[#1b1b18] hover:bg-gray-100 dark:text-[#EDEDEC] dark:hover:bg-[#262625]"
                                        >
                                            Services
                                            <svg
                                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {isServicesOpen && (
                                            <div className="mt-1 space-y-1 pl-4">
                                                {['Custom Homes', 'Basement Design and Finish', 'Consultation'].map((service) => (
                                                    <Link
                                                        key={service}
                                                        href=""
                                                        className="block rounded-md px-3 py-2 text-sm text-[#1b1b18] hover:bg-gray-100 dark:text-[#EDEDEC] dark:hover:bg-[#262625]"
                                                    >
                                                        {service}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <Link
                                        href=""
                                        className="mt-2 block rounded-md bg-gray-100 px-3 py-2 text-base font-medium text-[#1b1b18] dark:bg-[#262625] dark:text-[#EDEDEC]"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                <div className="flex w-full flex-1 items-center justify-center">
                    <main className="flex w-full flex-col items-center py-8 lg:py-6">
                        <div className="w-full  pb-2">
                            <div className="mb-6 flex justify-center">
                                <img src={Logo} alt="PNE Homes Logo" className="h-16 w-auto lg:h-24" />
                            </div>

                            <h1 className="mb-4 text-center text-3xl font-bold text-[#1b1b18] lg:text-4xl dark:text-[#EDEDEC]">
                                Your Vision | Our Expertise
                            </h1>

                            <h2 className="text-center text-xl text-[#1b1b18] lg:text-2xl dark:text-[#EDEDEC]">Come Build With Us</h2>
                        </div>

                        <div className="mt-8 w-full">
                            <h1 className="mb-8 text-center text-3xl font-bold text-[#1b1b18] lg:text-4xl dark:text-[#EDEDEC]">
                                Your Dream Home In 3 Simple Steps
                            </h1>

                            {/* Three Steps Section */}
                            <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-8 lg:px-12">
                                {/* Step 1 - Book Appointment */}
                                <div className="flex flex-col items-center text-center">
                                    <BsCalendar2Date className="mb-4 h-12 w-12 text-[#f53003] dark:text-[#FF4433]" />
                                    <h3 className="mb-2 text-xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">BOOK AN APPOINTMENT</h3>
                                    <p className="text-[#1b1b18] dark:text-[#EDEDEC]">
                                        Start your journey by booking an appointment to discuss your ideas—let's bring your dream home to life.
                                    </p>
                                </div>

                                {/* Step 2 - Design */}
                                <div className="flex flex-col items-center text-center">
                                    <FaPencilAlt className="mb-4 h-12 w-12 text-[#f53003] dark:text-[#FF4433]" />
                                    <h3 className="mb-2 text-xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">Design Your Home</h3>
                                    <p className="text-[#1b1b18] dark:text-[#EDEDEC]">
                                        Work closely with our experts to create a home plan that perfectly fits your style and needs.
                                    </p>
                                </div>

                                {/* Step 3 - Move In */}
                                <div className="flex flex-col items-center text-center">
                                    <FaHome className="mb-4 h-12 w-12 text-[#f53003] dark:text-[#FF4433]" />
                                    <h3 className="mb-2 text-xl font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">Get Ready to Move!</h3>
                                    <p className="text-[#1b1b18] dark:text-[#EDEDEC]">
                                        We handle the construction while you prepare for a smooth and exciting move-in day.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Us Button */}
                            <div className="mt-12 flex justify-center">
                                <Link
                                    href=""
                                    className="rounded-sm border border-[#f53003] bg-[#f53003] px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-[#f53003] dark:border-[#FF4433] dark:bg-[#FF4433] dark:text-white dark:hover:bg-transparent dark:hover:text-[#FF4433]"
                                >
                                    Contact Us Now
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>

                {/* Footer */}
                <footer className="w-full bg-white pt-6 pb-4 dark:bg-[#161615]">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4 pb-4 text-center text-base font-medium text-[#1b1b18] sm:gap-6 sm:text-lg dark:text-[#EDEDEC]">
                            {['About us', 'Our team', 'Events', 'Privacy policy'].map((item) => (
                                <Link key={item} href="" className="capitalize hover:text-[#f53003] dark:hover:text-[#FF4433]">
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="py-4 text-center">
                            <h3 className="mb-3 text-sm font-medium text-[#1b1b18] uppercase sm:text-base dark:text-[#EDEDEC]">Follow us</h3>
                            <div className="flex flex-wrap justify-center gap-4 text-sm sm:gap-5">
                                {[
                                    { icon: <FaFacebook className="h-5 w-5" />, label: 'Facebook' },
                                    { icon: <FaYoutube className="h-5 w-5" />, label: 'YouTube' },
                                    { icon: <FaXTwitter className="h-5 w-5" />, label: 'Twitter' },
                                    { icon: <FaLinkedinIn className="h-5 w-5" />, label: 'LinkedIn' },
                                    { icon: <FaInstagram className="h-5 w-5" />, label: 'Instagram' },
                                    { icon: <FaTiktok className="h-5 w-5" />, label: 'TikTok' },
                                    { icon: <FaPinterestP className="h-5 w-5" />, label: 'Pinterest' },
                                    { icon: <SiZillow className="h-5 w-5" />, label: 'Zillow' },
                                ].map((platform) => (
                                    <Link
                                        key={platform.label}
                                        href=""
                                        className="text-[#1b1b18] transition-all duration-200 hover:scale-110 hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]"
                                        aria-label={platform.label}
                                    >
                                        {platform.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="py-3 text-center">
                            <h3 className="mb-2 text-sm font-medium text-[#1b1b18] uppercase sm:text-base dark:text-[#EDEDEC]">Contact us :</h3>
                            <div className="flex flex-wrap justify-center gap-2 text-sm sm:gap-3">
                                <Link href="" className="text-[#1b1b18] underline hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]">
                                    Book appointment
                                </Link>
                                <span className="text-[#1b1b18] dark:text-[#EDEDEC]">•</span>
                                <Link href="" className="text-[#1b1b18] underline hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]">
                                    Send email
                                </Link>
                                <span className="text-[#1b1b18] dark:text-[#EDEDEC]">•</span>
                                <Link href="" className="text-[#1b1b18] underline hover:text-[#f53003] dark:text-[#EDEDEC] dark:hover:text-[#FF4433]">
                                    Call the number
                                </Link>
                            </div>
                        </div>

                        <div className="pt-4 text-center text-xs text-[#1b1b18] sm:text-sm dark:text-[#EDEDEC]">
                            Copyright {new Date().getFullYear()}, PNE Homes, Inc. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
