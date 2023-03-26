import React, { useState, useEffect } from 'react';
import CrossWordModule from '../components/CrosswordModule';
import SettingsModule from '../components/SettingsModule';
import ActionBar from '../components/SettingsModule/ActionBar';
import * as types from '../types';

type Props = {};
const defaultHeight = 10;
const defaultWidth = 10;

const Builder = (props: Props) => {
    const [height, setHeight] = useState(defaultHeight);
    const [width, setWidth] = useState(defaultWidth);
    const [name, setName] = useState('CrossWord1');
    const [update, setUpdate] = useState(false);
    const [selected, setSelected] = useState<types.coordinate | undefined>(
        undefined
    );
    const [valueGrid, setValueGrid] = useState<types.valueGrid>([[]]);

    useEffect(() => {
        console.log('re render');
        init();
        async function init() {
            let newGrid = [];

            for (let x = 0; x < width; x++) {
                let col = [];

                for (let y = 0; y < height; y++) {
                    const cell = {
                        value: '',
                        x: x,
                        y: y,
                        type: null,
                    };

                    col.push(cell);
                }
                newGrid.push(col);
            }

            setName('Crossword');
            setValueGrid(newGrid);
        }
    }, [update]);

    function setCellValue(x: number, y: number, newCell: types.cell) {
        let newGrid = [...valueGrid];
        newGrid[x][y] = newCell;

        setValueGrid(newGrid);
    }

    function onSetSelected(x: number, y: number) {
        setSelected({ x, y });
    }

    function setCellType(newType: types.definition | null) {
        if (!selected) {
            return;
        }

        let newGrid = [...valueGrid];
        let newCell = { ...newGrid[selected.x][selected.y], type: newType };
        if (newType == null) newCell = { ...newCell, value: '' };

        newGrid[selected.x][selected.y] = newCell;
        setValueGrid(newGrid);
    }

    async function onLoad(
        width: number,
        height: number,
        grid: types.valueGrid,
        newName: string
    ) {
        setValueGrid(grid);
        setWidth(width);
        setHeight(height);
        setName(newName);
    }

    function changeName() {
        const newName = prompt('Enter a new name');
        if (newName) setName(newName);
    }

    return (
        <div className='flex flex-col justify-center items-center gap-[10px]'>
            <span
                onClick={changeName}
                className='cursor-pointer font-bold text-[24px]'>
                {name}
            </span>
            <SettingsModule
                name={name}
                onLoad={onLoad}
                valueGrid={valueGrid}
                setCellType={setCellType}
                height={height}
                width={width}
                setSize={(h: number, w: number) => {
                    setHeight(h);
                    setWidth(w);
                }}
                refresh={() => setUpdate((prev) => !prev)}
            />
            <CrossWordModule
                setSelected={onSetSelected}
                valueGrid={valueGrid}
                setCellValue={setCellValue}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Builder;
