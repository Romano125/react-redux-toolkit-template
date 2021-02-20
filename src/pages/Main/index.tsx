import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from 'src/store';

import { Data } from 'src/constants/interfaces';

import { getData } from 'src/store/reducers/data';

const Main: FC = () => {
    const dispatch = useDispatch();
    const { hasLoaded, data } = useSelector(selectors.data);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    if (!hasLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <h1>Welcome to React & Redux Toolkit template based on Typescript</h1>
            </div>
            <ul>
                {data.map((value: Data) => (
                    <li key={value.id}>{value.data}</li>
                ))}
            </ul>
        </div>
    );
};

export default memo(Main);
