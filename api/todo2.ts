import * as express from 'express';
import MyToDo from '../models/toDoListModel';

let router = express.Router();

router.get('/', (req, res) => {
  MyToDo.find().then((list) => {
    res.json(list);
  }).catch((err) => {
    res.status(500);
    console.error(err);
  })
});

// Get a single item by id
router.get('/:id', (req, res) => {
  MyToDo.findById(req.params['id']).then((item) => {
    res.json(item);
  });
});

// Create new item
router.post('/',(req, res) => {
  let item = new MyToDo();
  item.name = req.body.name;
  item.description = req.body.description;

  console.log ('-------------')
  console.log (req.body);
  console.log (item);

  // save new item
  item.save().then((newItem) => {
    res.json(newItem);
  }).catch((err) => {
    console.log (err);
    res.status(400).json(err);
  });
});

// update list item

router.post('/:id', (req, res) => {
    let listId = req.params.id;
    console.log("List Id:",listId);
    MyToDo.findById(listId).then((item) => {
        item.name = req.body.name;
        console.log("Item's name", item.name);
        item.description = req.body.description;

        // save upadate item

        item.save().then((updatedItem) => {
            res.json(updatedItem);
        }).catch((err) => {
            res.status(400).json(err);
        })
    }).catch(() => {
        res.sendStatus(404);
    });
});

router.delete('/:id', (req, res) => {
  let itemId = req.params['id'];

  MyToDo.remove({_id:itemId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500);
    console.log(err);
  })
});








export default router;

















// duck
