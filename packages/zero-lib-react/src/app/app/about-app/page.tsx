import { FeatureCard } from './feature-card'
import { Markdown } from '@/lib'
import AboutApp from '@/components/markdown/about-app.mdx'

export default function Page() {
  return (
    <>
      <Markdown>
        <AboutApp />
      </Markdown>
    </>
  )
}
