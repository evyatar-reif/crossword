import React, { useState } from 'react';
import * as types from '../../types';
import arrow from '../../assets/whiteArrow.svg';

type Props = {
    cell: types.cell;
    setCellMatch: (x: number, y: number, isMatch: boolean) => void;
};

const Cell = (props: Props) => {
    const [entry, setEntry] = useState('');
    const { cell } = props;
    function onChange(v: string) {
        const isMatch = cell.value == v;
        setEntry(v);
        props.setCellMatch(cell.x, cell.y, isMatch);
    }

    let className =
        'flex justify-center text-center border w-[80px] h-[80px] resize-none focus:border-black focus:border-[2px] outline-none text-center capitalize ';
    if (cell.type) className += 'bg-black overflow-auto text-white text-xs';

    let transform = 'transform fill-white w-[16px] h-[16px] ';

    if (cell.type?.direction == 'up') transform += '-rotate-90';
    else if (cell.type?.direction == 'down') transform += 'rotate-90';
    else if (cell.type?.direction == 'left') transform += 'rotate-180';

    return (
        <div className='relative'>
            {cell.type ? (
                <div className='relative'>
                    <textarea
                        disabled={true}
                        className={className}
                        value={cell.value}
                        maxLength={cell.type ? undefined : 1}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <div className='flex absolute bottom-[2px] transform left-[50%] translate-x-[-50%] items-center select-none'>
                        <span className='text-white'>{cell.type.length} </span>
                        <img
                            className={transform}
                            src={arrow}
                            alt='dir'
                        />
                    </div>
                </div>
            ) : (
                <textarea
                    className={className + 'text-[26px]'}
                    value={entry}
                    maxLength={cell.type ? undefined : 1}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
};

export default Cell;
