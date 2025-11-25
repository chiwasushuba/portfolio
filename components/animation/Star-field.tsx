"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  maxSize: number
}

export function StarfieldAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []

    function createShootingStar() {
      if (!canvas) return

      const startX = Math.random() * canvas.width * 0.2
      const startY = Math.random() * canvas.height * 0.2

      particles.push({
        x: startX,
        y: startY,
        vx: (Math.random() + 1) * 4,
        vy: (Math.random() + 1) * 2,
        life: 0,                // start at 0 to grow
        maxLife: Math.random() * 1 + 2, // longer lifespan
        size: 0,                // start small
        maxSize: Math.random() * 5 + 10, // final size
      })
    }

    const spawnInterval = setInterval(() => {
      if (particles.length < 15) {
        createShootingStar()
      }
    }, 400)

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // move
        p.x += p.vx
        p.y += p.vy

        // increase life
        p.life += 0.01

        const progress = p.life / p.maxLife
        const currentSize = p.size + (p.maxSize - p.size) * progress

        if (p.life >= p.maxLife) {
          particles.splice(i, 1)
          continue
        }

        const opacity = 1 - progress

        ctx.shadowColor = `rgba(255, 255, 255, ${opacity})`
        ctx.shadowBlur = 15

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fillRect(p.x, p.y, currentSize, currentSize)

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3)
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(spawnInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}
