import { MutableRefObject } from 'react'

export type ContainerProps = {
  children: React.ReactNode
}

export interface IUseBackgroundController {
  animation: MutableRefObject<null>
  condition: string
}
