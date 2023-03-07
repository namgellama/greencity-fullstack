import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiShoppingCart } from 'react-icons/hi';
import Logo from '../../assets/logo.png';
import { logout } from '../../actions/userActions';

function Navbar() {
	const [open, setOpen] = useState(false);
	const [show, setshow] = useState(false);
	const handleClick = () => setOpen(!open);
	const handleShow = () => setshow(!show);

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<nav className="w-full sticky top-0 bg-black text-white text-lg font-normal z-10 flex items-center justify-between py-3 px-3 md:px-8 md:flex-row md:py-1 lg:flex-row lg:py-0">
			<Link to="/" className="flex items-center md:mb-2 z-10 lg:mt-1">
				<img className="w-[45px] md:mb-2 lg:mb-0" src={Logo} alt="Logo Image" />
				<h1 className="text-xl font-semibold ml-2 text-[#aa6f35]">
					<span className="text-green-600">Green</span>City
				</h1>
			</Link>

			<div
				onClick={handleClick}
				className="absolute right-4 top-6 cursor-pointer lg:hidden hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				{!open ? (
					<FaBars size={25} className="cursor-pointer" />
				) : (
					<FaTimes size={25} className="cursor-pointer" />
				)}
			</div>

			<ul
				className={`w-full flex flex-col items-start bg-black absolute top-12 left-0 mt-3 pl-5 lg:static lg:flex py-3 lg:flex-row lg:justify-end lg:mt-0 lg:py-2 opacity-100  ${
					open ? 'top-0' : 'opacity-0 hidden'
				}`}
			>
				<li
					className="my-3 ml-[-1rem] md:my-2 md:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link className="text-white hover:text-gray-400 duration-300" to="/">
						Home
					</Link>
				</li>
				<li
					className="my-3 ml-[-1rem] md:my-2 md:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/products"
					>
						Shop
					</Link>
				</li>
				<li
					className="my-3 ml-[-1rem] md:mt-2 md:mb-4 md:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/contact"
					>
						Contact
					</Link>
				</li>
				<li
					className="my-3 ml-[-1rem] md:mt-2 md:mb-4 md:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/cart"
					>
						<div className="flex items-center">
							<HiShoppingCart size={25} className="mr-1" />
							Cart
						</div>
					</Link>
				</li>
				{userInfo ? (
					<li
						className="my-3 ml-[-1rem] md:mt-2 md:mb-4 md:mx-2 lg:mt-3"
						onClick={handleShow}
					>
						<div className="text-white">
							<div className="flex items-center hover:text-gray-400 duration-200">
								<FaUser size={20} className="mr-2" />
								<span className="flex items-center">
									{userInfo.name}
									<IoMdArrowDropdown className="mt-1" />
								</span>
							</div>
							<ul
								className={
									show
										? 'block absolute md:mt-3 lg:top-14 lg:right-8 px-4 py-2 bg-black'
										: 'hidden'
								}
							>
								<li className="pb-2 hover:text-gray-400 duration-200">
									<Link to="/profile">Profile</Link>
								</li>
								<li
									className="pb-2 hover:text-gray-400 duration-200"
									onClick={logoutHandler}
								>
									Logout
								</li>
							</ul>
						</div>
					</li>
				) : (
					<li
						className="my-3 ml-[-1rem] md:mt-2 md:mb-4 md:mx-2 lg:mt-3"
						onClick={handleClick}
					>
						<Link
							className="text-white hover:text-gray-400 duration-200"
							to="/login"
						>
							<div className="flex items-center">
								<FaUser size={20} className="mr-2" />
								Login
							</div>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
