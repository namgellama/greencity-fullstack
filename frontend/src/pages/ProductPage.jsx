import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import Loader from '../components/shared/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import AlertMessage from '../components/shared/AlertMessage';

function ProductPage() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, products, error } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<section name="products" className="w-full text-center my-4">
			<header className="my-4">
				<h1 className="text-4xl font-semibold mr-4 lg:mr-0">All Products</h1>
			</header>

			<div className="container lg:w-[1200px] mx-auto">
				{loading ? (
					<Loader />
				) : error ? (
					<AlertMessage error={error} />
				) : (
					<div className="container text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{products.map((product) => (
							<Link
								className="flex flex-col items-center mx-4"
								to={`/products/${product._id}`}
								key={product._id}
							>
								<Card>
									<img
										className="w-[300px] h-[300px] object-cover mb-3"
										src={product.image}
										alt={product.title}
									/>
									<div className="flex flex-col items-center mt-5">
										<h1 className="text-xl font-semibold">
											{product.title} ({product.flavour})
										</h1>
										<p className="text-xl font-semibold">Rs. {product.price}</p>
									</div>
								</Card>
							</Link>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default ProductPage;
