const SecondaryCard = ({className}) => {
  return (
    <div className={`${className} absolute transform h-card-mob-height w-card-mob-width sm:h-card-height sm:w-card-width bg-white dark:bg-gray-800 px-8 rounded-xl shadow-card dark:shadow-cardDark hover:shadow-cardhover dark:hover:shadow-cardhoverDark`}>
    </div>
  )
}

export default SecondaryCard