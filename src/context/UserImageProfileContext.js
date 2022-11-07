import { createContext, useState } from "react";

export const UserImageProfileContext = createContext();

export function UserImageProfileProvider ({ children }){

    const [urlImage, setUrlImage] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <UserImageProfileContext.Provider
            value={{
                urlImage, setUrlImage,
                anchorEl, setAnchorEl,
            }}
        >
            { children }
        </UserImageProfileContext.Provider>
    );
};
