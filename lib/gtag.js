export const pageview = (url) => {
	window.gtag("config", "G-M592GMXCBQ", {
		page_path: url,
	});
};

export const event = ({ action, category, label, value }) => {
	window.gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
