import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div >
      <Routes>
<Route path="/home" element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App