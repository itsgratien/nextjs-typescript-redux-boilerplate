import { Dispatch } from '@reduxjs/toolkit';
import { mockEndPoint } from '@/utils/MockEndPoint';
import {
  setUsersError,
  setUsersLoading,
  setUsersSuccess,
} from 'src/redux/Slices/UserSlice';
import axios from '@/utils/AxiosService';

export const getUsersAction = () => async (dispatch: Dispatch) => {
  dispatch(setUsersLoading(true));

  return axios({
    method: 'GET',
    uri: mockEndPoint.getUsers,
    onError: (e) => {
      dispatch(setUsersLoading(false));
      dispatch(setUsersError(e.data));
    },
    onSuccess: (res) => {
      dispatch(setUsersLoading(false));
      dispatch(setUsersSuccess(res.data.data));
    },
  });
};
