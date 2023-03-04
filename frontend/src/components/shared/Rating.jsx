import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Rating({ value, text, color }) {
	return (
		<div className="flex items-center">
			<span>
				{value >= 1 ? (
					<FaStar size={25} color={color} />
				) : value >= 0.5 ? (
					<FaStarHalfAlt size={25} color={color} />
				) : (
					<FaRegStar size={25} color={color} />
				)}
			</span>
			<span>
				{value >= 2 ? (
					<FaStar size={25} color={color} />
				) : value >= 1.5 ? (
					<FaStarHalfAlt size={25} color={color} />
				) : (
					<FaRegStar size={25} color={color} />
				)}
			</span>
			<span>
				{value >= 3 ? (
					<FaStar size={25} color={color} />
				) : value >= 2.5 ? (
					<FaStarHalfAlt size={25} color={color} />
				) : (
					<FaRegStar size={25} color={color} />
				)}
			</span>
			<span>
				{value >= 4 ? (
					<FaStar size={25} color={color} />
				) : value >= 3.5 ? (
					<FaStarHalfAlt size={25} color={color} />
				) : (
					<FaRegStar size={25} color={color} />
				)}
			</span>
			<span>
				{value >= 5 ? (
					<FaStar size={25} color={color} />
				) : value >= 4.5 ? (
					<FaStarHalfAlt size={25} color={color} />
				) : (
					<FaRegStar size={25} color={color} />
				)}
			</span>
			<span className="ml-3 text-lg">{text && text}</span>
		</div>
	);
}

Rating.defaultProps = {
	color: '#f8e825',
};

Rating.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string,
	color: PropTypes.string,
};

export default Rating;
