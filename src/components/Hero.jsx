import React from 'react'
import image from '../assets/Image.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex px-16 min-h-screen w-full items-center justify-center py-28 md:px-32"
      >
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={image}
              alt=""
              className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=" flex flex-col items-center justify-center text-center gap-3 max-w-[600px]"
          >
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
              Jinish Shrestha
            </h1>
            <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl  md:text-3xl">
              Web Developer
            </h3>
            <p>
              I am a Computer Engineering graduate with expertise in web
              development, dedicated to creating clean, scalable applications.
              My skills range from front-end design to smooth back-end
              integration, aimed at delivering dynamic user experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
