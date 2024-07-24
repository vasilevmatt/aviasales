import classes from './Card.module.scss'

export default function Card() {
  return (
    <div className={`${classes.card}`}>
      <div className={`${classes.card__header}`}>
        <span className={`${classes.card__price}`}>13 400 Р</span>
        <img src="https://pics.avs.io/330/108/S7.png" alt="airline" width={110} height={36} />
      </div>
      <div className={`${classes.card__route} ${classes.route}`}>
        <div className={`${classes.route__line}`}>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>MOW - HKT</p>
            <p className={`${classes.info__span}`}>10:45 - 08:00</p>
          </div>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>В пути</p>
            <time dateTime="" className={`${classes.info__span} ${classes.info__time}`}>
              21ч 15м
            </time>
          </div>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>2 пересадки</p>
            <p className={`${classes.info__span}`}>HKG, JNB</p>
          </div>
        </div>
        <div className={`${classes.route__line}`}>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>MOW - HKT</p>
            <p className={`${classes.info__span}`}>11:20 - 00:50</p>
          </div>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>В пути</p>
            <time dateTime="" className={`${classes.info__span} ${classes.info__time}`}>
              13ч 30м
            </time>
          </div>
          <div className={`${classes['card__info-block']} info`}>
            <p className={`${classes.info__heading}`}>1 пересадка</p>
            <p className={`${classes.info__span}`}>HKG</p>
          </div>
        </div>
      </div>
    </div>
  )
}
