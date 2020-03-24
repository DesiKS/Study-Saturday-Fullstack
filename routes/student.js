const router = require('express').Router();
const Student = require('../db/models/students');
const Test = require('../db/models/tests');

router.get('/:studentId', function(req, res, next) {
  Student.findById(req.params.studentId)
    .then(student => {
      if (!student) return res.sendStatus(404);
      res.json(student);
    })
    .catch(next);
});

router.get('/', function(req, res, next) {
  Student.findAll({ include: { all: true } }).then(students =>
    res.json(students)
  );
});

router.post('/', async function(req, res, next) {
  try {
    const newStudent = await Student.create(req.body);
    await Test.create({
      subject: 'Testing',
      grade: 99,
      studentId: newStudent.id
    });

    const foundStudent = await Student.findByPk(newStudent.id, {
      include: [{ model: Test }] // include: [{ all: true }]
    });
    res.status(200).json(foundStudent);
  } catch (error) {
    next(error);
  }
});

// router.post('/', function(req, res, next) {
//   Student.create(req.body)
//     .then(studentNoTest => {
//       return Promise.all([
//         Test.create({
//           subject: 'Programming',
//           grade: 90,
//           studentId: studentNoTest.id
//         }),
//         studentNoTest
//       ]);
//     })
//     .then(([test, student]) => {
//       Student.findById(student.id, { include: { all: true } }).then(
//         foundStudent => {
//           res.json(foundStudent);
//         }
//       );
//     })
//     .catch(next);
// });

router.put('/:id', function(req, res, next) {
  Student.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
    .then(test => res.status(201).json(test[1][0]))
    .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
});

module.exports = router;
