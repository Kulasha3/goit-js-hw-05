const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .reduce((genderTotalBal, user) => genderTotalBal + user.balance, 0);
};

const allNewUsers = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(allNewUsers, 'male')); // 12053

console.log(getTotalBalanceByGender(allNewUsers, 'female')); // 8863 