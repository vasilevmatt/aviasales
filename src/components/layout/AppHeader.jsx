import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LoadingBar from 'react-top-loading-bar'

export default function AppHeader() {
  const [progress, setProgress] = useState(0)
  const tickets = useSelector((state) => state.tickets)

  useEffect(() => {
    if (tickets.tickets.length > 7000) {
      setProgress(80)
    } else if (tickets.tickets.length > 6000) {
      setProgress(65)
    } else if (tickets.tickets.length > 4000) {
      setProgress(55)
    } else if (tickets.tickets.length > 3000) {
      setProgress(40)
    } else if (tickets.tickets.length > 1500) {
      setProgress(20)
    } else if (tickets.tickets.length > 100) {
      setProgress(5)
    }

    if (!tickets.loading) {
      setProgress(100)
    }
  }, [tickets.tickets.length, tickets.loading])

  return (
    <header>
      <LoadingBar color="#2196F3" progress={progress} onLoaderFinished={() => setProgress(0)} />
    </header>
  )
}
