"use client"

import Image from "next/image"
import { Search } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ResultFinder() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create particles for background effect
    const createParticles = () => {
      const particlesContainer = document.querySelector(".particles")
      if (!particlesContainer) return

      particlesContainer.innerHTML = ""

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div")
        particle.classList.add("particle")

        // Random size between 5px and 20px
        const size = Math.random() * 15 + 5
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Random position
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        // Random color (purples and blues)
        const colors = ["#9b59b6", "#8e44ad", "#3498db", "#2980b9", "#ff69b4"]
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`

        particlesContainer.appendChild(particle)
      }
    }

    createParticles()

    // Recreate particles on window resize
    window.addEventListener("resize", createParticles)

    return () => {
      window.removeEventListener("resize", createParticles)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#1a1333] text-white flex flex-col relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles"></div>

      {/* Header with logo */}
      <motion.header
        className="border-b border-[#2a2045] p-4 flex justify-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="floating"
          >
            <Image src="/university-logo.png" alt="Himachal Pradesh Technical University Logo" width={80} height={80} />
          </motion.div>
          <div className="text-center">
            <motion.h1
              className="text-[#ff8c39] text-xl md:text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              हिमाचल प्रदेश तकनीकी विश्वविद्यालय
            </motion.h1>
            <motion.h2
              className="text-[#ff8c39] text-xl md:text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              HIMACHAL PRADESH TECHNICAL UNIVERSITY
            </motion.h2>
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              (A STATE GOVERNMENT UNIVERSITY)
            </motion.p>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#9b59b6] to-[#ff69b4] text-transparent bg-clip-text gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          HPTU Result Finder
        </motion.h1>

        <motion.p
          className="text-xl mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          A Better Way to Find Your Results
        </motion.p>

        {/* Form Card */}
        <motion.div
          className="w-full max-w-md bg-[#1f1940] rounded-lg p-6 shadow-lg card-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
          }}
        >
          {/* Branch Selection */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <label className="flex items-center gap-2 mb-2 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              Branch
            </label>
            <select className="w-full p-3 bg-[#13102a] rounded-md border border-[#2a2045] focus-effect transition-all hover:border-[#9b59b6]">
              <option>Select Branch</option>
              <option>Computer Science Engineering</option>
              <option>Information Technology</option>
              <option>Electronics & Communication</option>
              <option>Mechanical Engineering</option>
              <option>Civil Engineering</option>
            </select>
          </motion.div>

          {/* Semester Selection */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <label className="flex items-center gap-2 mb-2 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Semester
            </label>
            <select className="w-full p-3 bg-[#13102a] rounded-md border border-[#2a2045] focus-effect transition-all hover:border-[#9b59b6]">
              <option>Select Semester</option>
              <option>1st Semester</option>
              <option>2nd Semester</option>
              <option>3rd Semester</option>
              <option>4th Semester</option>
              <option>5th Semester</option>
              <option>6th Semester</option>
              <option>7th Semester</option>
              <option>8th Semester</option>
            </select>
          </motion.div>

          {/* Scheme Selection */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <label className="flex items-center gap-2 mb-2 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Scheme
            </label>
            <select className="w-full p-3 bg-[#13102a] rounded-md border border-[#2a2045] focus-effect transition-all hover:border-[#9b59b6]">
              <option>Select Scheme</option>
              <option>CBCS</option>
              <option>Non-CBCS</option>
              <option>Regular</option>
              <option>Re-appear</option>
            </select>
          </motion.div>

          {/* Find Result Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/results"
              className="w-full bg-[#9b59b6] hover:bg-[#8e44ad] text-white py-3 rounded-md flex items-center justify-center gap-2 transition-all button-hover"
            >
              <Search className="h-5 w-5" />
              Find Result
            </Link>
          </motion.div>

          {/* Note */}
          <motion.div
            className="mt-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <span className="font-semibold text-white">Note:</span> The site fetches data exclusively from{" "}
            <a href="#" className="text-[#9b59b6] hover:text-[#ff69b4] transition-colors">
              IndiaResults
            </a>
            . Therefore, the developer does not guarantee data accuracy.
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
