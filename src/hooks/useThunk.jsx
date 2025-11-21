import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'

export function useThunk(thunk) {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError ] = useState(null);
    const dispatch = useDispatch;
}