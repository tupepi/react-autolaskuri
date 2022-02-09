import React, { useState } from 'react';
const App = () => {
    const [arvo, setArvo] = useState(0);
    const kasvata = () => {
        setArvo(arvo + 1);
    };
    return (
        <div className='App'>
            <div>{arvo}</div>
            <button onClick={kasvata}>Kasvata</button>
        </div>
    );
};

export default App;
