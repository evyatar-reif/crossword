import React, { useState, useEffect } from 'react';
import CrossWordViewer from '../components/CrosswordViewer';
import * as types from '../types';
import ViewModule from '../components/ViewModule';

type Props = {};

const Viewer = (props: Props) => {
    const [file, setFile] = useState<types.file>(null);
    const [matchGrid, setMatchGrid] = useState([[]]);
    const [isWin, setIsWin] = useState(false);

    async function onLoad(file: types.file) {
        setFile(file);
        if (file) {
            let newMatchGrid: any[] = Array();
            for (let x = 0; x < file.grid.length; x++) {
                let newMatchCol: any = [];
                for (let y = 0; y < file.grid[0].length; y++) {
                    newMatchCol.push(file.grid[x][y].type ? true : false);
                }
                newMatchGrid.push(newMatchCol);
            }
            setMatchGrid(newMatchGrid);
        }
    }
    useEffect(() => {
        setIsWin(checkWin());

        function checkWin() {
            if (!matchGrid) return false;
            for (let x = 0; x < matchGrid.length; x++) {
                for (let y = 0; y < matchGrid[0].length; y++) {
                    if (!matchGrid[x][y]) return false;
                }
            }
            return true;
        }
    }, [matchGrid]);

    function setCellMatch(x: number, y: number, isMatch: boolean) {
        let newMatchGrid = [...matchGrid];
        newMatchGrid[x][y] = isMatch;
        setMatchGrid(newMatchGrid);
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <ViewModule
                isWin={isWin}
                onLoad={onLoad}
                name={file ? file.name : ''}
            />
            {file ? (
                <CrossWordViewer
                    setCellMatch={setCellMatch}
                    valueGrid={file.grid}
                />
            ) : (
                <span>Please upload a crossword</span>
            )}
        </div>
    );
};

export default Viewer;
