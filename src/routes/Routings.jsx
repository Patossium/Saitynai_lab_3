import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import CreateBook from '../pages/CreateBook';
import EditBook from '../pages/EditBook';
import DeleteBook from '../pages/DeleteBook';
import ShowReviews from '../pages/ShowReviews';
import CreateReview from '../pages/CreateReview';
import EditReview from '../pages/EditReview';
import DeleteReview from '../pages/DeleteReview';
import Footer from '../components/Footer';
import NotFound404 from '../pages/NotFound404';

const Routings = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/logout" element={<Logout />} />
			<Route path="/create-book" element={<CreateBook />} />
			<Route path="/edit-book" element={<EditBook />} />
			<Route path="/delete-book" element={<DeleteBook />} />
			<Route path="/reviews" element={<ShowReviews />} />
			<Route path="/create-review" element={<CreateReview />} />
			<Route path="/edit-review" element={<EditReview />} />
			<Route path="/delete-review" element={<DeleteReview />} />
			<Route path="*" element={<NotFound404 />} />
		</Routes>
		<Footer />
	</Router>
);

export default Routings;
