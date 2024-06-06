import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import Layout from './components/Organisms/layouts/Layout'
import ContactPage from './pages/contact/ContactPage'
import FoodPage from './pages/food/FoodPage'
import FavoritePage from './pages/fav/FavoritePage'
import AddToCard from './pages/addCard/AddToCard'
import LoginPage from './pages/auth/LoginPage'
import Register from './pages/auth/Register'
import FAQPage from './pages/faq/FAQPage'
import BlogPage from './pages/blog/BlogPage'
import ErrorPage from './pages/error/404_error'
import FoodDetail from './pages/food/FoodDetails'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage />} />
          <Route path="food" element={<FoodPage/>}/>
          <Route path="food-details" element={<FoodDetail />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="favorite" element={<FavoritePage/>}/>
          <Route path="add-card" element={<AddToCard/>}/>
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<ErrorPage/>}/>
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
