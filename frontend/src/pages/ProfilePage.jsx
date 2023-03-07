import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import Loader from '../components/shared/Loader';
import DangerMessage from '../components/shared/DangerMessage';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

function ProfilePage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const userDetails = useSelector((state) => state.userDetails);
	const { loading, error, user } = userDetails;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	useEffect(() => {
		if (!userInfo) {
			navigate('/login');
		} else {
			if (!user || !user.name || success) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails('profile'));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [dispatch, navigate, userInfo, user, success]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Password do not match');
		} else {
			dispatch(
				updateUserProfile({
					id: user._id,
					name: name,
					email: email,
					password: password,
				})
			);
			setMessage('');
		}
	};

	return (
		<section className="w-[1300px] mx-auto py-4 my-4">
			<div className="grid grid-cols-1fr-3fr gap-8">
				<div className="w-[390px] px-2">
					<h1 className="text-2xl font-medium uppercase">User Profile</h1>
					{message && <DangerMessage error={message} />}
					{error && <DangerMessage error={error} />}
					{loading && <Loader />}
					<form
						className="bg-white shadow-md rounded px-8 pt-6 pb-9 my-6"
						onSubmit={submitHandler}
					>
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
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Update
							</button>
						</div>
					</form>
				</div>
				<div>
					<h1 className="text-2xl font-medium uppercase">My Orders</h1>
				</div>
			</div>
		</section>
	);
}

export default ProfilePage;
