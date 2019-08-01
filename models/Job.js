const mongoose = require('mongoose');

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
  tags : {
    type: String,
    required: false
  },
  headOffice: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  applyLink: {
    type: String,
    required: true
  },
  jobDescription : {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  companyStatement  : {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: false
  },
  websiteURL  : {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true
  },
  aboutCompany  : {
    type: String,
    required: true
  },
  status  : {
    type: String,
    required: false
  },
  payment  : {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Jobs', JobSchema);