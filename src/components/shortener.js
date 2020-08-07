import React from 'react';
import { useInput } from '../hooks/firebase';

export const Shortener = () => {

    const [urlholder, bindurlholder] = useInput('');

    return (
        <div>
            <div>Shorten your URL</div>
            <div className='urlcont'>
                <input {...bindurlholder} className='input' placeholder='Your URL Here'></input>
                <button onClick='' className='btn'>Shorten</button>
            </div>
        </div>
    )
}