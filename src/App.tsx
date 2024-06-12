import { BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import Layout from './components/Organisms/layouts/Layout'
import ContactPage from './pages/contact/ContactPage'
import FoodPage from './pages/food/FoodPage'
import FoodDetails from './pages/food/FoodDtail'
import FavoritePage from './pages/fav/FavoritePage'
import AddToCard from './pages/addCard/AddToCard'
import LoginPage from './pages/auth/LoginPage'
import Register from './pages/auth/Register'
import FAQPage from './pages/faq/FAQPage'
import BlogPage from './pages/blog/BlogPage'
import FoodKhmer from './pages/food/subfood/FoodKhmer'
import FoodNum from './pages/food/subfood/FoodNum'
import FoodDrink from './pages/food/subfood/FoodDrink'
import FoodMore from './pages/food/subfood/FoodMore'
import { drinks, foods, foodsKh, foodsNum } from './data/myData'
import { FoodProvider } from './context/FoodContext'

function App() {
  return (
    <AuthProvider>
      <FoodProvider>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage />} />
          <Route path="food" element={<FoodPage foods={foods}/>}/>
          <Route path="food/:foodId" element={<FoodDetails/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="add-card" element={<AddToCard />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="food-khmer" element={<FoodKhmer foodsKh={foodsKh} />} />
          <Route path="food-num" element={<FoodNum foodsNum={foodsNum}/>} />
          <Route path="food-drink" element={<FoodDrink drinks={drinks}/>} />
          <Route path="food-more" element={<FoodMore/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
         </Route>
        </Routes>
      </BrowserRouter>
      </FoodProvider>
    </AuthProvider>
  );
}

export default App;
