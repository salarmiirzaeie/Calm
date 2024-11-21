import {createAction} from '@reduxjs/toolkit';

export const setToken = createAction<string | null>('auth/setToken');
