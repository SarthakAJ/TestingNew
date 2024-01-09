import axios from 'axios';
import { FECTH_USER } from './types';

export const fetchUser = () => 
     async (dispatch) => {
      console.log("initiated req")
       try{
        const res = await axios.get('/api/current_user');
       console.log("user fetched")
       dispatch({ type : FECTH_USER, payload : res.data});
       } catch (err) {
        console.log(err);
       }
    }

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({type : FECTH_USER, payload : res.data});
} 