const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
]

const monthNumToName = (monthNum) => {
  return months[monthNum-1]
}

const processDateForDisplay = (date) => {
  let processedDate = date.split('-')
  const year = processedDate[0]
  const monthNum = processedDate[1]
  const month = monthNumToName(monthNum)
  const day = processedDate[2]

  processedDate = `Le ${day} ${month} ${year}.`

  return processedDate
}

export default processDateForDisplay