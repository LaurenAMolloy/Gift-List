import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'

export function useThunk(thunk) {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError ] = useState(null);
    const dispatch = useDispatch();
    
    //This function is only rerendered when dispatch or thunk changes!
    const runThunk = useCallback((arg) => {
        setisLoading(true);
        dispatch(thunk(arg))
        .unwrap()
        .catch(err => setError(err))
        .finally(() => setisLoading(false))
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error]
}