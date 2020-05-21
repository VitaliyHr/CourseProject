const env = process.env.NODE_ENV;


const standart = {
  MONGO_URI: 'mongodb+srv://VitaliyHr:rZtZ4wS5D8ETAlxC@cluster0-uuhtj.mongodb.net/CourseProject?retryWrites=true&w=majority',
  PORT: 5000,
  USER: 'hryhorivvetal@gmail.com',
  PASS: 'Cqwertyuiop2002',
  URI_MOUNT: '/api',
};


const production = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  USER: process.env.USER,
  PASS: process.env.PASS,
  URI_MOUNT: process.env.URI_MOUNT,
};


const config = {
  default: standart,
  production,
};

module.exports = config[env];
