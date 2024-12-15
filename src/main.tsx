import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage.tsx'
import HeroPage from './components/HeroPage/HeroPage.tsx'
import Profile from './components/Profile/Profile.tsx'
import { Provider } from 'react-redux'
import { store } from "./store/store.ts"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/heroes",
        element: <HeroPage />,
      },

      {
        path: "/profile",
        element: <Profile/>,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
