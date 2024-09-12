import { cn } from '@/lib'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

type Feature = {
  title: string
  description: string
}

type Props = {
  title?: string
  description?: string
  features: Feature[]
}

export const FeatureCard = ({ title, description, features }: Props) => {
  return (
    <Card className='w-full sm:w-96 shrink-0'>
      <CardHeader className={cn(!title && !description && 'p-3')}>
        <CardTitle hidden={!title}>{title}</CardTitle>
        <CardDescription hidden={!description}>{description}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        {features.map((feature, key) => (
          <div
            key={key}
            className='flex items-center justify-between space-x-2'
          >
            <Label className='flex flex-col space-y-1'>
              <span>{feature.title}</span>
              <span className='font-normal leading-snug text-muted-foreground'>
                {feature.description}
              </span>
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
