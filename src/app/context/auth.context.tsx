'use client'

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

type TAuthContext = {
  signIn: (token: string) => void
  signOut: () => void
}

const AuthContext = createContext({} as TAuthContext)

type TAuthContextProvider = {
  children: ReactNode
}

export const AuthContextProvider: FC<TAuthContextProvider> = ({ children }) => {
  const router = useRouter()

  const signIn = useCallback(
    (token: string) => {
      Cookie.set('token', token, {
        sameSite: 'strict',
      })
      router.push('/')
    },
    [router],
  )
  const signOut = useCallback(() => {
    Cookie.remove('token')
    router.push('/auth/sign-in')
  }, [router])

  const getToken = useCallback(() => {
    return Cookie.get('token')
  }, [])

  useEffect(() => {
    const token = getToken()

    if (token) {
      signOut()
    }
  }, [getToken, signOut])

  const value: TAuthContext = useMemo(
    () => ({
      signIn,
      signOut,
    }),
    [signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
