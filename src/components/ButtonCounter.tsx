import React from 'react';

import { useCounter } from '../hooks/counter';

const ButtonCounter = () => {

    const {counter, setCounter} = useCounter();

    return <button onClick={() => setCounter(counter + 1)}>Clique</button>
}

export default ButtonCounter;