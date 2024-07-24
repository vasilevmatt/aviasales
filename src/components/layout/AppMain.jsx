import SearchFilters from '../SearchFilters/SearchFilters'
import TicketsList from '../TicketsList/TicketsList'

export default function AppMain() {
  return (
    <main className="search">
      <SearchFilters />
      <TicketsList />
    </main>
  )
}
