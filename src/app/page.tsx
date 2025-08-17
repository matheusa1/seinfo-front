import Link from 'next/link'

export default function Home() {
  return (
    <main className={'flex space-x-50 bg-red-500'}>
      <div>Hello world!</div>
      <div>Bom dia</div>
      <Link href={'/auth/sign-up'}>Tela de cadastro</Link>
    </main>
  )
}
