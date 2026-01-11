import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';

export function Navbar() {
  return (
    <nav className="px-10 lg:px-20 py-5 md:py-8">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
}
