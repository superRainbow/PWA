import React from 'react';
import rainbow from '../assets/images/rainbow.png';

const notificationBtn = () => {
	const isShow = 'Notification' in window && Notification.permission === 'granted';
	const push = () => {
		if ('serviceWorker' in navigator) {
			const options = {
				body: 'Service Worker 推播測試',
				icon: rainbow,
			};
			navigator.serviceWorker.ready.then((sw) => {
				sw.showNotification('Rainbow PWA', options);
			});
		}
	};
	return (
		isShow && (
			<button className="push" type="button" onClick={push} onKeyUp={push}>
				透過 Service Worker 發通知
			</button>
		)
	);
};

export default notificationBtn;
