import React, { useState } from 'react';

type Props = {};

const WordCounter = (props: Props) => {
    const [entry, setEntry] = useState('');

    const lengthArray: number[] = [];
    entry.split(' ').map((w) => lengthArray.push(w.length));

    return (
        <div className='w-fit flex-col flex'>
            <input
                className='outline-none'
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            <span>Length: {lengthArray}</span>
        </div>
    );
};

export default WordCounter;
