import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/home.svg';
import * as types from '../../types';
import upload from '../../assets/upload.svg';

type Props = {
    isWin: boolean;
    onLoad: (file: types.file) => void;
    name: string;
};

const ViewModule = (props: Props) => {
    const fileInput = useRef<HTMLInputElement>(null);

    function onChange(event: any) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event: any) {
        var data = JSON.parse(event.target.result);
        props.onLoad(data);
    }

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
            <span className='text-[30px]'>{props.name}</span>
            {props.isWin && <span className='text-[30px]'>You Win!</span>}
        </div>
    );
};

export default ViewModule;
