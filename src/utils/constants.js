/* eslint-disable import/prefer-default-export */
import { v4 as uuid } from 'uuid';
import faker from 'faker';

const SHOW_MENU_THRESHOLD = 220;
const DEFAULT_HEADER_HEIGHT = 34;

const CONTACT_INFOS = [
  { name: 'Mr A', phone: '0913247592' },
  { name: 'Ms B', phone: '0323874238' }
];

const FAKE_PROD = {
  id: uuid(),
  createdAt: '27/03/2019',
  description: 'Chuyên Tư Vấn Máy Tính Thiết Kế Đồ Họa Theo Yêu Cầu.',
  title: 'Dropbox',
  totalDownloads: '594',

  code: faker.random.alphaNumeric(10),
  name: 'PC ĐỒ HỌA AP B450 RYZEN 5 5600X RAM 8GB GTX',
  imageUrl: `/static/images/products/${Math.floor(Math.random() * 8) + 1}.png`,
  thumbnail: faker.image.imageUrl(),
  price: faker.random.number(),
  seenCount: faker.random.number(),
  detailText: faker.random.words(),
  url: `laptop ${faker.random.word()}`,
  qrCode: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'
};

export {
  SHOW_MENU_THRESHOLD, DEFAULT_HEADER_HEIGHT, CONTACT_INFOS,
  FAKE_PROD
};
