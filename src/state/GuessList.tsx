import {useState} from 'react';


const GuessList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () =>{
    setName('');
    setGuests([...guests, name]);
  }

	return (
		<div>
			<h3>Guest List</h3>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={onClick}>Add Guess</button>
		</div>
	);
};

export default GuessList;
