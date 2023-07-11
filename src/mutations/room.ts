import { useMutation } from "@tanstack/react-query"

import { postCreateRoom } from "@/services/api/room"

export const useCreateRoom = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => postCreateRoom(),
  })

  return {
    createRoom: mutate,
    isCreatingRoom: isLoading
  }
}
