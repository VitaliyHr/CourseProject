const env = process.env.NODE_ENV;


const standart = {
  MONGO_URI: 'mongodb+srv://VitaliyHr:rZtZ4wS5D8ETAlxC@cluster0-uuhtj.mongodb.net/CourseProject?retryWrites=true&w=majority',
  PORT: 4000,
  USER: 'hryhorivvetal@gmail.com',
  PASS: 'Cqwertyuiop2002',
  URI_MOUNT: '/api',
};


const production = {
  MONGO_URI: standart.MONGO_URI,
  PORT: 80,
  USER: standart.USER,
  PASS: standart.PASS,
  URI_MOUNT: standart.URI_MOUNT,
};


const config = {
  default: standart,
  production,
};

module.exports = config[env];
