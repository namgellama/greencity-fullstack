import { useEffect } from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import Showcase from '../components/Showcase';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from '../components/shared/Loader';
import AlertMessage from '../components/shared/AlertMessage';

function HomePage() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { loading, products, error } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<Showcase />
			{loading ? (
				<Loader />
			) : error ? (
				<div className="my-8 w-[1200px] mx-auto">
					<AlertMessage error={error} />
				</div>
			) : (
				<FeaturedProduct products={products} />
			)}
		</>
	);
}

export default HomePage;
