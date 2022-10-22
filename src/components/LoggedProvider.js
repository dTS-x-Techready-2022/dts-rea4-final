import { createContext, useState } from 'react';

export const LoggedContext = createContext({
    setIsLoggedin: () => {},
});
export const LoggedProvider = ({ children }) => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const onSetIsLoggedin = (isLoggedin) => {
        console.log(isLoggedin);
        setIsLoggedin(isLoggedin);
    };

    return (
        <LoggedContext.Provider
            value={{ isLoggedin, setIsLoggedin: onSetIsLoggedin }}
        >
            {children}
        </LoggedContext.Provider>
    );
};
