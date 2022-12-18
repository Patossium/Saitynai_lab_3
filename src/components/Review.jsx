import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Modal from './Modal';
import axios from 'axios';

import MyContext from '../context/MyContext';

const Review = ({ review }) => {
	const [activePrompt, setActivePrompt] = useState(false);
	const {
		id,
		text,
		rating,
		book: { id: bookId, name, author, rating: bookRating, genre },
	} = review;

	const {token} = useContext(MyContext);

	const navigate = useNavigate()

	const openPrompt = () => {
		console.log("blah");
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
				`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${bookId}/reviews/${id}`,
				config,
			);

			navigate('/');
		} catch (err) {
			console.log(err);
		}
	}

	

	return (
		<section className="review">
			{activePrompt 
				&& 
				<Modal 
					description={"Do you really want to delete this review?"} 
					declineHandler={declinePrompt} 
					acceptHandler={acceptPrompt} 
				/>
			}
			<label>Id:</label>
			<p>{id}</p>
			<label>Text:</label>
			<p>{text}</p>
			<label>Rating:</label>
			<p>{rating}</p>
			<label>Book Id:</label>
			<p>{bookId}</p>
			<label>Book Name:</label>
			<p>{name}</p>
			<label>Book Author:</label>
			<p>{author}</p>
			<label>Book Rating:</label>
			<p>{bookRating}</p>
			<label>Book Genre:</label>
			<p>{genre}</p>
			<Button buttonName="Edit" buttonFunction="editReview" review={review}/>
			<button buttonName="Delete" onClick={openPrompt} review={review}><span>Delete</span></button>
		</section>
	);
};

export default Review;
