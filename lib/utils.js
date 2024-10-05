export function formatDate(dateTime, relativeTime = false) {
	const initialDate = new Date(dateTime);

	const formattedDate = initialDate.toLocaleString("en-us", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	if (!relativeTime) {
		return formattedDate;
	}

	const today = new Date();

	const year = today.getFullYear() - initialDate.getFullYear();
	const month = today.getMonth() - initialDate.getMonth();
	const day = today.getDate() - initialDate.getDate();

	let relativeDate = "";

	if (year > 0) {
		relativeDate = `${year} ${year > 1 ? "years" : "year"} ago`;
	} else if (month > 0) {
		relativeDate = `${month} ${month > 1 ? "months" : "month"} ago`;
	} else if (day > 0) {
		relativeDate = `${day} ${day > 1 ? "days" : "day"} ago`;
	} else {
		relativeDate = "Today";
	}

	return relativeDate;
}

export function formatSize(size) {
	if (size < 1000) {
		return `${size} KB`;
	}
	return `${(size / 1000).toFixed(2)} MB`;
}
