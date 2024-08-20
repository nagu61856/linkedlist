// src/components/LinkedListComponent.js

import React, { useState } from 'react';
import LinkedList from '../data/LinkedList';

const generateAlphabetValue = (index) => {
    // Generate an alphabetical string based on index
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let value = '';
    do {
        value = alphabet[index % 26] + value;
        index = Math.floor(index / 26) - 1;
    } while (index >= 0);
    return value;
};

const LinkedListComponent = () => {
    const [list] = useState(new LinkedList());
    const [listValues, setListValues] = useState([]);

    const updateListValues = () => {
        const values = [];
        let current = list.head;
        let index = 0;
        while (current) {
            values.push({ index, value: current.value });
            current = current.next;
            index++;
        }
        setListValues(values);
    };

    const handlePrepend = () => {
        const newIndex = listValues.length;
        list.prepend(generateAlphabetValue(newIndex));
        updateListValues();
    };

    const handlePop = () => {
        list.pop();
        updateListValues();
    };

    const handleRemoveAt = (pos) => {
        list.removeAt(pos);
        updateListValues();
    };

    const handleInsertAt = (pos) => {
        const newIndex = pos < 0 ? listValues.length : pos;
        list.insertAt(newIndex, generateAlphabetValue(newIndex));
        updateListValues();
    };

    return (
        <div>
            <h1>Linked List</h1>
            <button onClick={handlePrepend}>Prepend Node</button>
            <button onClick={handlePop}>Pop Node</button>
            <button onClick={() => handleInsertAt(2)}>Insert At Position 2</button>
            <button onClick={() => handleRemoveAt(1)}>Remove At Position 1</button>
            <ul>
                {listValues.map(({ index, value }) => (
                    <li key={index}>Index: {index}, Value: {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default LinkedListComponent;
