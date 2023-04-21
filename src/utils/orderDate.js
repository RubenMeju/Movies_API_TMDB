export const orderDate = (fecha) => {
  const fecha2 = fecha.split('-')
  const modificado = fecha2[2] + '/' + fecha2[1] + '/' + fecha2[0]
  return modificado
}
