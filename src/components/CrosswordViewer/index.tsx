import React from 'react';
import * as types from '../../types';
import Column from './Column';

type Props = {
    valueGrid: types.valueGrid;
    setCellMatch: (x: number, y: number, isMatch: boolean) => void;
};

const CrossWordViewer = (props: Props) => {
    const { valueGrid } = props;
    let elmGrid: any[] = [];
    if (valueGrid) {
        valueGrid.map((col: types.colCell, x: number) => {
            elmGrid.push(
                <Column
                    key={`col${x}`}
                    col={col}
                    setCellMatch={props.setCellMatch}
                />
            );
        });
    }
    return <div className='flex border-black border-[2px]'>{elmGrid}</div>;
};

export default CrossWordViewer;
