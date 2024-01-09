import { useState } from "react";

const GoogleSearchBar = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		window.open(`https://google.com/search?q=${searchQuery}`, "_blank");
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value.trim().replace(/\s+/g, "+"));
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="search"
					id="search"
					onChange={handleSearchChange}
					placeholder="Type your search term here"
				/>
				<button>Search!</button>
			</form>
		</div>
	);
};

export default GoogleSearchBar;
