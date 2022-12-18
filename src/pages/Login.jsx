import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const Register = () => {
	const [formData, setFormData] = useState({
		userName: '',
		password: '',
	});

	const { setToken, setCredentials } = useContext(MyContext);
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
				'https://jellyfish-app-ynzfh.ondigitalocean.app/api/login',

				body,
				config,
			);

			setToken(response.data.accessToken);

			setCredentials({ userName: formData.userName, role: '' });
			navigate('/');
		} catch (err) {
			console.log(err.response.data.errors);
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
						type="password"
						placeholder="Enter your Password"
						name="password"
						value={formData.password}
						onChange={changeHandler}
					/>
					<button onClick={submitHandler}>Login</button>
				</form>
			</section>
		</main>
	);
};

export default Register;
