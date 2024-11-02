import React, { useState } from 'react'

import { BiMenu, BiX } from 'react-icons/bi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 text-white backdrop-blur-md md:justify-evenly py-6">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-70 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Jinish Shrestha
      </a>
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* SOCIAL LINKS */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub />
        </li>
      </ul>

      {isOpen ? (
        <BiX
          onClick={menuOpen}
          className="block md:hidden text-4xl cursor-pointer"
        />
      ) : (
        <BiMenu
          onClick={menuOpen}
          className="block md:hidden text-4xl cursor-pointer"
        />
      )}
      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] h-screen w-1/2 items-start justify-start border-l border-gray-700 p-12 flex flex-col gap-10 bg-black/90 md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
