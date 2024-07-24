import Card from '../Card/Card'
import SortBy from '../SortBy/SortBy'
import classes from './TicketsList.module.scss'

export default function TicketsList() {
  return (
    <div className={`${classes.search__results} ${classes.results}`}>
      <SortBy />
      <Card />
      <Card />
      <Card />
      <button className={`${classes['results__show-more-button']}`}>Показать еще 5 билетов!</button>
    </div>
  )
}
