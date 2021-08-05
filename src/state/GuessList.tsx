import {useState} from 'react';


const GuessList: React.FC = () => {
  const [name, setName] = useState('');

	return (
		<div>
			<h3>Guess List</h3>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <button>Add Guess</button>
		</div>
	);
};

export default GuessList;
