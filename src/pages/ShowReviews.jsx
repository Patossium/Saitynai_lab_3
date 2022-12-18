import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Review from '../components/Review';
import Button from '../components/Button';

const Home = () => {
	const [data, setData] = useState({
		results: null,
		loading: true,
		error: null,
	});

	const { state } = useLocation();
	const { id } = state.book;

	useEffect(() => {
		fetch(
			`https://jellyfish-app-ynzfh.ondigitalocean.app/api/books/${id}/reviews`,
		)
			.then((response) => response.json())
			.then((data) => setData({ results: data, loading: false, error: null }))
			.catch((error) => {
				setData({ results: null, loading: false, error });
			});
	}, [id]);

	if (data.error) return;
	if (data.loading) return;

	const reviewList = data?.results?.map((review) => (
		<Review key={review.id} review={review} />
	));

	return <main className="reviews"><Button buttonName="Create review" buttonFunction="createReview" book={state.book} />{reviewList}</main>;
};

export default Home;
