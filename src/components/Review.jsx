import React from 'react';
import Button from './Button';

const Review = ({ review }) => {
	const {
		id,
		text,
		rating,
		book: { id: bookId, name, author, rating: bookRating, genre },
	} = review;

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
			<Button buttonName="Edit" buttonFunction="Edit" />
			<Button buttonName="Delete" buttonFunction="Delete" />
		</section>
	);
};

export default Review;
