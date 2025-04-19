"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Calendar, GraduationCap, LayoutList, Send, RotateCcw, X, User, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ResultsPage() {
  const [showForm, setShowForm] = useState(false)
  const [selectedResult, setSelectedResult] = useState<number | null>(null)
  const [rollNumber, setRollNumber] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    // Scroll to form when it appears
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [showForm])

  const handleGetResults = (index: number) => {
    setShowForm(true)
    setSelectedResult(index)
  }

  const handleClose = () => {
    setShowForm(false)
    setSelectedResult(null)
  }

  const handleSubmit = () => {
    if (!rollNumber || !name) {
      alert("Please enter both Roll Number and Name")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to the detailed result page
      window.location.href = "/result-details"
    }, 1500)
  }

  const handleReset = () => {
    setRollNumber("")
    setName("")
  }

  if (!mounted) return null

  const results = [
    {
      date: "26/03/2025",
      title: "B.Tech. 7th Semester Regular (CBCS) December, 2024 (CSE)",
    },
    {
      date: "26/03/2025",
      title: "B.Tech. 7th Semester Re-appear (CBCS) December, 2024 (CSE)",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1333] text-white flex flex-col relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles"></div>

      {/* Header with logo */}
      <motion.header
        className="border-b border-[#2a2045] p-4 flex justify-between items-center relative z-10"
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
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="bg-[#2a2045] hover:bg-[#3a3055] text-white py-2 px-4 rounded-md flex items-center gap-2 transition-all button-hover"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
        </motion.div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center p-4 relative z-10">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold my-8 text-center bg-gradient-to-r from-[#9b59b6] to-[#ff69b4] text-transparent bg-clip-text gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          HPTU Results
        </motion.h1>

        {/* Results Table */}
        <motion.div
          className="w-full max-w-4xl bg-[#1f1940] rounded-lg overflow-hidden shadow-lg card-hover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            type: "spring",
            stiffness: 100,
          }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_3fr_1fr] bg-[#2a2045] p-4 text-white font-semibold">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Calendar className="h-5 w-5" />
              DATE
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <GraduationCap className="h-5 w-5" />
              RESULT OF
            </motion.div>
            <motion.div
              className="flex items-center gap-2 justify-end"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <LayoutList className="h-5 w-5" />
              ACTION
            </motion.div>
          </div>

          {/* Table Body */}
          {results.map((result, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-[1fr_3fr_1fr] p-4 ${index % 2 === 0 ? "bg-[#1a1333]" : "bg-[#1f1940]"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
            >
              <div className="text-gray-300">{result.date}</div>
              <div className="text-white">{result.title}</div>
              <div className="flex justify-end gap-2">
                <motion.button
                  onClick={() => handleGetResults(index)}
                  className="bg-[#9b59b6] hover:bg-[#8e44ad] text-white py-1 px-3 rounded text-sm flex items-center gap-1 transition-all button-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CreditCard className="h-4 w-4" />
                  Get Results
                </motion.button>
                <motion.button
                  className="bg-[#3498db] hover:bg-[#2980b9] text-white py-1 px-3 rounded text-sm flex items-center gap-1 transition-all button-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                    />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                  India Results
                </motion.button>
                <motion.button
                  className="bg-[#e74c3c] hover:bg-[#c0392b] text-white py-1 px-3 rounded text-sm flex items-center gap-1 transition-all button-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Compiler <span className="text-xs">(BETA)</span>
                </motion.button>
              </div>

              {/* Form for Roll Number and Name */}
              <AnimatePresence>
                {showForm && selectedResult === index && (
                  <motion.div
                    ref={formRef}
                    className="col-span-3 mt-4 bg-[#13102a] p-4 rounded-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex items-center bg-[#2a2045] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#9b59b6] p-3">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Roll Number"
                          className="w-full p-3 bg-white text-black focus:outline-none focus-effect"
                          value={rollNumber}
                          onChange={(e) => setRollNumber(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="flex items-center bg-[#2a2045] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#9b59b6] p-3">
                          <User className="h-5 w-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Name"
                          className="w-full p-3 bg-white text-black focus:outline-none focus-effect"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex justify-center gap-4 mt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <motion.button
                        onClick={handleSubmit}
                        className="bg-[#9b59b6] hover:bg-[#8e44ad] text-white py-2 px-6 rounded flex items-center gap-2 transition-all button-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Submit
                          </>
                        )}
                      </motion.button>
                      <motion.button
                        onClick={handleReset}
                        className="bg-[#2a2045] hover:bg-[#3a3055] text-white py-2 px-6 rounded flex items-center gap-2 transition-all button-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <RotateCcw className="h-5 w-5" />
                        Reset
                      </motion.button>
                      <motion.button
                        onClick={handleClose}
                        className="bg-[#2a2045] hover:bg-[#3a3055] text-white py-2 px-6 rounded flex items-center gap-2 transition-all button-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <X className="h-5 w-5" />
                        Close
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
