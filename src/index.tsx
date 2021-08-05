import ReactDOM from "react-dom";
import GuessList from "./state/GuessList";

const App = () => {
	return (
		<GuessList/>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
