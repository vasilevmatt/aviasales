import { Online, Offline } from 'react-detect-offline'
import SearchFilters from '../SearchFilters/SearchFilters'
import TicketsList from '../TicketsList/TicketsList'

export default function AppMain() {
  return (
    <main className="search">
      <SearchFilters />
      <Online>
        <TicketsList />
      </Online>
      <Offline>
        <p>Нет подключения к сети, попробуйте позже...</p>
      </Offline>
    </main>
  )
}
