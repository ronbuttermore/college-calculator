const { Schema, model } = require('mongoose');

const searchSchema = new Schema(
  
    {
      university: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 200
      },
      degree: {
        type: String,
//        required: true,
        unique: false,
        trim: true,
        minlength: 1,
        maxlength: 200
      },
      noyears: {
        type: Number,
 //       required: true,
      },
      tuition: {
        type: Number,
 //       required: true
      },
      scholarships: {
        type: Number,
 //       required: false,
        default: 0
      },
      loanAmount: {
        type: Number,
 //       required: true
      },
      loanInterest: {
        type: Number,
  //      required: true
      },
      loanTerm: {
        type: Number,
  //      required: true
      },
      projectedSalary: {
        type: Number,
  //      required: true
      },
      // savedBy: {
      //   type: String
   //   }
    }
  );
  
 // const Search = model('Search', searchSchema);
  
  module.exports = searchSchema;
  