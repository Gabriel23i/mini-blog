import { useContext } from 'react';

import {
    UserImageProfileContext
} from '../../src/context/UserImageProfileContext';

export const useImageProfileContext = () => {
    const context = useContext(UserImageProfileContext);
    
    if(!context){
        return console.error('Não há contexto.');
    };

    return context;
};
