import { useState } from 'react';
import { Link } from 'react-router';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { VideoText } from '~/components/ui/video-text';

const navItems = [
  { label: 'Home', to: '#' },
  { label: 'Menu', to: '#' },
  { label: 'Contact', to: '#' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center">
        <div className="w-48 h-10">
          <VideoText
            src="/assets/videos/pizzavideo.mp4"
            className="w-full h-full"
            fontSize="32px"
            fontFamily="Pacifico, cursive">
            Luigie Pizza
          </VideoText>
        </div>
        <button
          type="button"
          className="p-2 rounded-full transition"
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}>
          <HiOutlineMenuAlt1 className="w-6 h-6 text-white" />
        </button>
      </div>
      {isOpen ? (
        <ul id="mobile-menu" className="flex flex-col gap-3 mt-4 text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.to} className="hover:text-yellow-500 transition">
                <h3>{item.label}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
