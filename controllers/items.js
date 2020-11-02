const HttpError = require('../models/http-error');
const { v4: uuidv4 } = require('uuid');

itemsData = [
  {
    id: '1',
    group: 'equipment',
    title: 'Microphone',
    description: 'USB microphone to enhance audio output',
  },
  {
    id: '2',
    group: 'equipment',
    title: 'HDMI Cable',
    description: 'Connect HDMI enabled devices and monitors',
  },
  {
    id: '3',
    group: 'equipment',
    title: 'Kindle E-Book Reader',
    description:
      'Read pre-loaded e-books on academic and pleasure reading topics',
  },
  {
    id: '4',
    group: 'equipment',
    title: 'Apple AV Connector',
    description: 'Connect iPad and Mac Computer to AV devices',
  },
  {
    id: '5',
    group: 'software',
    title: 'iMovie',
    description: 'Apple software used to create videos',
  },
  {
    id: '6',
    group: 'learning',
    title: 'LinkedIn Learning',
    description: 'Thousands of video tutorials on software and other skills',
  },
];

const getItems = (req, res, next) => {
  const data = itemsData;

  if (!itemsData) {
    throw new HttpError('Could not find items.', 404);
  }

  res.json(itemsData);
};

const getItemById = (req, res, next) => {
  const id = req.params.id;

  let item = itemsData.find((item) => item.id === id);

  if (!item) {
    return next(new Error('Could not find an item with the provided id.', 404));
  }

  res.json(item);
};

const createItem = (req, res, next) => {
  const { title, description, group } = req.body;
  const createdItem = {
    id: uuidv4(),
    title,
    description,
    group,
  };

  itemsData.push(createdItem);

  res.status(201).json({ item: createdItem });
};

exports.getItemById = getItemById;
exports.getItems = getItems;
exports.createItem = createItem;
