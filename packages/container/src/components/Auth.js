import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { mount } from 'auth/App'

export default () => {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        // prevent infinite loop
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref}></div>
}
