'use client'
import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type TReactQueryContextProvider = {
  children: ReactNode
}

const ReactQueryContextProvider: FC<TReactQueryContextProvider> = ({
  children,
}) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryContextProvider
