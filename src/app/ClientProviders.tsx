'use client'

import { NextUIProvider } from '@nextui-org/system'

export const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
