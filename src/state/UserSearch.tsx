import { useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 20 },
	{ name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
	const [name, SetName] = useState<string>();
	const [user, SetUser] = useState<{ name: string; age: number } | undefined>();

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		// console.log(foundUser);
		SetUser(foundUser);
	};

	return (
		<div>
			User Search
			<input value={name} onChange={(e) => SetName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			<div>{user && user.name}</div>
			<div>{user && user.age}</div>
		</div>
	);
};

export default UserSearch;
