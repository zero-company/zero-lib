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
              title: 'All Content in one Place',
              description:
                'One library to manage your notes/images/music/videos.',
            },
            {
              title: 'One File',
              description:
                'All index data in one file, large size content stored separately.',
            },
          ]}
        />
        <FeatureCard
          title='Control'
          features={[
            {
              title: 'User Controlled',
              description:
                'No vendor locking, no unauthorized manipulation of user data.',
            },
            {
              title: 'File Storage',
              description:
                'Agnostic data storage with multiple clouds syncing.',
            },
          ]}
        />
        <FeatureCard
          title='Secure'
          features={[
            {
              title: 'User Encryption',
              description: 'Open source zero trust E2E encryption.',
            },
            {
              title: 'Advanced Security Features',
              description: 'Add new data without auth.',
            },
            {
              title: 'Auth Protocols',
              description: '(Lockout Prevention)',
            },
          ]}
        />
        <FeatureCard
          title='Manage'
          features={[
            {
              title: 'Advanced Search',
              description:
                'Search with advanced filtering and sorting. (layered queries, inclusion/exclusion, random sorting)',
            },
            {
              title: 'Tag System',
              description:
                'Customize your data tags. (tag aliases, merged group tags, metatags)',
            },
            {
              title: 'History Tracking',
              description:
                'Automatically tracks user browsing. (latest viewed, oldest viewed, most viewed, least viewed)',
            },
          ]}
        />
      </div>
    </main>
  )
}
