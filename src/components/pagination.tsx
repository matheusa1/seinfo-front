import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

type TPaginationComponent = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  limit: number
  setLimit: Dispatch<SetStateAction<number>>
  total: number
}

const PaginationComponent: FC<TPaginationComponent> = ({
  page,
  setPage,
  limit,
  setLimit,
  total,
}) => {
  const totalPages = Math.ceil(total / limit)

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Registros por página</p>
        <Select
          value={limit.toString()}
          onValueChange={(value) => {
            setLimit(Number(value))
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={limit} />
          </SelectTrigger>
          <SelectContent side="top">
            {[1, 10, 20, 25, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Página {page} de {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          <span className="sr-only">Ir para a primeira página</span>
          <ChevronsLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <span className="sr-only">Ir para a página anterior</span>
          <ChevronLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <span className="sr-only">Ir para a próxima página</span>
          <ChevronRight />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          <span className="sr-only">Ir para a última página</span>
          <ChevronsRight />
        </Button>
      </div>
    </div>
  )
}

export default PaginationComponent
