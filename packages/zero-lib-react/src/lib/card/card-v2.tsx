'use client'
import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  cn,
} from '@/lib'
import React from 'react'

const CARDCOLORS = {
  blue: '',
  green: '',
  yellow: '',
  red: '',
  default: '',
}

type Props = {
  className?: string
  children?: React.ReactNode
}

export const CardV2 = (props: Props) => {
  return (
    <Card className={cn('rounded-md *:p-4', props.className)}>
      {props.children}
    </Card>
  )
}
