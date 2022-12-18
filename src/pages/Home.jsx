import { useState, useEffect } from 'react';
import Book from '../components/Book';

const Home = () => {
	const [data, setData] = useState({
		results: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		fetch('https://jellyfish-app-ynzfh.ondigitalocean.app/api/books')
			.then((response) => response.json())
			.then((data) => setData({ results: data, loading: false, error: null }))
			.catch((error) => {
				setData({ results: null, loading: false, error });
			});
	});

	if (data.error) return;
	if (data.loading) return;

	const bookList = data.results.map((book) => (
		<Book key={book.id} book={book} />
	));

	return <main className="home">{bookList}</main>;
};

export default Home;
