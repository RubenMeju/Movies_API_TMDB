export const orderDate = (date) => {
  console.log('orderDate: ', date)
  const newDate = date.split('-')
  const formatDate = newDate[2] + '/' + newDate[1] + '/' + newDate[0]
  return formatDate
}
