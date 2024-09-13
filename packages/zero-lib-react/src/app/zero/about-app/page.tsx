import Link from 'next/link'
import { FeatureCard } from './feature-card'

export default function Page() {
  return (
    <main className='flex flex-col p-2 gap-2'>
      <div className='flex flex-wrap gap-2'>
        <FeatureCard
          title='Use this App'
          features={[
            {
              title: 'Free to Use',
              description:
                'Completely free aside from cloud-specific features.',
            },
            {
              title: 'Agnostic Compatibility',
              description: 'Not dependent on any one vendor.',
            },
            {
              title: 'Requests',
              description:
                'Team is open to requests/suggestions/complaints on any of our projects.',
            },
            {
              title: 'Open Source Forever',
              description:
                "Transparent and forkable source code, so long as there are contributors this won't end up in a project graveyard. (AGPL-3.0)",
            },
          ]}
        />
        <FeatureCard
          title='Centralize'
          features={[
            {
              title: 'All Content in one Place',
              description:
                'One library to manage your notes, images, music, videos, etc.',
            },
            {
              title: 'Bookmark External Data Sources',
              description: '',
            },
            {
              title: 'Actual Universal ID Registry',
              description:
                'Generate a unique ID for each and every piece of data.',
            },
            {
              title: 'One Compiled File',
              description:
                'Easier to manage, backup and secure one file. large size contents are stored separately.',
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
                'Agnostic data storage lets you store data in your choice vendor. (multiple cloud syncing)',
            },
          ]}
        />
        <FeatureCard
          title='Secure'
          features={[
            {
              title: 'User Encryption',
              description:
                'Open source zero trust E2E encryption. (general/specific encryption)',
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
                'Optionally tracks user browsing. (latest viewed, oldest viewed, most viewed, least viewed, last added, last modified)',
            },
          ]}
        />
        <FeatureCard
          title='Problems Solved'
          features={[
            {
              title:
                'Your images/music/videos removed from your library w/o permission or notification.',
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
              title: 'Non-cloud features locked behind a paywall.',
              description: '',
            },
            {
              title: 'Feature complaints falling on deaf ears.',
              description: '',
            },
            {
              title: 'Unfairly closed/banned account resulting in data loss.',
              description: '',
            },
            {
              title: 'Your favorite feature/service paywalled/shutdown.',
              description: '',
            },
            {
              title:
                'Unable to sleep knowing any of the above can happen at any time.',
              description: '',
            },
          ]}
        />
      </div>
    </main>
  )
}
