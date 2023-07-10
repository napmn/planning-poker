'use client'

import { NextUIProvider } from '@nextui-org/system'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>
}
