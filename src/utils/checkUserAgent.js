const checkUserAgent = () => {
	const uaString = window.navigator.userAgent.toLowerCase();
	let isChrome = /chrome/.test(uaString);
	const isExplorer = /msie/.test(uaString);
	const isFirefox = /firefox/.test(uaString);
	let isSafari = /safari/.test(uaString);
	const isOpera = /opr/.test(uaString);
	const isEdgeDesktop = /edge/.test(uaString);
	const isEdgeiOS = /edgios/.test(uaString);
	const isEdgeAndroid = /edga/.test(uaString);

	const isIOS = /ipad|iphone|ipod/.test(uaString);
	const isMobile = /mobile/.test(uaString);

	if (isChrome && isSafari) {
		isSafari = false;
	}
	if (isChrome && (isEdgeDesktop || isEdgeiOS || isEdgeAndroid)) {
		isChrome = false;
	}
	if (isSafari && (isEdgeDesktop || isEdgeiOS || isEdgeAndroid)) {
		isSafari = false;
	}
	if (isChrome && isOpera) {
		isChrome = false;
	}

	return {
		isChrome,
		isExplorer,
		isFirefox,
		isSafari,
		isOpera,
		isEdgeDesktop,
		isEdgeiOS,
		isEdgeAndroid,
		isIOS,
		isMobile,
	};
};

export default checkUserAgent;
