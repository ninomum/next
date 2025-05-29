'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
  return (
    <div>
      <Image src="/1.jpg" alt="Profile" width={100} height={100} />
      <h1>Hello, Blog Post Page!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
}

