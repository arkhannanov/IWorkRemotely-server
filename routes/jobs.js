const express = require('express');
const router = express.Router();
const Job = require('./../models/Job');
const multer = require('multer');

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

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.json({message: err});
  }
});

router.post('/', upload.single('logo'), async (req, res) => {

  const job = new Job({
    jobTitle: req.body.jobTitle,
    category : req.body.category,
    jobType : req.body.jobType,
    headOffice : req.body.headOffice,
    region : req.body.region,
    applyLink : req.body.applyLink,
    jobDescription : req.body.jobDescription,
    name : req.body.name,
    companyStatement : req.body.companyStatement,
    logo : req.file.path,
    websiteURL : req.body.websiteURL,
    email : req.body.email,
    aboutCompany : req.body.aboutCompany,
    status : req.body.status,
    payment : req.body.payment
  });
  try {
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
    const removedJob = await Post.remove({_id: req.params.jobId});
    res.json(removedJob);
  } catch (err) {
    res.json({message: err});
  }
});


module.exports = router;