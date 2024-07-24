// Home page

import React, { useEffect } from "react";
import "../App.css"; 

const Home = () => {
  useEffect(() => {
	// Add the class to the body element
	document.body.classList.add('index-background');

	// Cleanup function to remove the class when the component unmounts
	return () => {
	  document.body.classList.remove('index-background');
	};
  }, []);
return (
	<div>
	  {/* Your Home component content */}
	</div>
  );
};



export default Home;