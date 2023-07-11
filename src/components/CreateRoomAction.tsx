'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'

import { useCreateRoom } from '@/mutations'

export const CreateRoomAction = () => {
  const router = useRouter()
  const { createRoom, isCreatingRoom } = useCreateRoom()

  return (
    <Button
      color="primary"
      variant="shadow"
      onClick={() =>
        createRoom(undefined, {
          onSuccess: ({ token }) => {
            router.push(`/room/${token}`)
          }
        })
      }
      isLoading={isCreatingRoom}
    >
      Create planning room
    </Button>
  )
}
