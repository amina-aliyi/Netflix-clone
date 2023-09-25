import React,{useState, useEffect} from 'react'
import "./Nav.css"
function Nav() {
     const [show, handleShow] = useState(false);
			
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleShow]);
  return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				className="nav__logo"
				src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
				alt="Netflix Logo"
			/>
			<img
				className="nav__avatar"
				src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
				alt="Avatar logo"
			/>
		</div>
		//   <h1 className="row">Netflix logos here</h1>
	);
}

export default Nav