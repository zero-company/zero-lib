import Link from 'next/link'
import { FeatureCard } from './feature-card'

export default function Page() {
  return (
    <main className='flex flex-col p-2 gap-2'>
      <p className=''>About App</p>
      <div className='flex flex-wrap gap-2'>
        <FeatureCard
          title='Centralize'
          features={[
            {
              title: 'Strictly Necessary',
              description:
                'These cookies are essential in order to use the website and use its features.',
            },
            {
              title: 'Functional Cookies',
              description:
                'These cookies allow the website to provide personalized functionality.',
            },
            {
              title: 'Performance Cookies',
              description:
                'These cookies help to improve the performance of the website.',
            },
          ]}
        />
        <FeatureCard
          title='Control'
          features={[
            {
              title: 'Strictly Necessary',
              description:
                'These cookies are essential in order to use the website and use its features.',
            },
            {
              title: 'Functional Cookies',
              description:
                'These cookies allow the website to provide personalized functionality.',
            },
            {
              title: 'Performance Cookies',
              description:
                'These cookies help to improve the performance of the website.',
            },
          ]}
        />
        <FeatureCard
          title='Secure'
          features={[
            {
              title: 'Strictly Necessary',
              description:
                'These cookies are essential in order to use the website and use its features.',
            },
            {
              title: 'Functional Cookies',
              description:
                'These cookies allow the website to provide personalized functionality.',
            },
            {
              title: 'Performance Cookies',
              description:
                'These cookies help to improve the performance of the website.',
            },
          ]}
        />
        <FeatureCard
          title='Manage'
          features={[
            {
              title: 'Strictly Necessary',
              description:
                'These cookies are essential in order to use the website and use its features.',
            },
            {
              title: 'Functional Cookies',
              description:
                'These cookies allow the website to provide personalized functionality.',
            },
            {
              title: 'Performance Cookies',
              description:
                'These cookies help to improve the performance of the website.',
            },
          ]}
        />
      </div>
    </main>
  )
}
