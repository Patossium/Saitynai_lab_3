import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const DeleteBook = () => {
	const { state } = useLocation();
	const { book } = state;
	const { id, name, author, rating, genre } = book;

	const navigate = useNavigate();

	const { token } = useContext(MyContext);

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

			const response = await axios.delete(
				`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${id}`,
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
					<p>{name}</p>
					<p>{author}</p>
					<p>{rating}</p>
					<p>{genre}</p>

					<button onClick={submitHandler}>Delete Book</button>
				</form>
			</section>
		</main>
	);
};

export default DeleteBook;
