import React from 'react';
import XYSettings from './XYSettings';
import ActionBar from './ActionBar';
import WordCounter from './WordCounter';
import FileSupport from './FileSupport';
import * as types from '../../types';
import { Link } from 'react-router-dom';
import home from '../../assets/home.svg';

type Props = {
    height: number;
    width: number;
    name: string;
    setSize: (height: number, width: number) => void;
    refresh: () => void;
    setCellType: (type: types.definition | null) => void;
    valueGrid: types.valueGrid;
    onLoad: (
        width: number,
        height: number,
        valueGrid: types.valueGrid,
        newName: string
    ) => void;
};

const index = (props: Props) => {
    return (
        <div className='bg-blue-200 p-[15px] w-[950px] rounded-[15px] flex items-center gap-[15px]'>
            <Link to='/'>
                <button className='flex flex-col justify-center h-[50px] bg-white p-[5px] rounded'>
                    <img
                        src={home}
                        alt='home'
                    />
                </button>
            </Link>
            <XYSettings
                height={props.height}
                width={props.width}
                setSize={props.setSize}
                refresh={props.refresh}
            />
            <ActionBar setCellType={props.setCellType} />
            <WordCounter />
            <FileSupport
                name={props.name}
                onLoad={props.onLoad}
                valueGrid={props.valueGrid}
            />
        </div>
    );
};

export default index;
