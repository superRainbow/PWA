import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './modal';
import checkUserAgent from '../utils/checkUserAgent';
import useLocalStorage from '../utils/useLocalStorage';

const PopContent = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-weight: bolder;
	}
`;

const useAddToHomescreenPrompt = (props) => {
	// isPWA：只能檢查是否是在 PWA 的 APP 模式下，無法在網頁上判斷是否安裝了 PWA
	const isPWA = window.matchMedia('(display-mode: standalone)').matches;
	// 確認 localStorage 是否有 isInstalled 欄位
	const [isInstalled, setInstalled] = useLocalStorage('isInstalled');
	const { isIOS, isSafari } = checkUserAgent();
	const [deferredPrompt, setPrompt] = useState(null);
	const { index } = props;
	const isOpen = index === 0;

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
		props.onChange(1);
	};

	const promptToInstall = () => {
		console.log('deferredPrompt', deferredPrompt);
		if (deferredPrompt) {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				console.log(choiceResult.outcome);
				if (choiceResult.outcome === 'dismissed') {
					console.log('使用者取消安裝');
				} else {
					console.log('使用者安裝');
					setInstalled(true);
				}
				cloeModal();
				setPrompt(null);
			});
		}
	};

	return (
		/* beforeinstallprompt 在 ios 與 Safari 上不支援 (https://caniuse.com/mdn-api_beforeinstallpromptevent) */
		<Modal
			isShow={!isInstalled && !(isIOS || isSafari || isPWA) && isOpen}
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

useAddToHomescreenPrompt.propTypes = {
	index: PropTypes.number,
	onChange: PropTypes.func,
};

useAddToHomescreenPrompt.defaultProps = {
	index: 0,
	onChange: {},
};

export default useAddToHomescreenPrompt;
