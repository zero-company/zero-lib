'use client'
import {
  cn,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  CardV2,
} from '@/lib'

type Props = {
  className?: string
  children: React.ReactNode
}

export const StatusCard = (props: Props) => {
  return (
    <CardV2
      className={cn('mx-auto max-w-sm m-auto w-full text-sm', props.className)}
    >
      <CardHeader>{props.children}</CardHeader>
    </CardV2>
  )
}
