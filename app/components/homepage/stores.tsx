import {
  DraggableCardBody,
  DraggableCardContainer,
} from '~/components/ui/draggable-card';
import { MdLocationOn } from 'react-icons/md';

const stores = [
  {
    title: 'Downtown Pizzeria',
    address: '123 Main St, Luigie City',
    className: 'relative md:absolute md:top-4 md:left-[4%] md:rotate-[-6deg]',
  },
  {
    title: 'Riverside Pizzeria',
    address: '88 River Rd, Luigie City',
    className: 'relative md:absolute md:top-32 md:left-[22%] md:rotate-[-8deg]',
  },
  {
    title: 'Market Street',
    address: '42 Market St, Luigie City',
    className: 'relative md:absolute md:top-6 md:right-[6%] md:rotate-[6deg]',
  },
  {
    title: 'Old Town Pizzeria',
    address: '5 Heritage Ave, Luigie City',
    className: 'relative md:absolute md:top-40 md:right-[18%] md:rotate-[10deg]',
  },
  {
    title: 'Westside Pizzeria',
    address: '300 West Ave, Luigie City',
    className: 'relative md:absolute md:bottom-6 md:left-[18%] md:rotate-[3deg]',
  },
];

export function Stores() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="relative bg-black/40 border border-yellow-500/20 rounded-[32px] overflow-hidden">
        <div className="gap-8 md:gap-10 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] p-6 sm:p-8 md:p-12">
          <div className="relative">
            <h2 className="font-bold text-yellow-500 text-2xl md:text-4xl">
              Our Locations
            </h2>
            <p className="mt-2 max-w-md text-white/70">
              Drag a card to explore our stores around the city.
            </p>
          </div>
          <DraggableCardContainer className="md:block relative flex flex-col items-center gap-6 min-h-[22rem] sm:min-h-[26rem] md:min-h-[34rem]">
            {stores.map((store) => (
              <DraggableCardBody
                key={store.title}
                className={`${store.className} w-full max-w-[18rem] sm:w-60 min-h-[14rem] border border-yellow-500/30 bg-black/70 p-4 text-white shadow-[0_20px_60px_-30px_rgba(234,179,8,0.6)]`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex justify-center items-center bg-yellow-500/10 border border-yellow-500/40 rounded-full w-10 h-10 text-yellow-500">
                    <MdLocationOn className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{store.title}</h3>
                    <p className="text-white/70 text-xs">{store.address}</p>
                  </div>
                </div>
                <div className="mt-6 text-white/60 text-sm">
                  Open daily · 10am - 11pm
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
}
