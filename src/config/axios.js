import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { API_URL } from '../globals';

export default applyCaseMiddleware(axios.create({ baseURL: API_URL }));
