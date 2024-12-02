import express from 'express';

const app = express();
const PORT = 6000;

app.use('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`);
});
