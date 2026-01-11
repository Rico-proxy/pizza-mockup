import { Link } from 'react-router';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { GiFullPizza } from 'react-icons/gi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { VideoText } from '~/components/ui/video-text';

const navItems = [
  { label: 'Home', to: '#', icon: <SiHomeassistantcommunitystore /> },
  { label: 'Menu', to: '#', icon: <GiFullPizza /> },
  { label: 'Contact', to: '#', icon: <FaHandHoldingHeart /> },
  { label: 'Stores', to: '#', icon: <MdOutlineLocalGroceryStore /> },
];

export function DesktopNav() {
  return (
    <div className="hidden relative lg:flex items-center w-full">
      <div className="w-64 h-12">
        <VideoText
          src="/assets/videos/pizzavideo.mp4"
          className="w-full h-full"
          fontSize="44px"
          fontFamily="Pacifico, cursive"
        >
          Luigie Pizza
        </VideoText>
      </div>
      <ul className="flex gap-12 bg-black/70 ml-auto px-6 py-3 border hover:border-yellow-500 rounded-full text-xl transition">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className="flex items-center gap-2 hover:text-yellow-500 transition">
              <h3>{item.label}</h3>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
