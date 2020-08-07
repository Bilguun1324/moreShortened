import React, {useContext} from 'react';
import { useInput } from '../hooks/firebase';
import {ShortUrlContext} from '../providers/provider1';

export const Shortener = () => {

    const { addShortUrl, tinyurl } = useContext(ShortUrlContext);

    const [urlholder, bindurlholder] = useInput('');

    return (
        <div className='h-219 w-885 container1 flex-center'>
            <div className='main-color font-weight-bold w-277 h-37'>Shorten your URL</div>
            <div className='urlcont'>
                <input {...bindurlholder} className='input w-564 h-43' placeholder='Your URL Here'></input>
                <button onClick={() => addShortUrl(urlholder)} className='btn w-164 h-43 back-main-color white-color'>Shorten</button>
            </div>
        </div>
    )
}