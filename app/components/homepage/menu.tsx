import { Marquee } from '~/components/ui/marquee';
import { Button } from '../ui/button';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';

const pizzas = [
  { name: 'Margherita', image: '/assets/images/pizza.png' },
  { name: 'Pepperoni', image: '/assets/images/pizza.png' },
  { name: 'Four Cheese', image: '/assets/images/pizza.png' },
  { name: 'Veggie Supreme', image: '/assets/images/pizza.png' },
  { name: 'BBQ Chicken', image: '/assets/images/pizza.png' },
  { name: 'Hawaiian', image: '/assets/images/pizza.png' },
];

export function Menu() {
  return (
    <section className="mt-16 md:mt-40 pb-20">
      <div className="items-center gap-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative p-2 rounded-2xl">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
            <Marquee
              vertical
              pauseOnHover
              className="h-72 sm:h-80 md:h-96 [--duration:28s]">
              {pizzas.map((pizza) => (
                <div
                  key={pizza.name}
                  className="flex items-center gap-4 bg-black/60 px-4 py-3 border border-yellow-500/20 rounded-xl">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="border border-yellow-500/40 rounded-full w-12 h-12 object-cover"
                  />
                  <span className="text-lg">{pizza.name}</span>
                </div>
              ))}
            </Marquee>
            <Marquee
              vertical
              reverse
              pauseOnHover
              className="hidden md:block h-72 sm:h-80 md:h-96 [--duration:28s]">
              {pizzas.map((pizza) => (
                <div
                  key={`${pizza.name}-reverse`}
                  className="flex items-center gap-4 bg-black/60 px-4 py-3 border border-yellow-500/20 rounded-xl">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="border border-yellow-500/40 rounded-full w-12 h-12 object-cover"
                  />
                  <span className="text-lg">{pizza.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="top-0 absolute inset-x-0 bg-gradient-to-b from-black to-transparent h-10 pointer-events-none" />
          <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-black to-transparent h-10 pointer-events-none" />
        </div>
        <div className="space-y-4">
          <h4 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            Can't choose a pizza?{' '}
            <span className="text-yellow-500 pacifico">
              Let's decide for you.
            </span>
          </h4>
          <h4 className="md:max-w-md text-white/70">
            Scroll the list to check out our collections.
          </h4>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/assets/images/downarrow.png"
              alt=""
              aria-hidden="true"
              className="w-20 h-20"
            />
            <InteractiveHoverButton className="bg-yellow-500 px-6 py-1.5 border border-black rounded-xl text-black hover:text-white text-base cursor-pointer">
              <h3 className="text-base">Explore Menu</h3>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
}
