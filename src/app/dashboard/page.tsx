import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nino',
  description: 'nino1213',
}

export default function Page() {
  return (
    <div>
      <Image src="/1.jpg" alt="Profile" width={100} height={100} />
      <h1>Hello, Blog Post Page!</h1>
    </div>
  );
}

