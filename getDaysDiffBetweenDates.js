const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24)

// пример
getDaysDiffBetweenDates(new Date('2020-10-01'), new Date('2020-10-10')) // 9
