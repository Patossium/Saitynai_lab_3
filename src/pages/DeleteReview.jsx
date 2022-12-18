import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';

const DeleteReview = () => {
	const { state } = useLocation();
	const { review } = state;
	const { id, text, rating, book: { id: bookId, name, author, rating: bookRating, genre }} = review;

	const navigate = useNavigate();

	const {token} = useContext(MyContext);

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
				`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${bookId}/reviews/${id}`,
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
					<p>{text}</p>
					<p>{rating}</p>

					<button onClick={submitHandler}>Delete Review</button>
				</form>
			</section>
		</main>
	);
};

export default DeleteReview;
