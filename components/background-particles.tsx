"use client"

import { useEffect } from "react"

export default function BackgroundParticles() {
  useEffect(() => {
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

  return <div className="particles"></div>
}
