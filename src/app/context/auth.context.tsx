'use client'

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { TUser } from '@/@core/module/user/domain/user.entity'
import { user } from '@/@core/module/user/infra/container.registry'
import { auth } from '@/@core/module/auth/infra/container.registry'

type TAuthContext = {
  signIn: (token: string, password: string) => void
  signOut: () => void
  userInfo?: TUser
  KDF?: Buffer
}

const AuthContext = createContext({} as TAuthContext)

type TAuthContextProvider = {
  children: ReactNode
}

export const AuthContextProvider: FC<TAuthContextProvider> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<TUser>()
  const [KDF, setKDF] = useState<Buffer>()
  const router = useRouter()

  const signIn = useCallback(
    async (token: string, password: string) => {
      Cookie.set('token', token, {
        sameSite: 'strict',
      })

      const userResponse = await user.getUserInfo.execute()

      setUserInfo(userResponse)

      const generatedKDF = auth.generateKdf.execute(
        password,
        userResponse.passkey,
      )

      setKDF(generatedKDF)

      router.push('/')
    },
    [router],
  )
  const signOut = useCallback(() => {
    Cookie.remove('token')
    router.push('/auth/sign-in')
    setUserInfo(undefined)
    setKDF(undefined)
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
      userInfo,
      KDF,
    }),
    [signIn, signOut, userInfo, KDF],
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
