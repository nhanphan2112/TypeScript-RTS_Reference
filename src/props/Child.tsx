interface ChildProps {
	color: string;
}

export const Child = ({ color }: ChildProps) => {
	return <div>{color}</div>;
};

//Explicit Component Type Annotation
// ChildAsFC will be a React function component
// Child might have properties assigned to it like 'propTypes'
// 'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color }) => {
	return <div>{color}</div>;
};

// example
ChildAsFC.displayName;
// Child.displayName; will show error because you did not define Chile as a React function component
