import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Routes, Route } from 'react-router-dom'
import ItemList from './components/itemList/itemList'
import Create from './components/create/create'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/cadastro" element={<Create />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
