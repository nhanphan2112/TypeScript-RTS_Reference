interface ChildProps {
	color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//Explicit Component Type Annotation
// ChildAsFC will be a React function component
// Child might have properties assigned to it like 'propTypes'
// 'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color , onClick, children}) => {
	return (
		<div>
			{color}
      {children}
			<button onClick={onClick}>Click Me</button>
		</div>
	);
};

// example
ChildAsFC.displayName;
// Child.displayName; will show error because you did not define Chile as a React function component
