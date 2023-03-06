import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function InfoMessage({ message, link }) {
	return (
		<div
			class="w-full bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 "
			role="alert"
		>
			<div className="flex flex-col items-center justify-center">
				<p class="font-semibold mr-4 mb-2 text-lg">{message}</p>
				<Link
					to="/products"
					className="text-red-500 text-lg font-semibold rounded-sm flex items-center"
				>
					<div className="mr-2">{link}</div>
					<FaArrowRight />
				</Link>
			</div>
		</div>
	);
}

export default InfoMessage;
