import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
	position: absolute;
	top: 20%;
	left: 50%;
	display: grid;
	width: clamp(300px, 50vw, 800px);
	min-height: 20px;
	padding: 20px;
	border-radius: 10px;
	background: #fff;
	transform: translate(-50%, -50%);
`;
const CloseButton = styled.svg`
	width: 20px;
	height: 20px;
	position: absolute;
	right: 18px;
	top: 18px;
	cursor: pointer;
`;

const modalVariant = {
	initial: { opacity: 0 },
	isOpen: { opacity: 1 },
	exit: { opacity: 0 },
};
const containerVariant = {
	initial: { top: '-50%', transition: { type: 'spring' } },
	isOpen: { top: '20%' },
	exit: { top: '-50%' },
};
const Modal = ({ handleClose, children, isShow, isShowClose }) => {
	return (
		<AnimatePresence>
			{isShow && (
				<Overlay initial="initial" animate="isOpen" exit="exit" variants={modalVariant}>
					<ModalContainer variants={containerVariant}>
						{isShowClose && (
							<CloseButton
								isShow={isShowClose}
								onClick={handleClose}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20.39 20.39"
							>
								<title>close</title>
								<line
									x1="19.39"
									y1="19.39"
									x2="1"
									y2="1"
									fill="none"
									stroke="#5c3aff"
									strokeLinecap="round"
									strokeMiterlimit="10"
									strokeWidth="2"
								/>
								<line
									x1="1"
									y1="19.39"
									x2="19.39"
									y2="1"
									fill="none"
									stroke="#5c3aff"
									strokeLinecap="round"
									strokeMiterlimit="10"
									strokeWidth="2"
								/>
							</CloseButton>
						)}
						{children}
					</ModalContainer>
				</Overlay>
			)}
		</AnimatePresence>
	);
};

// 2. Modal 設定 propTypes
Modal.propTypes = {
	isShowClose: PropTypes.bool,
	isShow: PropTypes.bool.isRequired,
	children: PropTypes.element.isRequired,
	handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
	isShowClose: false,
};

export default Modal;
