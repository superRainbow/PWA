module.exports = {
	runtimeCaching: [
		{
			// runtime 的時候要記得把 https://challenge.thef2e.com/* 的所有東西都快取下來。
			urlPattern: /^https:\/\/challenge\.thef2e\.com\/.*/,
			// handler 則是說有網路的時候要使用線上的還是離線的。可以選擇 networkFirst、fastest、cacheFirst ......等等
			handler: 'networkFirst',
		},
	],
};
