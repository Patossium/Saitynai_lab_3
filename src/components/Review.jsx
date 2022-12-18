import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import MyContext from '../context/MyContext';

const Review = ({ review }) => {
	const {
		id,
		text,
		rating,
		userId,
		book: { id: bookId, name, author, rating: bookRating, genre },
	} = review;
	const { token } = useContext(MyContext);

	function parseJwt (token) {
		var base64Url = token.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		return JSON.parse(jsonPayload).sub;
	  }
	  let sub;
	if(token !== ''){
		sub = parseJwt(token);
	} else {
		sub = token;
	}
	const navigate = useNavigate()

	return (
		<section className="review">
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
			<Button buttonName="Edit" buttonFunction="editReview" review={review} disable={sub !== userId}/>
			<Button buttonName="Delete" buttonFunction="deleteReview" review={review} disable={sub !== userId}/>
		</section>
	);
};

export default Review;
