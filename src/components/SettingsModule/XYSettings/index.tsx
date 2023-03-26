import React from 'react';

type Props = {
    height: number;
    width: number;
    setSize: (height: number, width: number) => void;
    refresh: () => void;
};

const XYSettings = (props: Props) => {
    return (
        <div className='rounded-[15px] flex items-center gap-[5px]'>
            <span>Height: </span>
            <input
                className='w-[50px]'
                type='number'
                value={props.height}
                onChange={(e) =>
                    props.setSize(parseInt(e.target.value), props.width)
                }
            />
            <span>Width: </span>
            <input
                className='w-[50px]'
                type='number'
                value={props.width}
                onChange={(e) => {
                    props.setSize(props.height, parseInt(e.target.value));
                }}
            />
            <button onClick={props.refresh}>REBUILD</button>
        </div>
    );
};

export default XYSettings;
