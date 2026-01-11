import { motion } from 'motion/react';
import type { Route } from './+types/home';
import { Hero } from '~/components/homepage/hero';
import { Menu } from '~/components/homepage/menu';
import { Stores } from '~/components/homepage/stores';
import { LightRays } from '~/components/ui/light-rays';
import { Pointer } from '~/components/ui/pointer';
import { ProgressiveBlur } from '~/components/ui/progressive-blur';
import { DotPattern } from '~/components/ui/dot-pattern';
import { cn } from '~/lib/utils';
import { SmoothCursor } from '~/components/ui/smooth-cursor';
import { ShootingStars } from '~/components/ui/shooting-stars';
import { StarsBackground } from '~/components/ui/stars-background';
import { Spotlight } from '~/components/ui/spotlight-new';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="relative flex flex-col justify-start md:justify-center items-center px-10 lg:px-20 overflow-hidden">
      <ShootingStars
        minSpeed={20}
        maxSpeed={45}
        minDelay={600}
        maxDelay={1800}
        starColor="#eab308"
        trailColor="#eab308"
        starWidth={14}
        starHeight={2}
      />
      <StarsBackground
        starDensity={0.00435}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={0.4}
      />

      <Hero />
      <Menu />
      <Stores />
      <ProgressiveBlur height="10%" position="bottom" />
      <Spotlight height={2100} width={1000} />
    </div>
  );
}
