import { useEffect, useRef } from 'react'

import { IUseLoadingRequestController } from './LoadingRequest.props'

export const useLoadingRequestController = (): IUseLoadingRequestController => {
  const animation = useRef(null)

  useEffect(() => {
    if (animation.current) {
      // @ts-expect-error
      animation?.current.play()
    }
  }, [])

  return {
    animation
  }
}
