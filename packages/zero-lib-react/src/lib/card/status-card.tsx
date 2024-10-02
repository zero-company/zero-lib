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

export const StatusCard = () => {
  return (
    <CardV2 className='mx-auto max-w-sm m-auto w-full text-sm'>
      <CardHeader>
        <p>• [validation] Invalid email</p>
        <p>• [server] Authentication error</p>
      </CardHeader>
    </CardV2>
  )
}
