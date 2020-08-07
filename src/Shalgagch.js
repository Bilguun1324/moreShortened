import React, { useContext } from 'react';
import {ShortUrlContext} from './providers/provider1';
import { useLocation } from 'react-router-dom';

export const Shalgagch = () => {
    const location = useLocation();
    const { readurl } = useContext(ShortUrlContext);
    
    readurl(location.pathname.slice(1));
    
    return (
        <div>
            Loading...
        </div>
    )
}