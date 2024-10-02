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
  STATECLASSES,
} from '@/lib'
import React from 'react'

const CARDCOLORS = {
  info: cn('', STATECLASSES.infoBorder),
  success: cn('', STATECLASSES.successBorder),
  warning: cn('', STATECLASSES.warningBorder),
  error: cn('', STATECLASSES.errorBorder),
  default: ``,
}

type Props = {
  className?: string
  children?: React.ReactNode
  color?: keyof typeof CARDCOLORS
}

export const CardV2 = ({ children, className, color = 'default' }: Props) => {
  return (
    <Card className={cn('rounded-md *:p-4', CARDCOLORS[color], className)}>
      {children}
    </Card>
  )
}
