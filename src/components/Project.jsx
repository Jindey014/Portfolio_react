import React from 'react'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import { motion } from 'framer-motion'
import { MdDescription } from 'react-icons/md'
import { div } from 'framer-motion/client'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    image: image1,
    title: 'Chat App',
    description:
      'Chat application which allows realtime messaging with other users developed using MERN stack. User authentication and authorization handled by JWT and Real time communication handle by Socket.io',
    technologies: [
      'Javascript',
      'React.js',
      'Node.js',
      'Express',
      'Mongodb',
      'JWT',
      'Socket.io',
      'Daisy UI',
    ],
  },
  {
    image: image2,
    title: 'Product Store',
    description:
      'Product Store app developed using Mern Stack where you can perform CRUD operations. The Global State management was done via Zustand ',
    technologies: [
      'Javascript',
      'React.js',
      'Node.js',
      'Express',
      'Mongodb',
      'Zustand',
      'Chakra UI',
    ],
  },
  {
    image: image3,
    title: 'TodoList',
    description:
      'Todolist app developed using React where users can add and remove items. Here state management is done using Redux',
    technologies: ['Javascript', 'React.js', 'Redux'],
  },
  {
    image: image4,
    title: 'Ecommerce Store',
    description: 'Ecomerce Website using React and Redux',
    technologies: ['Javascript', 'React.js', 'Redux'],
  },
]

const Project = () => {
  return (
    <>
      <div
        id="projects"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
      >
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Project
