import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/shared/Loader';
import DangerMessage from '../components/shared/DangerMessage';

function RegisterPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	const { search } = useLocation();
	const navigate = useNavigate();

	const redirect = search ? search.split('=')[1] : '/';
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Password do not match');
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<section className="w-[350px] mx-auto md:w-full mt-[3rem] flex flex-col items-center">
			<div className="w-full max-w-md">
				{message && <DangerMessage error={message} />}
				{error && <DangerMessage error={error} />}
				{loading && <Loader />}
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-9 mb-4"
					onSubmit={submitHandler}
				>
					<h1 className="text-3xl font-semibold uppercase mb-9">Register</h1>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-lg font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-lg font-bold mb-2"
							htmlFor="email"
						>
							Email Address
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-lg font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-lg font-bold mb-2"
							htmlFor="passwordConfirm"
						>
							Confirm Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="passwordConfirm"
							type="password"
							required
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
					</div>
					<h3 className="text-gray-500 font-semibold">
						Have an Account ?{' '}
						<Link
							to={redirect ? `/login?redirect=${redirect}` : '/login'}
							className="text-black hover:text-black/80"
						>
							Sign In
						</Link>
					</h3>
				</form>
			</div>
		</section>
	);
}

export default RegisterPage;
