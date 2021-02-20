import { createSelector } from '@reduxjs/toolkit';

import { DataState } from 'src/constants/interfaces';

export default createSelector(
    (state: { data: DataState }) => ({
        hasLoaded: state.data.hasLoaded,
        data: state.data.data || [],
    }),
    (data) => data,
);
