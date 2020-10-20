require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5f7e0c0273f2ec1b403cfed9')
  .then((res) => {
    console.log(res);

    return Task.countDocuments({ completed: false });
  })
  .then((amount) => console.log(amount))
  .catch((e) => console.log(e, 'E'));

const deleteTaskAndCount = async (id) => {
  const removedTask = await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount('5f7e0c0273f2ec1b403cfed9')
  .then((c) => {
    console.log(c, 'count await');
  })
  .catch((e) => console.log(e, 'e'));
