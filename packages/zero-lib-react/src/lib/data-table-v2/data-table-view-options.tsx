'use client'
import type { Table } from '@tanstack/react-table'
import { Check, ChevronsUpDown, Settings2 } from 'lucide-react'
import { Button } from '@/shadcn/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shadcn/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/ui/popover'
import { cn } from '@/lib/utils'
import * as React from 'react'

interface DataTableViewOptionsProps<TData> {
  className?: string
  table: Table<TData>
}

export function DataTableViewOptions<TData>({
  className,
  table,
}: DataTableViewOptionsProps<TData>) {
  const columns = React.useMemo(
    () =>
      table
        .getAllColumns()
        .filter(
          column =>
            typeof column.accessorFn !== 'undefined' && column.getCanHide(),
        ),
    [table],
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label='Toggle columns'
          role='combobox'
          variant='outline'
          size='sm'
          className={cn('ml-auto h-8 flex', className)}
        >
          <Settings2 />
          View
          <ChevronsUpDown className='ml-auto opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-44 p-0'>
        <Command>
          <CommandInput placeholder='Search columns...' />
          <CommandList>
            <CommandEmpty>No columns found.</CommandEmpty>
            <CommandGroup>
              {columns.map(column => (
                <CommandItem
                  key={column.id}
                  onSelect={() =>
                    column.toggleVisibility(!column.getIsVisible())
                  }
                >
                  <span className='truncate'>
                    {column.columnDef.meta?.label ?? column.id}
                  </span>
                  <Check
                    className={cn(
                      'ml-auto size-4 shrink-0',
                      column.getIsVisible() ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
