export const isMobile = () => {
	return (
		[
			"iPad Simulator",
			"iPhone Simulator",
			"iPod Simulator",
			"iPad",
			"iPhone",
			"iPod",
		].includes(navigator.platform) ||
		(navigator.userAgent.includes("Mac") && "ontouchend" in document) ||
		navigator.userAgent.indexOf("android") > -1
	);
};
