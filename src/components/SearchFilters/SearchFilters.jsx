import { useDispatch, useSelector } from 'react-redux'
import { setAllFilters, setFilter } from '../../redux/actions'
import Checkbox from '../utils/Checkbox/Checkbox'
import classes from './SearchFilter.module.scss'

export default function SearchFilters() {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const handleFilters = (filterName) => {
    if (filterName === 'all') {
      dispatch(setAllFilters(!filters.all))
    } else {
      dispatch(setFilter(filterName))
    }
  }

  return (
    <form className={`search__filters ${classes.filters}`}>
      <p className={`${classes.filters__heading}`}>Количество пересадок</p>
      <Checkbox checked={filters.all} onChange={() => handleFilters('all')}>
        Все
      </Checkbox>
      <Checkbox onChange={() => handleFilters('noStops')} checked={filters.noStops}>
        Без пересадок
      </Checkbox>
      <Checkbox onChange={() => handleFilters('oneStop')} checked={filters.oneStop}>
        1 пересадка
      </Checkbox>
      <Checkbox onChange={() => handleFilters('twoStops')} checked={filters.twoStops}>
        2 пересадки
      </Checkbox>
      <Checkbox checked={filters.threeStops} onChange={() => handleFilters('threeStops')}>
        3 пересадки
      </Checkbox>
    </form>
  )
}
