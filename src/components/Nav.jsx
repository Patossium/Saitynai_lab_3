import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';

import tinklai from '../assets/tinklai.svg';

const Nav = () => {
	const { token, credentials } = useContext(MyContext);
	const { userName, role } = credentials;

	return (
		<nav>
			<img src={tinklai} alt="Logo" />
			<h1>Welcome {userName}</h1>
			<ul>
				<NavLink
					to="/"
					style={({ isActive }) => {
						return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
					}}
				>
					<li>Home</li>
				</NavLink>

				<NavLink
					to="/create-book"
					style={({ isActive }) => {
						return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
					}}
				>
					<li>Create Book</li>
				</NavLink>

				{/* If we are logged in show logout link. Else show Login link */}
				{token ? (
					<NavLink
						to="/logout"
						style={({ isActive }) => {
							return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
						}}
					>
						<li>Logout</li>
					</NavLink>
				) : (
					<NavLink
						to="/login"
						style={({ isActive }) => {
							return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
						}}
					>
						<li>Login</li>
					</NavLink>
				)}

				{/* If we are not logged in show register form */}
				{!token && (
					<NavLink
						to="/register"
						style={({ isActive }) => {
							return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
						}}
					>
						<li>Register</li>
					</NavLink>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
