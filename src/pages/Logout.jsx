import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../context/MyContext';

const Logout = () => {
	const { logout } = useContext(MyContext);
	const navigate = useNavigate();

	useEffect(() => {
		logout();
		navigate('/');
	}, []);

	return null;
};

export default Logout;
