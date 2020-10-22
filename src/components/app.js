import React, { useState } from 'react';
import { Online, Offline } from 'react-detect-offline';
import styled, { keyframes } from 'styled-components';
import UseAddToHomescreenPrompt from './addToHomescreenPrompt';
import AddPushPrompt from './addPushPrompt';
import rainbow from '../assets/images/rainbow.png';

const App = styled.div`
	text-align: center;
`;

const AppHeader = styled.div`
	align-items: center;
	background-color: #4fc6e1;
	color: white;
	display: flex;
	flex-direction: column;
	font-size: calc(10px + 2vmin);
	justify-content: center;
	min-height: 100vh;
`;

const AppLink = styled.a.attrs(({ url }) => ({
	href: url,
	target: '_blank',
	rel: 'noopener noreferrer',
}))`
	color: #61dafb;
`;

const ShakeSlow = keyframes`
	2% {
		transform: translate(0, -7px) rotate(2.5deg);
	}

	4% {
		transform: translate(6px, 3px) rotate(-0.5deg);
	}

	6% {
		transform: translate(6px, -5px) rotate(0.5deg);
	}

	8% {
		transform: translate(3px, 3px) rotate(-1.5deg);
	}

	10% {
		transform: translate(-4px, 5px) rotate(1.5deg);
	}

	12% {
		transform: translate(2px, 7px) rotate(2.5deg);
	}

	14% {
		transform: translate(0, 6px) rotate(-1.5deg);
	}

	16% {
		transform: translate(-9px, 5px) rotate(-2.5deg);
	}

	18% {
		transform: translate(4px, -8px) rotate(-0.5deg);
	}

	20% {
		transform: translate(2px, 9px) rotate(3.5deg);
	}

	22% {
		transform: translate(-5px, 1px) rotate(-2.5deg);
	}

	24% {
		transform: translate(-2px, -8px) rotate(0.5deg);
	}

	26% {
		transform: translate(4px, -2px) rotate(-0.5deg);
	}

	28% {
		transform: translate(-4px, 9px) rotate(1.5deg);
	}

	30% {
		transform: translate(-4px, -3px) rotate(3.5deg);
	}

	32% {
		transform: translate(-2px, 6px) rotate(-2.5deg);
	}

	34% {
		transform: translate(4px, -4px) rotate(-0.5deg);
	}

	36% {
		transform: translate(-1px, 6px) rotate(0.5deg);
	}

	38% {
		transform: translate(8px, 8px) rotate(1.5deg);
	}

	40% {
		transform: translate(9px, -2px) rotate(3.5deg);
	}

	42% {
		transform: translate(-2px, -9px) rotate(0.5deg);
	}

	44% {
		transform: translate(-1px, 10px) rotate(-1.5deg);
	}

	46% {
		transform: translate(-1px, 1px) rotate(-0.5deg);
	}

	48% {
		transform: translate(6px, -8px) rotate(2.5deg);
	}

	50% {
		transform: translate(-1px, -7px) rotate(-1.5deg);
	}

	52% {
		transform: translate(0, 1px) rotate(-1.5deg);
	}

	54% {
		transform: translate(1px, -8px) rotate(-2.5deg);
	}

	56% {
		transform: translate(-4px, 2px) rotate(1.5deg);
	}

	58% {
		transform: translate(10px, -7px) rotate(-2.5deg);
	}

	60% {
		transform: translate(-2px, -4px) rotate(-1.5deg);
	}

	62% {
		transform: translate(-3px, 3px) rotate(1.5deg);
	}

	64% {
		transform: translate(8px, 2px) rotate(-1.5deg);
	}

	66% {
		transform: translate(-4px, -1px) rotate(1.5deg);
	}

	68% {
		transform: translate(-1px, -2px) rotate(-1.5deg);
	}

	70% {
		transform: translate(8px, 8px) rotate(0.5deg);
	}

	72% {
		transform: translate(-8px, -3px) rotate(-2.5deg);
	}

	74% {
		transform: translate(6px, 5px) rotate(0.5deg);
	}

	76% {
		transform: translate(4px, -9px) rotate(1.5deg);
	}

	78% {
		transform: translate(-2px, -6px) rotate(3.5deg);
	}

	80% {
		transform: translate(1px, 0) rotate(1.5deg);
	}

	82% {
		transform: translate(-4px, 6px) rotate(-2.5deg);
	}

	84% {
		transform: translate(-4px, -3px) rotate(1.5deg);
	}

	86% {
		transform: translate(7px, 10px) rotate(2.5deg);
	}

	88% {
		transform: translate(-3px, -2px) rotate(1.5deg);
	}

	90% {
		transform: translate(8px, -3px) rotate(3.5deg);
	}

	92% {
		transform: translate(0, 3px) rotate(1.5deg);
	}

	94% {
		transform: translate(5px, -5px) rotate(-2.5deg);
	}

	96% {
		transform: translate(7px, -2px) rotate(-0.5deg);
	}

	98% {
		transform: translate(-6px, 0) rotate(3.5deg);
	}

	0%,100% {
		transform: translate(0, 0) rotate(0);
	}
`;

const RainbowIcon = styled.img.attrs(({ url, text }) => ({
	src: url,
	alt: text,
}))`
	height: 40vmin;
	margin-bottom: 50px;
	pointer-events: none;
	animation: ${ShakeSlow} infinite 5s ease-in-out;
`;

export default () => {
	const [index, setIndex] = useState(0);
	const handleIndex = (newValue) => {
		setIndex(newValue);
	};
	return (
		<App>
			<UseAddToHomescreenPrompt index={index} onChange={handleIndex} />
			<AddPushPrompt index={index} onChange={handleIndex} />
			<AppHeader>
				<RainbowIcon url={rainbow} text="rainbow" />
				<Online>有網路時會顯示的內容</Online>
				<Offline>離線時會顯示的內容</Offline>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<AppLink url="https://reactjs.org">Learn React</AppLink>
			</AppHeader>
		</App>
	);
};
