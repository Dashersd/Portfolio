import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const orbs = []
    const orbCount = 3

    // Create orbs
    const createOrbs = () => {
      orbs.length = 0 // Clear existing orbs
      for (let i = 0; i < orbCount; i++) {
        orbs.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: 200 + Math.random() * 150,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          hue: 180 + Math.random() * 20, // Cyan range
        })
      }
    }

    // Set canvas size with device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      
      ctx.setTransform(1, 0, 0, 1, 0, 0) // Reset transform
      ctx.scale(dpr, dpr)
    }
    
    // Initial setup
    resizeCanvas()
    createOrbs()
    
    // Handle window resize
    const handleResize = () => {
      resizeCanvas()
      createOrbs()
    }
    window.addEventListener('resize', handleResize)

    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      ctx.clearRect(0, 0, width, height)

      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx
        orb.y += orb.vy

        // Bounce off edges
        if (orb.x < 0 || orb.x > width) orb.vx *= -1
        if (orb.y < 0 || orb.y > height) orb.vy *= -1

        // Create gradient
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        )
        gradient.addColorStop(0, `rgba(6, 182, 212, 0.5)`)
        gradient.addColorStop(0.3, `rgba(6, 182, 212, 0.3)`)
        gradient.addColorStop(0.6, `rgba(6, 182, 212, 0.15)`)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ 
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 1,
        background: '#111827'
      }}
    />
  )
}

export default AnimatedBackground

