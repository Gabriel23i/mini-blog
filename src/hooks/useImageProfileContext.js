import { useContext } from 'react';
import { UserImageProfileContext } from '../../src/context/UserImageProfileContext';

export const useImageProfileContext = () => {
    const context = useContext(UserImageProfileContext);
    
    if(!context){
        return console.error('No momento há contexto.');
    };

    return context;
};
