// Regenerates prices.json from site.js. Run after changing any price/coupon:  node tools/build-prices.js
// The Google script reads https://zoroluna.shop/prices.json to price every order server-side.
const fs = require('fs'), path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'site.js'), 'utf8').split('const $ =')[0];
const cfg = new Function(src + ';return {PRODUCTS,COUPONS,SHIP_FREE,SHIP_FEE,COD_FEE,PREPAID_OFF}')();
const products = {};
cfg.PRODUCTS.forEach(p => { products[p.id] = { n: p.n, p: p.p }; });
const out = { products, coupons: cfg.COUPONS, shipFree: cfg.SHIP_FREE, shipFee: cfg.SHIP_FEE, codFee: cfg.COD_FEE, prepaidOff: cfg.PREPAID_OFF };
fs.writeFileSync(path.join(__dirname, '..', 'prices.json'), JSON.stringify(out));
console.log('prices.json written —', Object.keys(products).length, 'products');
