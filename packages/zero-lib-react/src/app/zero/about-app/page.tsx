import Link from 'next/link'
import { FeatureCard } from './feature-card'

export default function Page() {
  return (
    <main className='flex flex-col p-2 gap-2'>
      <div className='flex flex-wrap gap-2'>
        <FeatureCard
          title='Save your Data'
          features={[
            {
              title: '',
              description:
                'Vendor removes images/music/videos from your library/playlist w/o permission.',
            },
            {
              title: '',
              description:
                'Searching for specific data across multiple libraries.',
            },
            {
              title: '',
              description:
                'Manually exporting backup data from multiple sources.',
            },
            {
              title: '',
              description:
                'Managing a huge list of user data in your own files.',
            },
            {
              title: '',
              description: 'Feature complaints falling on deaf ears.',
            },
            {
              title: '',
              description:
                'Unfairly closed/banned account resulting in data loss.',
            },
            {
              title: '',
              description: 'Shutdown/Paywalling of an app with your data.',
            },
            {
              title: '',
              description:
                'Unable to sleep, knowing any of the above can happen at any time.',
            },
          ]}
        />
        <FeatureCard
          title='Use this App'
          features={[
            {
              title: 'Free to Use',
              description:
                'Completely free aside from cloud-specific features.',
            },
            {
              title: 'Offline Support',
              description:
                'Most features work offline unless requiring cloud resources.',
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
              title: 'All your Data in One Place',
              description:
                'One library to manage your notes, images, music, videos, etc.',
            },
            {
              title: 'Bookmark External Data',
              description: 'Extract and Save data from third party sources.',
            },
            {
              title: 'Actual Universal ID Registry',
              description:
                'Generate unique IDs for each and every piece of data.',
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
              title: 'User Controlled Data',
              description:
                'No vendor locking, no unauthorized manipulation of user data.',
            },
            {
              title: 'File Storage',
              description:
                'Store your data in your choice of vendor/s. (multiple cloud syncing)',
            },
            {
              title: 'User Encryption',
              description:
                'Open source zero trust E2E  data encryption. (general/specific encryption)',
            },
            {
              title: 'Auth Protocols',
              description: 'App authentication. (Lockout Prevention)',
            },
            {
              title: 'Advanced Security Features',
              description: 'Authless features.',
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
      </div>
    </main>
  )
}
