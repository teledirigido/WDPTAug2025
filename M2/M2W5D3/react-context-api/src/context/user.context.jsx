import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [user, setUser] = useState({
    name: 'Foo Admin',
    email: 'admin@foo.com',
    role: 'admin',
    isLoggedIn: true
  })

  const logoutUser = () => {
    // setUser as empty
    setUser({})
  }

  const isLoggedIn = user.isLoggedIn ?? false;

  return (
    <UserContext.Provider value={{user, logoutUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  )

}