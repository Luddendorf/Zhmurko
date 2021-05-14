import React, { useState } from 'react';

function Example() {
   const [jumpCount, setJumpCount] = useState(0);
   const [newChild, updateNewChild] = useState('');
   let [children, updateChildren] = useState(['Sara', 'Roman', 'Denis']);

   return (
   	<div style={{padding: '2rem'}}>
   	<div>
   		<p>You have jumped {jumpCount} times</p>
   		<button onClick={() => setJumpCount(jumpCount + 1)}>Jump one more time</button>
   	</div>
   	<hr />
   	<input onChange={(event) => updateNewChild(event.target.value)}/>
   	<button onClick={() => updateChildren([...children, newChild])}>Add a child</button>
   	<button onClick={() => {updateChildren(children.slice(0, -1))}}>Remove child</button>
   	<ul>
   		{children.map((child, index) => <li key={'child' + index}>{child}</li>)}
   	</ul>
   	</div>
   	);
}

export default Example;