import React, { createContext, useEffect, useState } from 'react';
import { useFirebase, useUser } from '../hooks/firebase';

export const ShortUrlContext = createContext({
    urls: [],
    tinyurl: '',
    addShortUrl: () => { },
    readurl: () => { }
})

export const ShortUrlProvider = ({ children }) => {
    const { firestore } = useFirebase();
    const { user } = useUser();
    const [urls, setUrls] = useState([]);
    const [tinyurl, setTinyurl] = useState('');

    useEffect(() => {
        if (user) {
            const unsubscribe = firestore.collection('users').doc(user.uid).collection('shortUrls').onSnapshot((q) => {
                setUrls(q.docs.map((doc) => doc.data()))
            })
            return () => unsubscribe()
        }
    }, [user])

    const makeid = (length) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const readurl = (number) => {
        if (firestore !== undefined)
            firestore.collection('shortUrls').doc(number).get()
                .then((res) => {
                    window.location.href = res.data().inputUrl;
                })
    }

    const addShortUrl = (url) => {
        let url1 = makeid(5);
        setTinyurl(url1);
        if (user) {
            firestore.collection(`users/${user.uid}/shortUrls`).doc(url1)
                .set({
                    inputUrl: url,
                    outputUrl: url1
                })
        }

        firestore.collection('shortUrls').doc(`${url1}`)
            .set({
                inputUrl: url,
                outputUrl: url1
            })
    }

    return (
        <ShortUrlContext.Provider value={{ urls, addShortUrl, readurl, tinyurl }} >
            {children}
        </ShortUrlContext.Provider>
    )
}