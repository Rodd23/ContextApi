import React from 'react';

import { useCounter } from '../hooks/counter';

const ButtonCounter = () => {

    const {counter, setCounter} = useCounter();

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Clique para adicionar</button>
            <button onClick={() => setCounter(counter - 1)}>Clique para decrementar</button>
        </>
    )
}

export default ButtonCounter;