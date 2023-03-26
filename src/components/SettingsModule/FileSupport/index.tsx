import React, { useRef, useState } from 'react';
import json from '../../../utils/crossword.json';
import download from '../../../assets/download.svg';
import upload from '../../../assets/upload.svg';
import { saveAs } from 'file-saver';

import * as types from '../../../types';

type Props = {
    valueGrid: types.valueGrid;
    name: string;
    onLoad: (
        width: number,
        height: number,
        valueGrid: types.valueGrid,
        newName: string
    ) => void;
};

const FileSupport = (props: Props) => {
    const fileInput = useRef<HTMLInputElement>(null);

    async function onExport() {
        const json = JSON.stringify({
            name: props.name,
            height: props.valueGrid[0].length,
            width: props.valueGrid.length,
            grid: props.valueGrid,
        });

        let fileToSave = new Blob([json], {
            type: 'application/json',
        });
        await saveAs(fileToSave, `${props.name}.json`);
    }

    function onChange(event: any) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event: any) {
        var data = JSON.parse(event.target.result);
        props.onLoad(data.width, data.height, data.grid, data.name);
    }

    return (
        <div className='flex gap-[5px]'>
            <button
                onClick={onExport}
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                <span>EXP</span>
                <img
                    src={download}
                    alt='download'
                />
            </button>
            <button
                onClick={() => fileInput.current?.click()}
                className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                <span>LOAD</span>
                <img
                    src={upload}
                    alt='upload'
                />
            </button>
            <div className='hidden'>
                <input
                    id='inputFile'
                    type='file'
                    size={1}
                    ref={fileInput}
                    accept='application/json'
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FileSupport;
