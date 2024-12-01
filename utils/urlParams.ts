export const createUrlSearchParams = (params: Record<string, string | number | boolean>): URLSearchParams => {
	const urlParams = new URLSearchParams();

	for (const [key, value] of Object.entries(params)) {
		urlParams.append(key, String(value));
	}

	return urlParams;
};
