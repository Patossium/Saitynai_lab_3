import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const [formData, setFormData] = useState({
		userName: '',
		email: '',
		password: '',
	});
	const [apiErrors, setApiErrors] = useState('');

	const navigate = useNavigate();

	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const changeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		//Post form to backend API
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const body = JSON.stringify(formData);
			const response = await axios.post(
				'https://jellyfish-app-ynzfh.ondigitalocean.app/api/register',

				body,
				config,
			);

			navigate('/login');
		} catch (err) {
			setApiErrors(err.response.data.errors);
		}
	};

	return (
		<main>
			<section className="form">
				<form>
					<input
						type="text"
						placeholder="Enter your UserName"
						ref={inputRef}
						name="userName"
						value={formData.userName}
						onChange={changeHandler}
					/>
					<input
						type="email"
						placeholder="Enter your Email"
						name="email"
						value={formData.email}
						onChange={changeHandler}
					/>
					<input
						type="password"
						placeholder="Enter your Password"
						name="password"
						value={formData.password}
						onChange={changeHandler}
					/>
					<button onClick={submitHandler}>Register</button>
				</form>
			</section>
		</main>
	);
};

export default Register;
