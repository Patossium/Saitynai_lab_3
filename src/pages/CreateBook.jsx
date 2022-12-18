import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const CreateBook = () => {
	const [formData, setFormData] = useState({
		Name: '',
		Author: '',
		Rating: '',
		Genre: '',
	});

	const navigate = useNavigate();

	const inputRef = useRef();

	const { token } = useContext(MyContext);

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
					Authorization: 'Bearer ' + token,
				},
			};
			const body = JSON.stringify(formData);
			const response = await axios.post(
				'https://jellyfish-app-ynzfh.ondigitalocean.app/api/books',

				body,
				config,
			);

			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<main>
			<section className="form">
				<form>
					<input
						type="text"
						placeholder="Enter book name"
						ref={inputRef}
						name="Name"
						value={formData.Name}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the author"
						name="Author"
						value={formData.Author}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the rating"
						name="Rating"
						value={formData.Rating}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the genre"
						name="Genre"
						value={formData.Genre}
						onChange={changeHandler}
					/>
					<button onClick={submitHandler}>Create Book</button>
				</form>
			</section>
		</main>
	);
};

export default CreateBook;
