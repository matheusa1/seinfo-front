import { FC, ReactNode } from 'react'
import { ThemeToggleButton } from '@/components/theme-toggle'

type TLayoutAuth = {
  children: ReactNode
}

const LayoutAuth: FC<TLayoutAuth> = ({ children }) => {
  return (
    <section
      className={'flex h-screen w-screen items-center justify-center px-5'}
    >
      {children}
      <div className={'absolute top-2 right-2'}>
        <ThemeToggleButton />
      </div>
    </section>
  )
}

export default LayoutAuth
