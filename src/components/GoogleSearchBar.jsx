import { useState } from "react";
// import { IoSearch } from "react-icons/io5";

const GoogleSearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		window.open(`https://google.com/search?q=${searchQuery}`, "_blank");
	};

	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<form
			className='searchbar'
			onSubmit={handleSubmit}
		>
			<div className='bar-container'>
				<input
					type='text'
					name='query'
					id='query'
					onChange={handleChange}
					placeholder='Type your query here'
				/>
				<button>Search!</button>
			</div>
		</form>
	);
};

export default GoogleSearchBar;
