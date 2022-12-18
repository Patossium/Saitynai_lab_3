import { useState, useContext } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MyContext from '../context/MyContext';
import Modal from './Modal';

const Book = ({ book }) => {
	const [activePrompt, setActivePrompt] = useState(false);
	const { id, name, author, genre, rating } = book;

	const {token} = useContext(MyContext);

	const navigate = useNavigate()

	const openPrompt = () => {
		setActivePrompt(true);
	}

	const declinePrompt = () => {
		setActivePrompt(false);
	}

	const acceptPrompt = async () => {
		setActivePrompt(false);
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
	}

	return (
		<section className="book">
			{activePrompt 
				&& 
				<Modal 
					description={"Do you really want to delete this book?"} 
					declineHandler={declinePrompt} 
					acceptHandler={acceptPrompt} 
				/>
			}
			<label>Id:</label>
			<p>{id}</p>
			<label>Name:</label>
			<p>{name}</p>
			<label>Author:</label>
			<p>{author}</p>
			<label>Genre:</label>
			<p>{genre}</p>
			<label>Rating:</label>
			<p>{rating}</p>
			<Button buttonName="Edit" buttonFunction="editBook" book={book} />
			<button buttonName="Delete" disabled={token === ''} onClick={openPrompt}><span>Delete</span></button>
			<Button buttonName="Reviews" buttonFunction="showReviews" book={book} />
		</section>
	);
};

export default Book;
