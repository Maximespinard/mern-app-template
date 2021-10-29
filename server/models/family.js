import mongoose from 'mongoose';

const familySchema = mongoose.Schema({
  name: String,
  age: Number,
});

const Family = mongoose.model('Family', familySchema, 'family');

export default Family;
