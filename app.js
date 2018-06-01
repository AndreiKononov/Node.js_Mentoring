//const info = require('./config/config');
//const User = require('./models/user');
//const Product = require('./models/product');

import info from './config/config';
import User from './models/user';
import Product from './models/product';

//import {User, Product} from './models/';

console.log(`${info.name}`);

new User();
new Product();
