import * as express from 'express';
import Message from '../models/forumModel';

let router = express.Router();

router.get('/', (req, res) => {
  Message.find().then((messages) => {
    res.json(messages);
  }).catch((err) => {
    res.status(500);
    console.error(err);
  })
});


export default router;
