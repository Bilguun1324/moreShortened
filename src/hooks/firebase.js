import { useState, useEffect } from 'react';
var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCdiz32MnTf9AAYKxOuhw9RBJETjGwwTAQ",
    authDomain: "boginoo2.firebaseapp.com",
    databaseURL: "https://boginoo2.firebaseio.com",
    projectId: "boginoo2",
    storageBucket: "boginoo2.appspot.com",
    messagingSenderId: "839826899352",
    appId: "1:839826899352:web:9216974043d7f4a6122bed",
    measurementId: "G-H7E5G48Z5F"
};

export const useFirebase = () => {
    const [state, setState] = useState({ firebase });
    let app;

    useEffect(() => {
        if (!firebase.apps.length) {
            app = firebase.initializeApp(firebaseConfig);
        }

        let firestore = firebase.firestore(app);

        setState({ firebase, firestore, app });
    }, [])
    return state
}

export const useInput = (invalue) => {
    const [value, setValue] = useState(invalue);

    const resetvalue = () => setValue(invalue)
    const bind = {
        value: value,
        onChange: (e) => setValue(e.target.value)
    }

    return [value, bind, resetvalue]
}

export const useKey = (q) => {
    const [key, setKey] = useState(false);

    const changeKeyDown = (e) => {
        if (e.key === q || e.keyCode === q) {
            setKey(true)
        } else {
            setKey(false);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', changeKeyDown);

        return () => {
            document.removeEventListener('keydown', changeKeyDown)
        }
    }, [q])

    return key
}

export const useDoc = (path) => {
    const { firestore } = useFirebase();
    const [data, setData] = useState('');

    useEffect(() => {
        if (firestore) {
            const unsubscribe = firestore.doc(path).onSnapshot((res) => {
                setData(res.data())
            })

            return () => unsubscribe();
        }
    }, [path, firestore])

    return data;
}

export const useUser = () => {
    const {auth} = useFirebase();
    const [state, setState] = useState({ user: null });
    useEffect(() => {
      if (auth) {
        const subscribe = auth.onAuthStateChanged((user) => setState({ user }));
  
        return () => subscribe();
      }
    }, [auth])
  
    return state;
  }