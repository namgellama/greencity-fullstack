import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/shared/Loader';
import AlertMessage from '../components/shared/AlertMessage';

function ProductDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const productDetails = useSelector((state) => state.productDetails);
	const { product, loading, error } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(id));
	}, [dispatch, id]);

	let [qty, setQty] = useState(1);

	const handleDecrease = () => {
		if (qty > 1) {
			qty -= 1;
			setQty(qty);
		}
	};

	const handleIncrease = () => {
		if (qty < product.countInStockRetail) {
			qty += 1;
			setQty(qty);
		}
	};

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};

	return loading ? (
		<Loader />
	) : error ? (
		<div className="my-8 w-[1200px] mx-auto">
			<AlertMessage error={error} />
		</div>
	) : (
		<section className="w-full lg:w-[1200px] mx-auto my-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-8 py-2 px-4 lg:px-2 cursor-pointer justify-center">
			<div className="mb-8 md:flex">
				<img
					className="lg:w-[600px] lg:h-[540px] h-[450px] md:w-[600px] md:h-[600px] w-screen object-cover rounded-md"
					src={product.image}
					alt={product.title}
				/>
			</div>
			<main className="md:px-6 lg:ml-2">
				<h1 className="text-3xl font-bold uppercase">
					{product.title}
					<span className="text-2xl font-medium"> ({product.flavour})</span>
				</h1>
				<h2 className="text-2xl font-semibold mt-2 mb-3">
					Rs. {product.price}
				</h2>
				<div className="flex items-center text-lg">
					<p>Status: </p>
					<span className="ml-4">
						{product.countInStockRetail > 0
							? `In Stock (${product.countInStockRetail} cartoons)`
							: 'Out of Stock'}
					</span>
				</div>
				{product.countInStockRetail > 0 && (
					<>
						<p className="text-red-500 mt-8">
							*quantity is measured in cartoons.
							<span className="block md:inline lg:inline">
								&#40;1 cartoon = 12 pieces&#41;*
							</span>
						</p>

						<div className="flex items-center mb-3 mt-4">
							<div className="flex items-center">
								<button
									className={`w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer`}
									onClick={handleDecrease}
								>
									-
								</button>
								<div className="text-2xl mx-5">{qty}</div>
								<button
									className="w-[40px] lg:w-[50px] lg:h-[50px] text-center text-4xl border border-gray-300 hover:border-gray-400 cursor-pointer"
									onClick={handleIncrease}
								>
									+
								</button>
							</div>
							<button
								className="ml-8 bg-black text-white py-2 lg:py-3 px-3 lg:px-7 text-xl font-medium hover:bg-black/70"
								onClick={addToCartHandler}
							>
								Add To Cart
							</button>
						</div>
					</>
				)}
				<div className="w-full my-10 text-lg text-justify">
					<div className="flex items-center mb-2">
						<GrCircleInformation size={25} />
						<span className="text-xl font-semibold ml-2">Description</span>
					</div>
					{product.description}
				</div>
			</main>
		</section>
	);
}

export default ProductDetail;
