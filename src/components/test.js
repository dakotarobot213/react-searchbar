const formatSearchQuery = (searchString) => {
	return searchString.toLowerCase().trim().replace(/\s+/g, "+");
};

console.log(formatSearchQuery("Hello world!"));
