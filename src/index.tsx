import ReactDOM from "react-dom";
import GuessList from "./state/GuessList";
import UserSearch from "./state/UserSearch";

const App = () => {
	return (
		// <GuessList/>
    <UserSearch/>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
