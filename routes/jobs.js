const express = require('express');
const router = express.Router();
const Job = require('./../models/Job');
const multer = require('multer');
let moment = require('moment');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './logo')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    filSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter
})

//GET Программирование

router.get('/programming', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Программирование',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      $and: [{category: 'Программирование'}, {status: 'best'}, {createdAt: {$gt: _1dayAgo}}]
    }).countDocuments();


    if (bestJobsAmount > 9){
       allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Программирование'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Программирование'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Программирование'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Программирование'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET Дизайн

router.get('/design', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Дизайн',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Дизайн',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Дизайн'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Дизайн'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Дизайн'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Дизайн'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET Поддержка клиентов

router.get('/customer-support', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Поддержка клиентов',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Поддержка клиентов',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Поддержка клиентов'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Поддержка клиентов'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Поддержка клиентов'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Поддержка клиентов'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET Копирайтинг

router.get('/copyrighting', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Копирайтинг',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Копирайтинг',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Копирайтинг'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Копирайтинг'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Копирайтинг'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Копирайтинг'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET DevOps & Системное администрирование

router.get('/devops-system-administration', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'DevOps & Системное администрирование',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'DevOps & Системное администрирование',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'DevOps & Системное администрирование'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'DevOps & Системное администрирование'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'DevOps & Системное администрирование'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'DevOps & Системное администрирование'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});


//GET Продажи & Маркетинг

router.get('/sales-marketing', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Продажи & Маркетинг',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Продажи & Маркетинг',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Продажи & Маркетинг'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Продажи & Маркетинг'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Продажи & Маркетинг'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Продажи & Маркетинг'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});



//GET Бизнес & Менеджмент

router.get('/business-management', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Бизнес & Менеджмент',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Бизнес & Менеджмент',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Бизнес & Менеджмент'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Бизнес & Менеджмент'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Бизнес & Менеджмент'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Бизнес & Менеджмент'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET Финансы & Юриспруденция

router.get('/finance-legal', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Финансы & Юриспруденция',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Финансы & Юриспруденция',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Финансы & Юриспруденция'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Финансы & Юриспруденция'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Финансы & Юриспруденция'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Финансы & Юриспруденция'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});


//GET Продуктолог

router.get('/product', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Продуктолог',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Продуктолог',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Продуктолог'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Продуктолог'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Продуктолог'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Продуктолог'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});

//GET Все другие

router.get('/all-others', async (req, res) => {
  try {

    let allOtherJobsAmount = 0;
    const _1dayAgo = moment().utc().subtract(1, 'days').toDate();

    const bestJobs = await Job.find({
      category: 'Все другие',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).sort({createdAt: -1}).limit(9);

    const bestJobsAmount = await Job.find({
      category: 'Все другие',
      status: 'best',
      createdAt: {$gt: _1dayAgo}
    }).countDocuments();


    if (bestJobsAmount > 9){
      allOtherJobsAmount = 1;
    } else {
      allOtherJobsAmount = 10 - bestJobsAmount;
    }

    const allJobs = await Job.find({
      category: 'Все другие'
    }).sort({createdAt: -1});

    const allJobsAmount = await Job.find({
      category: 'Все другие'
    }).countDocuments();

    const allOtherJobs = await Job.find({
      $or: [
        {$and: [{category: 'Все другие'}, {status: {$ne: 'best'}}]},
        {$and: [{category: 'Все другие'}, {status: 'best'}, {createdAt: {$lte: _1dayAgo}}]}
      ]
    }).sort({createdAt: -1}).limit(allOtherJobsAmount);

    res.json({
      bestJobs: bestJobs,
      allOtherJobs: allOtherJobs,
      lastPostTime: allJobs[0].createdAt,
      allJobsAmount: allJobsAmount
    });
  } catch (err) {
    res.json({message: err});
  }
});


router.post('/', upload.single('logo'), async (req, res) => {

  const job = new Job({
    jobTitle: req.body.jobTitle,
    category: req.body.category,
    jobType: req.body.jobType,
    headOffice: req.body.headOffice,
    region: req.body.region,
    tags: req.body.tags,
    applyLink: req.body.applyLink,
    // jobDescription: req.body.jobDescription,
    // name: req.body.name,
    // companyStatement: req.body.companyStatement,
    // // logo: req.file.path,
    // websiteURL: req.body.websiteURL,
    // email: req.body.email,
    // aboutCompany: req.body.aboutCompany,
    // status: req.body.status,
    // payment: req.body.payment
  });
  try {
    console.log(req.body);
    const savedJob = await job.save();
    res.json(savedJob);
  } catch (err) {
    res.json({message: err});
  }
});

router.get('/:jobId', async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    res.json(post);
  } catch (err) {
    res.json({message: err});
  }
});

router.delete('/:jobId', async (req, res) => {
  try {
    const removedJob = await Job.remove({_id: req.params.jobId});
    res.json(removedJob);
  } catch (err) {
    res.json({message: err});
  }
});


module.exports = router;