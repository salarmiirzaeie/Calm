import {createReducer} from '@reduxjs/toolkit';
import {setToken} from './actions';

interface ITokenState {
  token: string | null;
  authorized: boolean;
}

const initialState: ITokenState = {
  token: null,
  authorized: false,
};

const authReducer = createReducer(initialState, builder => {
  builder.addCase(setToken, (state, action) => {
    state.token = action.payload;
    state.authorized = !!action.payload;
  });
});

export default authReducer;
