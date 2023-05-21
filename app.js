const lo = require('lodash')

const items = [1,[2,[3,[4]]]]
const newsItems = lo.flattenDeep(items);
console.log(newsItems);