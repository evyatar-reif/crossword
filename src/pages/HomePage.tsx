import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const HomePage = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
            <h1 className='text-[80px]'>Welcome to Crossword.org</h1>

            <div className='flex flex-col gap-[50px]'>
                <Link to='/build'>
                    <button className='w-[250px] h-[100px] bg-blue-200 font-bold'>
                        Build!
                    </button>
                </Link>
                <Link to='/view'>
                    <button className='w-[250px] h-[100px] bg-blue-200 font-bold'>
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
