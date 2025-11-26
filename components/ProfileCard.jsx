'use client'

import { useRef, useEffect, useState } from 'react'
import './ProfileCard.css'

const ProfileCard = ({
  name = 'Riyas Siddikk',
  title = 'Manager - Operations',
  handle = 'riyassiddikk',
  status = 'Available',
  contactText = 'Contact Me',
  avatarUrl = '/Riyas_ProfilePicture.png',
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick = () => {}
}) => {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const frameRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card || (!enableTilt && !enableMobileTilt)) return

    const updatePointer = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const pointerX = (x / rect.width) * 100
      const pointerY = (y / rect.height) * 100
      const fromCenter = Math.sqrt(
        Math.pow((x - centerX) / centerX, 2) + Math.pow((y - centerY) / centerY, 2)
      )
      const fromTop = y / rect.height
      const fromLeft = x / rect.width

      const maxRotate = 15
      const rotateX = ((fromTop - 0.5) * maxRotate).toFixed(2)
      const rotateY = ((fromLeft - 0.5) * -maxRotate).toFixed(2)

      card.style.setProperty('--pointer-x', `${pointerX}%`)
      card.style.setProperty('--pointer-y', `${pointerY}%`)
      card.style.setProperty('--pointer-from-center', fromCenter.toFixed(2))
      card.style.setProperty('--pointer-from-top', fromTop.toFixed(2))
      card.style.setProperty('--pointer-from-left', fromLeft.toFixed(2))
      card.style.setProperty('--rotate-x', `${rotateX}deg`)
      card.style.setProperty('--rotate-y', `${rotateY}deg`)
      card.style.setProperty('--background-x', `${pointerX}%`)
      card.style.setProperty('--background-y', `${pointerY}%`)

      setIsActive(true)
    }

    const handleLeave = () => {
      setIsActive(false)
      if (card) {
        card.style.setProperty('--rotate-x', '0deg')
        card.style.setProperty('--rotate-y', '0deg')
      }
    }

    const shouldEnable = (e) => {
      if (window.innerWidth <= 768) {
        return enableMobileTilt
      }
      return enableTilt
    }

    const handleMove = (e) => {
      if (!shouldEnable(e)) return
      if (frameRef.current) return
      const eventData = e.touches && e.touches.length > 0 ? e.touches[0] : e
      frameRef.current = requestAnimationFrame(() => {
        updatePointer(eventData)
        frameRef.current = null
      })
    }

      card.addEventListener('mousemove', handleMove, { passive: true })
      card.addEventListener('mouseleave', handleLeave)
      card.addEventListener('touchmove', handleMove, { passive: true })
      card.addEventListener('touchend', handleLeave)

    return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
          frameRef.current = null
        }
        card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
        card.removeEventListener('touchmove', handleMove)
      card.removeEventListener('touchend', handleLeave)
    }
  }, [enableTilt, enableMobileTilt])

  return (
    <div className={`pc-card-wrapper ${isActive ? 'active' : ''}`} ref={cardRef}>
      <div className="pc-card-shell">
        <div className="pc-card">
          <div className="pc-behind"></div>
          <div className="pc-inside"></div>
          <div className="pc-shine"></div>
          <div className="pc-glare"></div>
          
          <div className="pc-avatar-content">
            <img src={avatarUrl} alt={name} className="avatar" />
          </div>
          
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>

          {showUserInfo && (
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-mini-avatar">
                  <img src={avatarUrl} alt={name} />
                </div>
                <div className="pc-user-text">
                  <div className="pc-handle">@{handle}</div>
                  <div className="pc-status">{status}</div>
                </div>
              </div>
              <button className="pc-contact-btn" onClick={onContactClick}>
                {contactText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

