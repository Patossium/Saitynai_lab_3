import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const CreateBook = () => {
	const [formData, setFormData] = useState({
		text: '',
		rating: '',
	});

	const { state } = useLocation();
	const { book } = state;
	const { id, name, author } = book;

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
				`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${id}/reviews`,

				body,
				config,
			);

			navigate('/reviews', { state: { book } });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<main>
			<section className="form">
				<form>
					<p>{name}</p>
					<p>{author}</p>
					<input
						type="text"
						placeholder="Enter review text"
						ref={inputRef}
						name="text"
						value={formData.text}
						onChange={changeHandler}
					/>
					<input
						type="number"
						placeholder="Enter review rating"
						name="rating"
						value={formData.rating}
						onChange={changeHandler}
					/>

					<button onClick={submitHandler}>Create Rating</button>
				</form>
			</section>
		</main>
	);
};

export default CreateBook;
