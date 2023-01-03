import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddBook from './pages/AddBook'
import Books from './pages/Books'
import UpdateBook from './pages/UpdateBook'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books/>}></Route>
          <Route path='/add' element={<AddBook/>}></Route>
          <Route path='/update/:id' element={<UpdateBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App