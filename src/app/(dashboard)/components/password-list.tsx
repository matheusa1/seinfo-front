'use client'
import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { WindIcon } from 'lucide-react'
import PaginationComponent from '@/components/pagination'
import PasswordItem from '@/app/(dashboard)/components/password-item'

const PasswordList: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)

  const { data } = useQuery({
    queryKey: ['CredentialList', page, limit],
    queryFn: () => credential.pagination.execute({ page, limit }),
  })

  if (!data || data.data.length === 0) {
    return (
      <div className={'flex flex-col items-center'}>
        <WindIcon />
        <p>Não há dados.</p>
      </div>
    )
  }

  return (
    <div className={'flex flex-col gap-4'}>
      {data?.data.map((cred) => (
        <PasswordItem data={cred} key={cred.id} />
      ))}
      <PaginationComponent
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        total={data.total}
      />
    </div>
  )
}

export default PasswordList
