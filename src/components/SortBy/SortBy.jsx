import { useDispatch, useSelector } from 'react-redux'
import classes from './SortBy.module.scss'
import { setSortOrder } from '../../redux/actions'

export default function SortBy({ setShown }) {
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
          ${sortOrder === 'cheapest' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => {
          handleSortChange('cheapest')
          setShown(5)
        }}
      >
        Самый дешевый
      </button>
      <button
        className={`
          ${classes['sort-by__button']} 
          ${sortOrder === 'fastest' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => {
          handleSortChange('fastest')
          setShown(5)
        }}
      >
        Самый быстрый
      </button>
      <button
        className={`
          ${classes['sort-by__button']} 
          ${sortOrder === 'best' ? classes['sort-by__button--active'] : ''}`}
        onClick={() => {
          handleSortChange('best')
          setShown(5)
        }}
      >
        Оптимальный
      </button>
    </div>
  )
}
