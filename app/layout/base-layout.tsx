import type { ReactNode } from 'react';
import { Navbar } from '~/components/shared/navbar';


type BaseLayoutProps = {
  children: ReactNode;
};

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="flex flex-col bg-black min-h-screen text-white">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
