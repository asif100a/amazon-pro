import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './project/root/Root.jsx'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </StrictMode>,
)
