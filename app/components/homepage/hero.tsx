import { Button } from '~/components/ui/button';
import { FaHandPointer } from 'react-icons/fa';

export function Hero() {
  return (
    <>
      <div className="h-10 sm:h-14 md:h-20" />
      <div className="relative overflow-hidden">
        <img
          src="/assets/images/pizza.png"
          alt=""
          aria-hidden="true"
          className="top-2 -left-6 z-0 absolute opacity-20 w-20 sm:w-24 md:w-28 -rotate-12 pointer-events-none select-none"
        />
        <img
          src="/assets/images/pizza.png"
          alt=""
          aria-hidden="true"
          className="top-1/3 right-0 z-0 absolute opacity-20 w-24 sm:w-28 md:w-32 rotate-6 pointer-events-none select-none"
        />
        <img
          src="/assets/images/pizza.png"
          alt=""
          aria-hidden="true"
          className="bottom-0 left-1/4 z-0 absolute opacity-20 w-20 sm:w-24 md:w-28 rotate-12 pointer-events-none select-none"
        />
        <div className="z-10 relative items-start gap-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-full">
          <section className="gap-5 grid">
            <h2 className="text-yellow-500 text-xl md:text-3xl">
              Hungry for Pizza?
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-5xl">
              The Tastiest and best Italiano Pizza in{' '}
              <span className="text-yellow-500">Pizzeria</span> .
            </h3>

            <p className="md:max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              voluptatum vitae iste. Magnam sit amet sapiente quo, quidem et
              quaerat nam cum autem minus ullam facere tempore nihil mollitia
              accusantium?
            </p>

            <div className="flex gap-3 lg:pt-5">
              <Button className="bg-yellow-500 px-8 py-3 border border-black rounded-xl text-black hover:text-white text-base cursor-pointer">
                <h3>Order Online</h3>
                <FaHandPointer className="ml-2 w-5 h-5" />
              </Button>
              <Button className="bg-transparent hover:bg-yellow-500 px-8 py-3 border border-white hover:border-none rounded-xl hover:text-black text-base transition cursor-pointer">
                <h3>See Menu</h3>
              </Button>
            </div>
          </section>
          <section>
            <div className="border border-yellow-500/40 rounded-2xl h-[14rem] sm:h-[16rem] md:h-[20rem] lg:h-[25rem] overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline>
                <source src="/assets/videos/pizzavideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
