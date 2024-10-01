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
} from '@/lib'

export const StatusCard = () => {
  return (
    <Card className='mx-auto max-w-sm m-auto w-full text-sm'>
      <CardHeader>
        <p>• [validation] Invalid email</p>
        <p>• [server] Authentication error</p>
      </CardHeader>
    </Card>
  )
}
