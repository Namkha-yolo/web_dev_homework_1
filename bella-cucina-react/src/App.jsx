import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import Notification from './components/Notification'

function App() {
  return (
    <CartProvider>
      <Header />
      <CartSidebar />
      <Notification />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
