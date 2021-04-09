
import React from 'react'
import Header from './components/Header'
import Products from './components/Products'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {DataProvider} from './components/DataProvider'
import Details from './components/Details'
import Cart from './components/Cart'

function App() {
  return (
    <DataProvider>
      <h1>Hello</h1>
    <div className="App">
      <Router>
      <Header />
      <section>
        <Routes>
          <Route path="Products" element={<Products />} />
          <Route path="Products/:id" element={<Details />} />
          <Route path="cart" element={ <Cart />} />
         </Routes>
      </section>
      </Router>
      </div>
      </DataProvider>
  );
}

export default App;
