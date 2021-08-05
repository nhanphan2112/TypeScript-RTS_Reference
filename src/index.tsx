import ReactDOM from "react-dom";
import GuessList from "./state/GuessList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
	return (
		// <GuessList/>
		// <UserSearch/>
		<EventComponent />
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
