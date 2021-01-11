import { v4 as uuid } from 'uuid';
import faker from 'faker';

// id serial NOT NULL,
// code text NOT NULL,
// name text NOT NULL,
// thumbnail varchar(155) NULL,
// detail text NULL,
// rate_id int4 NULL,
// seen_count int4 NOT NULL DEFAULT 0,
// price int4 NULL,
// store_status text NULL,
// warranty text NULL,
// is_deleted bool NOT NULL DEFAULT false,
// created_at timestamptz NOT NULL DEFAULT now(),
// updated_at timestamptz NOT NULL DEFAULT now(),
// category_id int4 NULL,
// product_type_id int4 NULL,
// url text NULL,

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
  id: uuid(),
  createdAt: '27/03/2019',
  description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
  media: '/static/images/products/product_1.png',
  title: 'Dropbox',
  totalDownloads: '594',

  code: faker.random.alphaNumeric(10),
  name: faker.name.title(),
  imageUrl: faker.image.imageUrl(),
  thumbnail: faker.image.imageUrl(),
  price: faker.random.number(),
  seenCount: faker.random.number(),
  detailText: faker.random.words(),
  url: faker.internet.url(),
  qrCode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'

}));

export default data;
