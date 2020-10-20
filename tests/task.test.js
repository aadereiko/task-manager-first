const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');
const { userOne, setupDatabase, taskThree } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: 'From my test',
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test('Should return the list of tasks of user', async () => {
  const response = await request(app)
    .get('/tasks/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  expect(response.body.length).toEqual(2);
});

test('Should not permit to delete the task whicn doesnt belong the user', async () => {
  await request(app)
    .delete(`/tasks/${taskThree._id}/own`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(404);

  const task = await Task.findById(taskThree._id);
  expect(task).not.toBeNull();
});
