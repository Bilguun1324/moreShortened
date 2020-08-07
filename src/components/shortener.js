import React from 'react';
import { useInput, useKey } from '../hooks/firebase';

export const HomeDefault = () => {

    const [urlholder, bindurlholder] = useInput('');

    return (
        <div>
            <div>Shorten your URL</div>
            <div className='urlcont'>
                <input {...bindurlholder} className='input' placeholder='Your URL Here'></input>
                <button className='btn'>Shorten</button>
            </div>
        </div>
    )
}