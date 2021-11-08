import top100 from './top100';
import {createContext} from 'react';


const ItunesContext = createContext(top100);

export {ItunesContext};
export default top100;
