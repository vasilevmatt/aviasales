import { useDispatch, useSelector } from 'react-redux'
import classes from './SortBy.module.scss'
import { setSortOrder } from '../../redux/actions'

export default function SortBy() {
  const sortOrder = useSelector((state) => state.sort.order)
  const dispatch = useDispatch()

  const handleSortChange = (order) => {
    dispatch(setSortOrder(order))
  }
  return (
    <div className={`results__sort ${classes['sort-by']}`}>
      <button
        className={`
          ${classes['sort-by__button']} 
          ${sortOrder === 'Самый дешевый' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => handleSortChange('Самый дешевый')}
      >
        Самый дешевый
      </button>
      <button
        className={`
          ${classes['sort-by__button']} 
          ${sortOrder === 'Самый быстрый' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => handleSortChange('Самый быстрый')}
      >
        Самый быстрый
      </button>
      <button
        className={`
          ${classes['sort-by__button']} 
          ${sortOrder === 'Оптимальный' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => handleSortChange('Оптимальный')}
      >
        Оптимальный
      </button>
    </div>
  )
}
