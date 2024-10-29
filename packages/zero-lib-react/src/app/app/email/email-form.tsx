'use client'
import {
  cn,
  Button,
  Card,
  CardV2,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Page,
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  Textarea,
} from '@/lib'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  header: z.string().min(1, { message: 'Header required' }),
  markdown: z.string().min(1, { message: 'Markdown required' }),
})
const formSchemaKeys = formSchema.keyof()
type FormSchemaType = z.infer<typeof formSchema>
type FormSchemaKeysType = z.infer<typeof formSchemaKeys>

type Props = {
  onSubmit: (values: z.infer<typeof formSchema>) => void
  html?: string | null | undefined
  className?: string
}

export const EmailForm = ({ onSubmit, html, className }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      header: '',
      markdown: '',
    },
  })
  const formErrors = form.formState.errors
  const formErrorKeys = Object.keys(formErrors) as FormSchemaKeysType[]
  const errorMessages = formErrorKeys.map(
    (error: FormSchemaKeysType) => formErrors[error]?.message,
  )

  return (
    <div className={`space-y-4 ${className}`}>
      {errorMessages.length > 0 && (
        <CardV2 color='error' className='text-xs'>
          <CardHeader>
            {errorMessages.map((message, key) => (
              <p key={key}>• {message}</p>
            ))}
          </CardHeader>
        </CardV2>
      )}

      <CardV2>
        <CardHeader>
          <CardTitle className='text-xl'>Generate Email</CardTitle>
          <CardDescription>Enter content</CardDescription>
        </CardHeader>
        <CardContent className='!pt-0'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='header'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Header</FormLabel>
                    <FormControl>
                      <Input placeholder='Announcements' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='markdown'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Markdown</FormLabel>
                    <FormControl>
                      <Input placeholder='# Changes' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='grid gap-4'>
                <Button type='submit' className='w-full'>
                  Generate
                </Button>
              </div>
              <div className='mt-4 text-sm'>Output HTML</div>
              <Textarea className='h-[10rem]' readOnly value={html || ''} />
            </form>
          </Form>
        </CardContent>
      </CardV2>
    </div>
  )
}
