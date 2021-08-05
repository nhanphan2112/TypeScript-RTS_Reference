import ReactDOM from "react-dom";
import GuessList from "./state/GuessList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./classes/UserSearch";
import EventComponent from "./events/EventComponent";


//Below are users objec array use to test for class UserSearch component
const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 25 },
	{ name: "Michael", age: 27 },
];

const App = () => {
	return (
		// <GuessList/>
		<UserSearch users={users} />
		// <EventComponent />
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
