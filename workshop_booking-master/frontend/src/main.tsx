import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ParticleTextEffect } from './components/ui/particle-text-effect'
import NavHeader from './components/ui/nav-header'

const mountComponent = (id: string, Component: React.FC<any>, props = {}) => {
  const el = document.getElementById(id)
  if (el) {
    createRoot(el).render(
      <React.StrictMode>
        <Component {...props} />
      </React.StrictMode>
    )
  }
}

window.addEventListener('load', () => {
  mountComponent('react-banner', ParticleTextEffect)
  mountComponent('react-navbar', NavHeader)
})
