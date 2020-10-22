import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './modal';

const PopContent = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-weight: bolder;
	}
`;

const addPushPrompt = (props) => {
	const { index } = props;
	const isGranted = Notification && Notification.permission === 'granted';
	const isShow = Notification && 'serviceWorker' in navigator && index === 1 && !isGranted;

	const cloeModal = () => {
		props.onChange(2);
	};

	const displayNotification = () => {
		return new Notification('訂閱成功！！！');
	};

	const addPush = () => {
		console.log('isGranted', isGranted);
		Notification.requestPermission((status) => {
			console.log('User Choice', status);
			// 點選「允許」：granted
			// 點選「封鎖」：denied
			if (status !== 'granted') {
				console.log('推播允許被拒絕了!');
			} else {
				displayNotification();
			}
			cloeModal();
		});
	};

	return (
		/* beforeinstallprompt 在 ios 與 Safari 上不支援 (https://caniuse.com/mdn-api_beforeinstallpromptevent) */
		<Modal isShow={isShow} isShowClose handleClose={cloeModal}>
			<PopContent>
				<h2>接收推播嗎？</h2>
				<button className="add" type="button" onClick={addPush} onKeyUp={addPush}>
					Add
				</button>
			</PopContent>
		</Modal>
	);
};

addPushPrompt.propTypes = {
	index: PropTypes.number,
	onChange: PropTypes.func,
};

addPushPrompt.defaultProps = {
	index: 0,
	onChange: {},
};

export default addPushPrompt;
