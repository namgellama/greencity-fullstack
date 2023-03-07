import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loader from '../components/shared/Loader';
import DangerMessage from '../components/shared/DangerMessage';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const { search } = useLocation();
	const navigate = useNavigate();

	const redirect = search ? search.split('=')[1] : '/';
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, userInfo, redirect]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<section className="w-[350px] mx-auto md:w-full mt-[3rem] flex flex-col items-center">
			<div className="w-full max-w-md">
				{error && <DangerMessage error={error} />}
				{loading && <Loader />}
				<form
					className="bg-white shadow-md rounded px-8 pt-6 pb-9 mb-4"
					onSubmit={submitHandler}
				>
					<h1 className="text-3xl font-semibold uppercase mb-9">Sign In</h1>
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
					<div className="flex items-center justify-between mb-4">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<Link
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
							to="#"
						>
							Forgot Password?
						</Link>
					</div>
					<h3 className="text-gray-500 font-semibold">
						New customer ?{' '}
						<Link
							to={redirect ? `/register?redirect=${redirect}` : '/register'}
							className="text-black hover:text-black/80"
						>
							Register
						</Link>
					</h3>
				</form>
			</div>
		</section>
	);
}

export default LoginPage;
