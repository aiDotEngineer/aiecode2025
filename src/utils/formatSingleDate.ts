export function formatSingleDate(date: string) {
  const [_, month, day] = date.split('-');

  if (!month || !day) throw new Error('Invalid date format');

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const formattedDate = `${monthNames[parseInt(month) - 1]} ${parseInt(day)}`;

  return formattedDate;
}
