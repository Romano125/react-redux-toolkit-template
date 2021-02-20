import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { data as dataUtil } from 'src/utils';

import { DataPayload, DataState } from 'src/constants/interfaces';

const initialState: DataState = {
    data: [],
    hasLoaded: false,
};

const getData = createAsyncThunk('getData', async () => dataUtil.getDummyData());

const extraReducers = {
    [getData.pending.type]: (state: DataState) => ({
        ...state,
        hasLoaded: false,
    }),
    [getData.fulfilled.type]: (state: DataState, { payload }: PayloadAction<DataPayload>) => ({
        ...state,
        data: payload.data,
        hasLoaded: true,
    }),
    [getData.rejected.type]: (state: DataState) => ({
        ...state,
        hasLoaded: true,
    }),
};

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers,
});

export { getData };
export default data.reducer;
