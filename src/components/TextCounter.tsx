import React from 'react';

import { useCounter } from '../hooks/counter';

const TextCounter= () => {
    const { counter } = useCounter();

    return <h1>Valor: {counter}</h1>
}

export default TextCounter;