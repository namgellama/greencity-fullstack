import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/ProductDetail';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
	return (
		<>
			<Navbar />
			<main className="min-h-[85vh] md:min-h-[90vh] lg:min-h-[82vh]">
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/products" element={<ProductPage />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/cart/:id?" element={<CartPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/profile" element={<ProfilePage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
