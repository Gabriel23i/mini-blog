import { createContext, useState } from "react";

export const UserImageProfileContext = createContext();

export function UserImageProfileProvider ({ children }){

    const [anchorEl, setAnchorEl] = useState(null);

    return (
        <UserImageProfileContext.Provider
            value={{
                anchorEl, setAnchorEl,
            }}
        >
            { children }
        </UserImageProfileContext.Provider>
    );
};
