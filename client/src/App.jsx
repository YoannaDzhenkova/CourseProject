import './App.css'
import { UserContext } from './contexts/UserContext'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/homePage/Home'
import Services from './components/services/Services'
import Details from './components/services/Details'
import Create from './components/services/Create'
import Edit from './components/services/Edit'

import { Route, Routes } from 'react-router'
import { useState } from 'react'
import Category from './components/category/Category'

function App() {
  const [userData, setUserData] = useState({});

  const userLoginHandler = (resultData) => {

    setUserData(resultData);
  }

  return (
    <>
      <UserContext.Provider value={{ ...userData, userLoginHandler }}>
        <Header />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Services />} />
            <Route path='/create' element={<Create />} />
            <Route path='/services/:serviceId/edit' element={<Edit />} />
            <Route path='/services/:serviceId/details' element={<Details />} />
            <Route path='/services/:category' element={<Category />} />
          </Routes>

        </main>

        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App
