const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

parseFloat(leoBalance)
parseFloat(sarahBalance)
const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = `${leoName} + ${leoSurname} + \"Owed\" + \"R\" + ${sarahBalance}\n`
const sarah = `${sarahName} + ${sarahSurname} + \"Owed\" + \"R\" + ${sarahBalance}\n`
const total = "Total amount owed: "

const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)