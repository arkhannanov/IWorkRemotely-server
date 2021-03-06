const mongoose = require('mongoose');

const moment = require('moment-timezone');
const dateMoscow = moment.tz(Date.now(), "Europe/Moscow");

const JobSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  headOffice: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  tags : {
    type: String,
    required: false
  },
  applyLink: {
    type: String,
    required: true
  },
  // jobDescription : {
  //   type: String,
  //   required: true
  // },
  // name: {
  //   type: String,
  //   required: true
  // },
  // companyStatement  : {
  //   type: String,
  //   required: true
  // },
  // logo: {
  //   type: String,
  //   required: false
  // },
  // websiteURL  : {
  //   type: String,
  //   required: true
  // },
  // email : {
  //   type: String,
  //   required: true
  // },
  // aboutCompany  : {
  //   type: String,
  //   required: true
  // },
  // status  : {
  //   type: String,
  //   required: false
  // },
  // payment  : {
  //   type: Boolean,
  //   required: true
  // }
});

JobSchema.set('timestamps', true);
JobSchema.set('autoIndex', false);

module.exports = mongoose.model('Jobs', JobSchema);