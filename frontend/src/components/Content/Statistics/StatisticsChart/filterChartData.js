const getTimePeriodTrainings = (trainings, days) => {
  const oneDay = 1000 * 60 * 60 * 24
  return trainings.filter(training => (Math.abs(new Date() - new Date(training.date)) / oneDay) <= days)
}
const calculateTrainingWeight = (training) => training.map(tr => tr.map(series => parseInt(series[0] * series[1])).reduce((total, s) => total + s)).reduce((total, sum) => total + sum)
const calculateTrainingReps = (training) => training.map(tr => tr.map(series => parseInt(series[1])).reduce((total, s) => total + s)).reduce((total, sum) => total + sum)
const getPartExercisesSeries = (training, exercises, part, partExercise) => {
  const exercisePartIDs = part !== 'None' ? exercises[part].map(exercise => exercise._id) : []
  return part !== 'None'
    ? partExercise === 'None'
      ? training.trainingSeries.filter((series, index) => exercisePartIDs.includes(training.routineExercises[training.activeExercises[index]]))
      : training.trainingSeries.filter((series, index) => exercisePartIDs.includes(training.routineExercises[training.activeExercises[index]]) && training.routineExercises[training.activeExercises[index]] === partExercise)
    : training.trainingSeries
}

const filterChartData = (historyTrainings, filters, exercises) => {
  const timeData = getTimePeriodTrainings(historyTrainings, filters[0][0])
//   const partData = timeData.map(t => getPartExercisesSeries(t, exercises, filters[2][0], filters[3][0]))
//   const data = partData.map(training => {
//     return training.length !== 0
//       ? filters[1][0] === 'Weight' ? calculateTrainingWeight(training) : calculateTrainingReps(training)
//       : []
//   })

  return timeData
}

export default filterChartData
