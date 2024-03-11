import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SecondPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center space-y-8 p-24'>
      <h1 className='text-4xl'>Second Page</h1>
      <Link className={cn(buttonVariants())} href='/'>
        Home page
      </Link>
    </main>
  );
}
