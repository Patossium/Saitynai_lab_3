import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../context/MyContext';

const Button = ({ buttonName, buttonFunction, book, review }) => {
	const navigate = useNavigate();

	const { token } = useContext(MyContext);

	const buttonAction = () => {
		if (buttonFunction === 'editBook')
			navigate('/edit-book', { state: { book } });

		if (buttonFunction === 'deleteBook')
			navigate('/delete-book', { state: { book } });

		if (buttonFunction === 'showReviews')
			navigate('/reviews', { state: { book } });

		if (buttonFunction === 'editReview')
		 	navigate('/edit-review', {state:{review}});

		if (buttonFunction === 'deleteReview')
		 	navigate('/delete-review', {state:{review}});
		
		if(buttonFunction === 'createReview')
			navigate('/create-review', {state:{book} });
	};
	return (
		<button disabled={token === ''} onClick={buttonAction}>
			{buttonName}
		</button>
	);
};

export default Button;
