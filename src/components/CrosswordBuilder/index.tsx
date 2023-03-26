import React from 'react';
import * as types from '../../types';
import Column from './Column';

type Props = {
    valueGrid: types.valueGrid;
    height: number;
    width: number;
    setCellValue: (x: number, y: number, newCell: types.cell) => void;
    setSelected: (x: number, y: number) => void;
};

const CrossWordModule = (props: Props) => {
    const { valueGrid, height, width } = props;
    let elmGrid: any[] = [];
    if (valueGrid) {
        valueGrid.map((col: types.colCell, x: number) => {
            elmGrid.push(
                <Column
                    key={`col${x}`}
                    col={col}
                    setSelected={props.setSelected}
                    setCellValue={props.setCellValue}
                />
            );
        });
    }
    return <div className='flex border-black border-[2px]'>{elmGrid}</div>;
};

export default CrossWordModule;
