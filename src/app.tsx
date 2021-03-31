import './styles.css';
import IMAGE from './react-icon.png';
import LOGO from './svg-icon.svg';

export const App = () => {
	return <>
		<h1>React Typescript Webpack Starter Template</h1>
		<img src={IMAGE} alt="React Logo" width="300" height="200"/>
		<img src={LOGO} alt="SVG Icon" width="300" />
	</>
}