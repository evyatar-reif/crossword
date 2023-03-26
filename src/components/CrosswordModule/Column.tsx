import React from 'react';
import Cell from './Cell';
import * as types from '../../types';

type Props = {
    col: types.cell[];
    setCellValue: (x: number, y: number, newCell: types.cell) => void;
    setSelected: (x: number, y: number) => void;
};

const Column = (props: Props) => {
    const { col, setCellValue } = props;

    let elmCol: any[] = col.map((cell: types.cell, y) => (
        <Cell
            key={`cell${cell.x}${cell.y}`}
            cell={cell}
            setSelected={props.setSelected}
            setCellValue={setCellValue}
        />
    ));

    return <div className='flex flex-col'>{elmCol}</div>;
};

export default Column;
