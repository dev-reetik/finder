"use client"

import Image from "next/image"
import Link from "next/link"
import { Printer } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function ResultDetailsPage() {
  const [mounted, setMounted] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)

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

  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 500)
  }

  if (!mounted) return null

  const studentData = {
    examName: "B.Tech. 7th Semester Regular (CBCS) December, 2024 (CSE)",
    personalDetails: {
      rollNo: "21101003014",
      studentName: "RITIK SHARMA",
      fatherName: "KULDEEP KUMAR SHARMA",
    },
    resultSummary: {
      sgpa: "7.74",
      cgpa: "7.97",
      result: "PASS",
    },
    marksDetails: [
      { id: 1, subject: "Advance Computer Architecture CS7014B", code: "CS701", credit: 4, grade: "B" },
      { id: 2, subject: "Wireless and Mobile Computing CS7023A", code: "CS702", credit: 3, grade: "A" },
      { id: 3, subject: "Information Security CS7034B", code: "CS703", credit: 4, grade: "B" },
      { id: 4, subject: "Cloud Computing CS-7046A", code: "CS-704", credit: 4, grade: "A" },
      { id: 5, subject: "Big Data Analytics IT-7013B", code: "IT-701", credit: 3, grade: "B" },
      { id: 6, subject: "Embedded Systems CS-7053_", code: "CS-705", credit: 3, grade: "-" },
      { id: 7, subject: "Web Technology CS7063_", code: "CS706", credit: 3, grade: "-" },
      { id: 8, subject: "Cloud Computing Lab CS-7111E", code: "CS-711", credit: 1, grade: "E" },
      { id: 9, subject: "Project - I CS-7122E", code: "CS-712", credit: 2, grade: "E" },
      { id: 10, subject: "Industrial/ Practical Training(Viva Voce) CS-713E", code: "CS-713", credit: 2, grade: "E" },
    ],
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

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
        <div className="flex gap-2">
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/results"
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
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              Back
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center p-4 relative z-10">
        <motion.div
          className="w-full max-w-4xl bg-[#1f1940] rounded-lg overflow-hidden shadow-lg p-6 card-hover"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Exam Name */}
          <motion.div className="mb-6" variants={itemVariants}>
            <h2 className="text-xl font-semibold mb-2">
              Exam Name: <span className="text-[#9b59b6]">{studentData.examName}</span>
            </h2>
          </motion.div>

          {/* Student Result */}
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Student Result</h2>
              <motion.button
                onClick={handlePrint}
                className="bg-[#9b59b6] hover:bg-[#8e44ad] text-white py-2 px-4 rounded flex items-center gap-2 transition-all button-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isPrinting}
              >
                {isPrinting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Printing...
                  </>
                ) : (
                  <>
                    <Printer className="h-5 w-5" />
                    Print Result
                  </>
                )}
              </motion.button>
            </div>
            <p className="text-sm text-gray-400">Semester Examination Results</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Personal Details */}
            <motion.div
              className="bg-[#13102a] rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-gray-400">Roll No</div>
                <div className="animate-fade-in">{studentData.personalDetails.rollNo}</div>
                <div className="text-gray-400">Student Name</div>
                <div className="animate-fade-in">{studentData.personalDetails.studentName}</div>
                <div className="text-gray-400">Father's Name</div>
                <div className="animate-fade-in">{studentData.personalDetails.fatherName}</div>
              </div>
            </motion.div>

            {/* Result Summary */}
            <motion.div
              className="bg-[#13102a] rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-4">Result Summary</h3>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-gray-400">SGPA</div>
                <div className="animate-fade-in">{studentData.resultSummary.sgpa}</div>
                <div className="text-gray-400">CGPA</div>
                <div className="animate-fade-in">{studentData.resultSummary.cgpa}</div>
                <div className="text-gray-400">Result</div>
                <div className="text-green-500 font-semibold animate-pulse-slow">
                  {studentData.resultSummary.result}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Marks Details */}
          <motion.div
            className="bg-[#13102a] rounded-lg p-4 mb-6 shadow-md hover:shadow-lg transition-all"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Marks Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2a2045] text-white">
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">SUBJECT</th>
                    <th className="p-2 text-left">CODE</th>
                    <th className="p-2 text-center">CREDIT</th>
                    <th className="p-2 text-center">GRADE</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.marksDetails.map((subject, index) => (
                    <motion.tr
                      key={subject.id}
                      className={index % 2 === 0 ? "bg-[#1a1333]" : "bg-[#1f1940]"}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <td className="p-2">{subject.id}</td>
                      <td className="p-2">{subject.subject}</td>
                      <td className="p-2">{subject.code}</td>
                      <td className="p-2 text-center">{subject.credit}</td>
                      <td className="p-2 text-center">
                        <motion.span
                          className={`font-semibold ${
                            subject.grade === "A"
                              ? "text-blue-400"
                              : subject.grade === "B"
                                ? "text-purple-400"
                                : subject.grade === "E"
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                          }`}
                          whileHover={{ scale: 1.2 }}
                        >
                          {subject.grade}
                        </motion.span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Grade Legend */}
          <motion.div
            className="bg-[#13102a] rounded-lg p-4 shadow-md hover:shadow-lg transition-all"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-4">Grade Legend</h3>
            <div className="flex flex-wrap gap-4">
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs">O</span>
                <span>Outstanding</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <span className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs">E</span>
                <span>Excellent</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">A</span>
                <span>Good</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-xs">F</span>
                <span>Fail</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                <span className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-xs">-</span>
                <span>Not Applicable</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
