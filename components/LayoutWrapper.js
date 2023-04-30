import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between">
        <header className="flex items-center justify-between pt-4 lg:pt-8">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-sky-500 hover:text-sky-600 hover:transition-colors sm:text-2xl">
                {siteMetadata.headerTitle}
              </h1>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-xl font-medium text-stone-500 hover:text-stone-700 lg:text-lg">
                {link.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
      </div>
      <Footer />
    </SectionContainer>
  )
}

export default LayoutWrapper
