import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase/config';
import { useAuthValue } from '../../context/AuthContext';
import { useImageProfileContext } from '../../hooks/useImageProfileContext';

import Avatar from '@mui/material/Avatar';

export const AvatarProfile = () => {
    
    const { user } = useAuthValue();

    const { urlImage, setUrlImage } = useImageProfileContext();
    
    const handleImageInBda = async()=> {
        if(!urlImage){
            const querySnapshot = await getDocs(collection(db, "imageProfile"));
             
            querySnapshot.forEach(image => {
                if(!image.data()) return;
                setUrlImage(image.data());
            });
        };
    };

    useEffect(()=> {
        handleImageInBda();
    });

    return (
        <Avatar
            src={ user && urlImage.url }
            sx={{ width: 42, height: 42 }}
        />
    );
};
