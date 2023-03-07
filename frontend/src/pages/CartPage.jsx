import { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import InfoMessage from '../components/shared/InfoMessage';
import { FaTrash, FaArrowRight } from 'react-icons/fa';

function CartPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const productId = id;

	let qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	const handleDecrease = (item) => {
		if (item.qty > 1) {
			item.qty -= 1;
			dispatch(addToCart(item.product, item.qty));
		}
	};

	const handleIncrease = (item) => {
		if (item.qty < item.countInStockRetail) {
			item.qty += 1;
			dispatch(addToCart(item.product, item.qty));
		}
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		navigate('/login?redirect=delivery');
	};

	return (
		<div className="lg:w-[1100px] mx-auto py-8">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-semibold mb-2">Shopping Cart</h1>
				{cartItems.length > 0 && (
					<Link
						to="/products"
						className="text-2xl text-red-500 flex items-center justify-center"
					>
						More products <FaArrowRight className="ml-2" />
					</Link>
				)}
			</div>

			{cartItems.length === 0 ? (
				<InfoMessage message={`Your cart is empty.`} link="Check products" />
			) : (
				<div className="my-4 p-1 grid grid-cols-1 lg:grid-cols-3fr-1fr">
					<ul>
						{cartItems.map((item) => (
							<div
								key={item.product}
								className="flex items-center justify-between mb-2 border border-b-gray-400 py-5"
							>
								<li>
									<img
										className="w-24 md:w-28"
										src={item.image}
										alt={item.title}
									/>
								</li>
								<li className="px-0 md:w-[300px]">
									<span className="text-lg md:text-2xl md:font-semibold">
										{item.title} - {item.flavour}
									</span>
									<div className="flex items-center mt-3">
										<button
											className={`w-[40px] w-[40px]text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer`}
											onClick={() => handleDecrease(item)}
										>
											-
										</button>
										<div className="text-2xl mx-5">{item.qty}</div>
										<button
											className="w-[40px] h-[40]text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer"
											onClick={() => handleIncrease(item)}
										>
											+
										</button>
									</div>
								</li>
								<li className="w-[140px] mb-7 md:font-semibold md:text-2xl md:mb-[3.4rem]">
									Rs. {item.price * item.qty}
								</li>
								<li className="mb-7  md:text-xl md:mb-[3.4rem]">
									<button
										className="hover:text-gray-600"
										type="button"
										onClick={() => removeFromCartHandler(item.product)}
									>
										<FaTrash />
									</button>
								</li>
							</div>
						))}
					</ul>
					<div className="ml-8 border w-[300px] h-[160px] mt-6 lg:mt-0 border-gray-500">
						<div className="p-2 border border-b-gray-400">
							<h1 className="text-2xl font-semibold pb-2 uppercase">
								Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
								Items
							</h1>
							<h2 className="text-2xl font-semibold ">
								Rs. {''}
								{cartItems.reduce(
									(acc, item) => acc + item.qty * item.price,
									0
								)}
							</h2>
						</div>
						<div className="mt-4 flex justify-center">
							<button
								className="bg-black text-white py-2 w-[200px] px-3 "
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed To Checkout
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartPage;
