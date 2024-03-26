import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
	const [ user, setUser] = useState('Hello')
	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				login: (email, password) => {
					//communicate with backend and store token in secureStore

					setUser('Andre');
				},
				logout: () => {setUser(null);
			},
			}}
			>
				{children}
		</AuthContext.Provider>
	);
};