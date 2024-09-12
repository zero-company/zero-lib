import Link from 'next/link'
import { FeatureCard } from './feature-card'

export default function Page() {
  return (
    <main className='flex flex-col p-2 gap-2'>
      <p className=''>About App</p>
      <div className='flex flex-wrap gap-2'>
        <FeatureCard
          title='Use this App'
          features={[
            {
              title: 'Open Source',
              description:
                'Free to contribute to this project, and we have nothing to hide. (AGPL-3.0)',
            },
            {
              title: 'Requests',
              description:
                'Team is open to requests/suggestions/complaints on any of our projects.',
            },
          ]}
        />
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
              title: 'Offline Support',
              description:
                'Most features work offline unless requiring cloud resources.',
            },
            {
              title: 'File Storage',
              description:
                'Agnostic data storage lets your store in your choice of provider. (multiple cloud syncing)',
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
              description: 'App authentication. (Lockout Prevention)',
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
                'Automatically tracks user browsing. (latest viewed, oldest viewed, most viewed, least viewed, last added, last modified)',
            },
          ]}
        />
        <FeatureCard
          title='Problems Solved'
          features={[
            {
              title:
                'Your video/music/image removed from your library by a vendor.',
              description: '',
            },
            {
              title:
                'Looking for a specific piece of data across multiple libraries.',
              description: '',
            },
            {
              title:
                'Manually exporting backups of data from multiple sources.',
              description: '',
            },
            {
              title: 'Managing a huge list of user data in your own files.',
              description: '',
            },
            {
              title: 'Non-cloud features locked behind a paywall',
              description: '',
            },
            {
              title: 'Feature complaints falling on deaf ears',
              description: '',
            },
          ]}
        />
      </div>
    </main>
  )
}
