import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigation = [
        { name: 'About', href: '#about' },
        { name: 'Beliefs', href: '#beliefs' },
        {
            name: 'Ministries',
            href: '#ministries',
            subLinks: [
                { name: 'Children', href: '#children' },
                { name: 'Youth', href: '#youth' },
                { name: 'Women', href: '#women' },
                { name: 'Community Service', href: '#community' },
            ]
        },
        { name: 'Events', href: '#events' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="bg-slate-800 sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Church Logo and Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="h-8 w-8"
                            src="/sda-logo.png" // Replace with your church logo
                            alt="Church logo"
                        />
                        <span className="ml-2 text-white text-xl font-semibold">
                            Seventh-day Adventist Church
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navigation.map((item) => (
                                item.subLinks ? (
                                    <Menu as="div" key={item.name} className="relative">
                                        <Menu.Button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                                            {item.name}
                                        </Menu.Button>
                                        <Transition
                                            as={motion.div}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute left-0 mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg"
                                        >
                                            <Menu.Items className="py-1">
                                                {item.subLinks.map((subItem) => (
                                                    <Menu.Item key={subItem.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={subItem.href}
                                                                className={`${active ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                                                                    } block px-4 py-2 text-sm`}
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                )
                            ))}
                            <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                Visit Us
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                as={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
                    {navigation.map((item) => (
                        <div key={item.name}>
                            <a
                                href={item.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </a>
                            {item.subLinks && item.subLinks.map((subItem) => (
                                <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block pl-6 pr-3 py-2 rounded-md text-base font-medium"
                                >
                                    {subItem.name}
                                </a>
                            ))}
                        </div>
                    ))}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium mt-2">
                        Visit Us
                    </button>
                </div>
            </Transition>
        </nav>
    );
};

export default Navbar;