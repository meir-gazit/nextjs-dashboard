import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
 
export default function Page() {
  return (
    // ...
    <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      <strong>Welcome to Acme.</strong> <br />
	  This is the example for the{' '} <br />
      <a href="https://nextjs.org/learn/" className="text-blue-500">
        Next.js Learn Course
      </a>, <br />
       brought to you by Vercel.<br />
    </p>
    // ...
  );
}