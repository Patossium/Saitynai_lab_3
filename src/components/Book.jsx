import Button from './Button';

const Book = ({ book }) => {
	const { id, name, author, genre, rating } = book;
	

	return (
		<section className="book">
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
			<Button buttonName="Delete" buttonFunction="deleteBook" book={book} />
			<Button buttonName="Reviews" buttonFunction="showReviews" book={book} />
		</section>
	);
};

export default Book;
