import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Overlay from './components/ui/Overlay.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<Overlay />}>
      <App />
    </React.Suspense>
    
  </React.StrictMode>,
)
