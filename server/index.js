require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = require('express')();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.get('/', (req, res) => {
  res.json({
    message: 'Docker? Whoa.',
  });
});
const PORT = 8080 | process.env.PORT;
app.listen(PORT, console.log(`Listening on http://localhost:${PORT}/ .`));
