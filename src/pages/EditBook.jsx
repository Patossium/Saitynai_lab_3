import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const EditBook = () => {
	const { state } = useLocation();
	const { book } = state;
	const { id, name, author, rating, genre } = book;
	const [formData, setFormData] = useState({
		name,
		author,
		rating,
		genre,
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
			const response = await axios.put(
				`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${id}`,

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
						name="name"
						value={formData.name}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the author"
						name="author"
						value={formData.author}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the rating"
						name="rating"
						value={formData.rating}
						onChange={changeHandler}
					/>
					<input
						type="text"
						placeholder="Enter the genre"
						name="genre"
						value={formData.genre}
						onChange={changeHandler}
					/>
					<button onClick={submitHandler}>Edit Book</button>
				</form>
			</section>
		</main>
	);
};

export default EditBook;
