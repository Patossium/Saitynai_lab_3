import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MyContext from '../context/MyContext';

import tinklai from '../assets/tinklai.svg';

const Nav = () => {
	const { token, credentials } = useContext(MyContext);
	const { userName, role } = credentials;

	const [displayHamburger, setDisplayHamburger] = useState(false);

	const toggleHamburgerMenu = () => {
		setDisplayHamburger(!displayHamburger);
	}

	return (
		<>
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

					<div className='menu' onClick={toggleHamburgerMenu}><i className="fa fa-bars hamburger-icon"></i></div>
				</ul>
			</nav>
			
			<div className={`hamburgir-menu ${displayHamburger ? "active-hamburger" : ""}`} >
				<div className="link">
					<NavLink onClick={toggleHamburgerMenu}
						to="/"
						style={({ isActive }) => {
							return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
						}}
					>
						Home
					</NavLink>
				</div>

				<div className="link">
					<NavLink onClick={toggleHamburgerMenu}
						to="/create-book"
						style={({ isActive }) => {
							return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
						}}
					>
						Create Book
					</NavLink>
				</div>

				{/* If we are logged in show logout link. Else show Login link */}
				{token ? (
					<div className="link">
						<NavLink onClick={toggleHamburgerMenu}
							to="/logout"
							style={({ isActive }) => {
								return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
							}}
						>
							Logout
						</NavLink>
					</div>
				) : (
					<div className="link">
						<NavLink onClick={toggleHamburgerMenu}
							to="/login"
							style={({ isActive }) => {
								return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
							}}
						>
							Login
						</NavLink>
					</div>
				)}

				{/* If we are not logged in show register form */}
				{!token && (
					<div className="link">
						<NavLink onClick={toggleHamburgerMenu}
							to="/register"
							style={({ isActive }) => {
								return { color: isActive && '#f7c1d8', fontWeight: 'bold' };
							}}
						>
							Register
						</NavLink>
					</div>
				)}
			</div>
		</>
	);
};

export default Nav;
