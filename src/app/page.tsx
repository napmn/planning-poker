import Image from 'next/image'
import { Button } from '@nextui-org/button'

import { db } from '@/lib/db'
import { UsersTable } from '@/lib/db/schema'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
    </main>
  )
}
