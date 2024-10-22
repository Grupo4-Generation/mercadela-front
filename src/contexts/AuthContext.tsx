import { createContext, ReactNode, useState } from "react"
import { Login } from "../services/Service"
import { toastAlerta } from "../util/toastAlerta"

import UserLogin from "../models/UserLogin"

interface AuthContextProps {
    user: UserLogin
    handleLogout(): void
    handleLogin(user: UserLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setuser] = useState<UserLogin>({
      id: 0,
      email: "",
      password: "",
      cpf: "",
      name: "",
      gender: "",
      photo:"",
      token: "",
      admin: null,
      products : []
    });

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin:UserLogin) {
        setIsLoading(true)
        try {
            await Login(`/user/login`, userLogin, setuser)
            toastAlerta("Usuário logado com sucesso", "sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes","erro")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setuser({
          id: 0,
          email: "",
          password: "",
          cpf: "",
          name: "",
          gender: "",
          photo: "",
          token: "",
          admin: null,
          products: [],
        });
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}