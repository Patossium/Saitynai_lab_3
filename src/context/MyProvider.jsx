import { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
	const [token, setToken] = useState({});
	const [credentials, setCredentials] = useState({ userName: '', role: '' });

	const logout = () => setToken('');

	return (
		<MyContext.Provider
			value={{ token, setToken, credentials, setCredentials, logout }}
		>
			{children}
		</MyContext.Provider>
	);
};

export default MyProvider;
