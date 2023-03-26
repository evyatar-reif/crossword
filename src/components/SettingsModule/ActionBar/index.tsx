import React from 'react';
import arrow from '../../../assets/arrow.svg';
import ex from '../../../assets/ex.svg';

import * as types from '../../../types';

type Props = {
    setCellType: (type: types.definition | null) => void;
};

const ActionBar = (props: Props) => {
    function onClick(dir: 'down' | 'up' | 'left' | 'right') {
        const arrSize = prompt('How many words is the answer?');
        if (!arrSize || !parseInt(arrSize)) return;

        let length = [];
        for (let i = 0; i < parseInt(arrSize); i++) {
            let wordLength = null;
            while (!wordLength || !parseInt(wordLength)) {
                wordLength = prompt(`What is the length of ${i + 1} word?`);
            }

            length.push(parseInt(wordLength));
        }

        props.setCellType({ type: 'str', direction: dir, length: length });
    }

    return (
        <div className='flex gap-[5px]'>
            <button
                onClick={() => onClick('down')}
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                <span>ANS</span>
                <img
                    className='transform rotate-90'
                    src={arrow}
                    alt='arrow'
                />
            </button>
            <button
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'
                onClick={() => onClick('up')}>
                <span>ANS</span>
                <img
                    className='transform -rotate-90'
                    src={arrow}
                    alt='arrow'
                />
            </button>
            <button
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'
                onClick={() => onClick('left')}>
                <span>ANS</span>
                <img
                    className='transform rotate-180'
                    src={arrow}
                    alt='arrow'
                />
            </button>
            <button
                onClick={() => onClick('right')}
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                <span>ANS</span>
                <img
                    src={arrow}
                    alt='arrow'
                />
            </button>
            <button
                onClick={() => props.setCellType(null)}
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                <span>CLEAR</span>
                <img
                    src={ex}
                    alt='arrow'
                />
            </button>
        </div>
    );
};

export default ActionBar;
