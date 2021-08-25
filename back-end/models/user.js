import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    reqired: true,
  },
  password: {
    type: String,
    reqired: true,
  },
  id: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
