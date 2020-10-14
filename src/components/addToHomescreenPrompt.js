import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './modal';
import checkUserAgent from '../utils/checkUserAgent';

const PopContent = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-weight: bolder;
	}
`;

const useAddToHomescreenPrompt = () => {
	// isInstalled：只能檢查是否是在 PWA 的 APP 模式下，無法在網頁上判斷是否安裝了 PWA
	const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
	const { isIOS, isSafari } = checkUserAgent();
	const [deferredPrompt, setPrompt] = useState(null);
	const [isOpen, setOpen] = useState(true);

	useEffect(() => {
		const ready = (e) => {
			console.log('安裝視窗跳出來前 阻止它!!');
			e.preventDefault();
			setPrompt(e);
			return false;
		};
		window.addEventListener('beforeinstallprompt', ready);
		return () => {
			window.removeEventListener('beforeinstallprompt', ready);
		};
	}, []);

	const cloeModal = () => {
		setOpen(false);
	};

	const promptToInstall = () => {
		console.log('deferredPrompt', deferredPrompt);
		if (deferredPrompt !== undefined) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				console.log(choiceResult.outcome);
				if (choiceResult.outcome === 'dismissed') {
					console.log('使用者取消安裝');
				} else {
					console.log('使用者安裝');
					cloeModal();
				}
				setPrompt(null);
			});
		}
	};

	return (
		/* beforeinstallprompt 在 ios 與 Safari 上不支援 (https://caniuse.com/mdn-api_beforeinstallpromptevent) */
		<Modal
			isShow={!(isIOS || isSafari || isInstalled) && isOpen}
			isShowClose
			handleClose={cloeModal}
		>
			<PopContent>
				<h2>Install As Application?</h2>
				<button className="add" type="button" onClick={promptToInstall} onKeyUp={promptToInstall}>
					Add
				</button>
			</PopContent>
		</Modal>
	);
};

export default useAddToHomescreenPrompt;
