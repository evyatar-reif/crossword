import React from 'react';
import Cell from './Cell';
import * as types from '../../types';

type Props = {
    col: types.cell[];
    setCellMatch: (x: number, y: number, isMatch: boolean) => void;
};

const Column = (props: Props) => {
    const { col, setCellMatch } = props;

    let elmCol: any[] = col.map((cell: types.cell, y) => (
        <Cell
            key={`cell${cell.x}${cell.y}`}
            cell={cell}
            setCellMatch={setCellMatch}
        />
    ));

    return <div className='flex flex-col'>{elmCol}</div>;
};

export default Column;
