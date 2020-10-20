require('../src/db/mongoose');
const User = require('../src/models/user');

// 5f8597ddcc51d1694975b212

// User.findByIdAndUpdate('5f8597ddcc51d1694975b212', { age: 1 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result, 'RESULT');
//   })
//   .catch((e) => console.log(e, 'E'));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('5f8597ddcc51d1694975b212', 69).then((count) => {
  console.log(count, 'COUNT ASYNC');
});
