/* ===== Zoro Luna — shared data, cart and page chrome ===== */
const WHATSAPP = "910000000000"; // EDIT: your number with country code, no +
const SHIP_FREE = 1999, SHIP_FEE = 99, COD_FEE = 50, PREPAID_OFF = 0.05;
const SIZES = ["S", "M", "L", "XL", "XXL"];
const COUPONS = { ZLUNA10: 0.10, WELCOME5: 0.05 };

/* n = number of images (i, i2, i3, i4 ...) */
const PRODUCTS = [
  {id:1,n:"Zenitsu Oversized Tee",c:"Tees",p:1399,o:1799,b:"Bestseller",i:"zenitsu",img:3,fab:"240 GSM combed cotton",fit:"Boxy oversized",d:"A heavyweight oversized tee with a quiet gold-toned graphic. Soft against the skin, structured on the shoulder."},
  {id:2,n:"Eclipse Oversized Tee",c:"Tees",p:1399,o:1799,b:"New",i:"eclipse",img:4,fab:"240 GSM combed cotton",fit:"Drop shoulder",d:"Our signature moon mark, embroidered small and placed with intention. A relaxed drop-shoulder cut in deep black."},
  {id:3,n:"Classic Oversized Tee",c:"Tees",p:1199,o:1499,i:"classic",img:3,fab:"220 GSM combed cotton",fit:"Relaxed",d:"The essential tee, reworked: dense jersey, clean neckline and an easy relaxed fit that drapes beautifully."},
  {id:4,n:"Supima Essential Tee",c:"Tees",p:1299,o:1599,i:"supima",img:3,fab:"Supima cotton",fit:"Regular",d:"Made from long-staple Supima cotton for a silky hand-feel that stays soft wash after wash."},
  {id:5,n:"Medusa Heavy Hoodie",c:"Hoodies",p:2499,o:2999,b:"Limited",i:"medusa",img:3,fab:"400 GSM brushed fleece",fit:"Oversized",d:"Our heaviest hoodie, with an intricate Medusa print across the back. Brushed fleece interior for deep, quiet warmth."},
  {id:6,n:"Midnight Zip Hoodie",c:"Hoodies",p:2799,o:3299,i:"zip",img:3,fab:"380 GSM fleece",fit:"Regular-relaxed",d:"A full-zip hoodie with premium ribbing and a clean, minimal front. Layer it over anything."},
  {id:7,n:"Medusa Sweatshirt",c:"Hoodies",p:1999,o:2499,i:"medusa-sw",img:3,fab:"320 GSM terry",fit:"Relaxed",d:"A soft terry-lined crewneck with a subtle chest print. Easy, warm and effortlessly refined."},
  {id:8,n:"Orbit Sweatshirt",c:"Hoodies",p:1999,o:2499,i:"orbit",img:3,fab:"320 GSM terry",fit:"Relaxed",d:"An embroidered crest on a plush terry sweatshirt, finished with ribbed cuffs that keep their shape."},
  {id:9,n:"Luna Cropped Hoodie",c:"Hoodies",p:1899,o:2399,i:"cropped",img:3,fab:"330 GSM fleece",fit:"Cropped",d:"A cropped, structured hoodie cut for high-rise bottoms. Soft fleece with a flattering shape."},
  {id:10,n:"Rose Crewneck",c:"Hoodies",p:1799,o:2199,i:"pink",img:3,fab:"320 GSM fleece",fit:"Relaxed",d:"A blush crewneck in soft fleece. Calm colour, cloud-like comfort."},
  {id:11,n:"Luna Polo",c:"Essentials",p:1299,o:1599,i:"polo",img:3,fab:"Piqué cotton",fit:"Regular",d:"A refined piqué polo with a tiny embroidered mark. Smart enough for dinner, easy enough for every day."},
  {id:12,n:"Noir Jogger",c:"Bottoms",p:1799,o:2199,i:"jogger",img:3,fab:"Heavy terry",fit:"Tapered",d:"Heavy terry joggers with a tapered leg and zip pockets. Understated, comfortable, endlessly wearable."},
  {id:13,n:"Varsity Jacket",c:"Outerwear",p:3299,o:3999,b:"New",i:"jacket",img:3,fab:"Wool-blend body, rib trims",fit:"Regular",d:"A refined varsity jacket with ribbed collar and cuffs. Layer it over a tee for an easy, polished finish."},
  {id:14,n:"Terry Medusa Tee",c:"Tees",p:1399,o:1799,i:"terrytee",img:3,fab:"Terry-touch cotton",fit:"Oversized",d:"A soft, textured tee with a subtle Medusa mark. Heavy enough to hold its shape, soft enough to live in."},
  {id:15,n:"Terry Oversized Tee",c:"Tees",p:1299,o:1599,i:"terryov",img:3,fab:"240 GSM terry cotton",fit:"Oversized",d:"A boxy terry tee that pairs perfectly with the matching shorts. Relaxed shoulders, clean finish."},
  {id:16,n:"Terry Shorts",c:"Bottoms",p:1199,o:1499,i:"shorts",img:3,fab:"Heavy terry",fit:"Relaxed",d:"Heavy terry shorts with an elastic drawcord waist and a small embroidered mark."},
  {id:17,n:"Moon Sweatpant",c:"Bottoms",p:1899,o:2299,b:"Bestseller",i:"moonpant",img:3,fab:"Heavy fleece",fit:"Tapered",d:"Our signature sweatpant with a small moon emblem. Deep black, soft inside, tapered at the ankle."},
  {id:18,n:"Everyday Sweatpant",c:"Bottoms",p:1799,o:2199,i:"sweatpant",img:3,fab:"Brushed fleece",fit:"Relaxed",d:"An easy everyday sweatpant in soft brushed fleece with a clean, minimal front."},
  {id:19,n:"Noir Sweatshirt",c:"Hoodies",p:1999,o:2499,i:"sweatmen",img:3,fab:"320 GSM fleece",fit:"Relaxed",d:"A classic black crewneck in soft fleece. Understated and endlessly wearable."},
  {id:20,n:"Luna Black Sweatshirt",c:"Women",p:1899,o:2299,i:"sweatwomen",img:3,fab:"320 GSM fleece",fit:"Relaxed",d:"A cosy black sweatshirt with a relaxed cut, made for slow weekends and long flights."},
  {id:21,n:"Sleeveless Tee",c:"Active",p:899,o:1199,i:"sleeveless",img:3,fab:"Breathable cotton blend",fit:"Athletic",d:"A light sleeveless tee for training or summer days, with deep armholes for easy movement."},
  {id:22,n:"Performance Tee",c:"Active",p:999,o:1299,i:"sporttee",img:3,fab:"Quick-dry jersey",fit:"Athletic",d:"A lightweight performance tee that stays dry and comfortable through every session."},
  {id:23,n:"Sports Shorts",c:"Active",p:999,o:1299,i:"sportshorts",img:3,fab:"Quick-dry stretch",fit:"Regular",d:"Lightweight sports shorts with a secure waist and plenty of room to move."},
  {id:24,n:"Studio Sports Bra",c:"Active",p:899,o:1199,i:"bra",img:3,fab:"Soft stretch rib",fit:"Fitted",d:"A supportive, soft sports bra for training, yoga and everyday wear."},
  {id:25,n:"Studio Legging",c:"Active",p:1299,o:1699,i:"legging",img:3,fab:"Four-way stretch",fit:"High-rise",d:"High-rise leggings with a smooth, second-skin feel and four-way stretch."},
  {id:26,n:"Supima Women's Tee",c:"Women",p:1299,o:1599,i:"supimaw",img:3,fab:"Supima cotton",fit:"Relaxed",d:"A silky Supima tee in a relaxed women's cut. Soft, breathable and made to last."},
  {id:27,n:"Zenitsu Women's Tee",c:"Women",p:1399,o:1799,i:"zenitsuw",img:3,fab:"240 GSM cotton",fit:"Oversized",d:"Our Zenitsu graphic tee in an oversized women's fit. Deep black with a subtle gold detail."},
  {id:28,n:"Women's Luna Polo",c:"Women",p:1299,o:1599,i:"polow",img:3,fab:"Piqué cotton",fit:"Regular",d:"A neat piqué polo in a women's fit, finished with a small embroidered mark."},
  {id:29,n:"Classic Piqué Polo",c:"Essentials",p:1399,o:1699,i:"polom",img:3,fab:"Piqué cotton",fit:"Regular",d:"A timeless piqué polo with a clean collar and soft hand-feel. Smart, easy, everyday."},
  {id:30,n:"Tank & Pencil Skirt Set",c:"Women",p:2199,o:2699,i:"tankskirt",img:3,fab:"Stretch crepe",fit:"Fitted",d:"A minimal tank and pencil skirt set with a flattering line. Elegant from day to night."},
  {id:31,n:"Evening Set",c:"Women",p:2499,o:2999,i:"gshd",img:3,fab:"Stretch crepe",fit:"Fitted",d:"A sleek two-piece in deep black with a slit skirt. Made for evenings out."},
  {id:32,n:"Bodycon Dress",c:"Women",p:2299,o:2799,b:"Limited",i:"bodycon",img:3,fab:"Stretch rib",fit:"Fitted",d:"A figure-skimming rib dress with a clean neckline and a subtle slit."},
  {id:33,n:"Oversized Shirt",c:"Essentials",p:1599,o:1999,i:"shirt",img:3,fab:"Cotton poplin",fit:"Oversized",d:"A crisp oversized shirt in soft poplin, easy to wear open over a tee or buttoned up."},
  {id:34,n:"Immortal Hoodie",c:"Hoodies",p:2599,o:3099,b:"Limited",i:"immortal",img:3,fab:"400 GSM brushed fleece",fit:"Oversized",d:"A heavyweight oversized hoodie with a striking back print. Brushed fleece interior and a dropped shoulder."}
];
const CATS = ["All", "Tees", "Hoodies", "Outerwear", "Bottoms", "Women", "Active", "Essentials"];
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const inr = n => "₹" + Math.round(n).toLocaleString("en-IN");
const prod = id => PRODUCTS.find(p => p.id == id);
const imgs = p => Array.from({ length: p.img || 1 }, (_, k) => `img/${p.i}${k ? k + 1 : ""}.jpg`);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* safe storage */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} }
};

/* ===== cart ===== */
const cart = {
  items() { return store.get("zl_cart", []).filter(x => prod(x.id)) },
  save(a) { store.set("zl_cart", a); renderBag(); document.dispatchEvent(new Event("cart:change")) },
  add(id, size, qty = 1) {
    const a = this.items(), f = a.find(x => x.id == id && x.size === size);
    f ? f.qty = Math.min(10, f.qty + qty) : a.push({ id: +id, size, qty });
    this.save(a);
  },
  setQty(k, q) { const a = this.items(); if (!a[k]) return; q <= 0 ? a.splice(k, 1) : a[k].qty = Math.min(10, q); this.save(a) },
  remove(k) { const a = this.items(); a.splice(k, 1); this.save(a) },
  clear() { this.save([]) },
  count() { return this.items().reduce((s, x) => s + x.qty, 0) },
  sub() { return this.items().reduce((s, x) => s + prod(x.id).p * x.qty, 0) },
  coupon() { const c = store.get("zl_coupon", ""); return COUPONS[c] ? c : "" },
  discount() { const c = this.coupon(); return c ? Math.round(this.sub() * COUPONS[c]) : 0 },
  shipping() { const s = this.sub() - this.discount(); return !s || s >= SHIP_FREE ? 0 : SHIP_FEE },
  total(pay = "cod") {
    const base = this.sub() - this.discount();
    const pre = pay === "online" ? Math.round(base * PREPAID_OFF) : 0;
    return base - pre + this.shipping() + (pay === "cod" && base ? COD_FEE : 0);
  }
};

/* ===== product card ===== */
function card(p) {
  const im = imgs(p), off = Math.round((1 - p.p / p.o) * 100);
  return `<a class="p" href="product.html?id=${p.id}">
  <div class="pic">${p.b ? `<span class="badge">${esc(p.b)}</span>` : ""}<img src="${im[0]}" alt="${esc(p.n)}" loading="lazy">${im[1] ? `<img class="alt" src="${im[1]}" alt="" loading="lazy">` : ""}</div>
  <div class="info"><h3>${esc(p.n)}</h3><small>${esc(p.fab)} · ${esc(p.fit)}</small>
  <div class="row"><div class="price">${inr(p.p)}<s>${inr(p.o)}</s></div><span class="add">View</span></div></div></a>`;
}

/* ===== chrome ===== */
function renderChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const on = h => here === h ? ' class="cur"' : "";
  document.body.insertAdjacentHTML("afterbegin", `
<div class="ann">Complimentary shipping across India above ₹1,999 · Cash on delivery available</div>
<header><div class="wrap nav">
  <div class="nl"><button class="burger" aria-label="Menu" id="burger"><i></i><i></i><i></i></button>
  <nav class="links"><a href="shop.html"${on("shop.html")}>Shop</a><a href="index.html#collections">Collections</a><a href="index.html#films">Films</a></nav></div>
  <a href="index.html" class="logo" aria-label="Zoro Luna">Zor<svg class="mo" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5"/><circle class="cr" cx="8.5" cy="9" r="2.6"/><circle class="cr" cx="15.5" cy="14.5" r="3.4"/><circle class="cr" cx="9" cy="16.5" r="1.4"/></svg> Luna<small>Moonlit Luxury</small></a>
  <div class="nr"><nav class="links"><a href="index.html#story">The House</a><a href="info.html"${on("info.html")}>Care</a></nav>
  <div class="acts"><button class="theme" id="theme" aria-label="Switch light or dark theme" title="Switch theme"><svg class="ic-moon" viewBox="0 0 24 24"><path d="M16.8 2.6A9.6 9.6 0 1 0 21.4 16.4 7.6 7.6 0 0 1 16.8 2.6Z"/></svg><svg class="ic-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>
  <button class="cartbtn" id="openCart" aria-label="Open bag"><span>Bag</span><b id="count">0</b></button></div></div>
</div></header>
<div class="mm" id="mm"><a href="index.html">Home</a><a href="shop.html">Shop</a><a href="index.html#films">Films</a><a href="index.html#story">The House</a><a href="info.html">Care</a><a href="cart.html">Bag</a></div>`);
  document.body.insertAdjacentHTML("beforeend", `
<footer><div class="wrap"><div class="fg">
  <div><img src="img/logo.jpg" alt="Z" width="56" height="56" style="border:1px solid var(--line);margin-bottom:1rem"><div class="logo" style="font-size:1.5rem" aria-label="Zoro Luna">Zor<svg class="mo" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11.5"/><circle class="cr" cx="8.5" cy="9" r="2.6"/><circle class="cr" cx="15.5" cy="14.5" r="3.4"/><circle class="cr" cx="9" cy="16.5" r="1.4"/></svg> Luna</div><p style="max-width:300px;margin-top:1rem">Moonlit luxury streetwear. Made to order, in India.</p></div>
  <div><h4>Shop</h4><a href="shop.html?c=Tees">Tees</a><a href="shop.html?c=Hoodies">Hoodies</a><a href="shop.html?c=Women">Women</a><a href="shop.html?c=Active">Active</a><a href="shop.html?c=Essentials">Essentials</a></div>
  <div><h4>Care</h4><a href="info.html#shipping">Shipping</a><a href="info.html#returns">Returns</a><a href="info.html#size">Size guide</a><a href="info.html#faq">FAQ</a></div>
  <div><h4>Connect</h4><a href="#">Instagram</a><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:hello@zoroluna.in">hello@zoroluna.in</a></div>
</div><div class="copy"><span>© 2026 Zoro Luna. All rights reserved.</span><span>Crafted with care in India</span></div></div></footer>
<div class="ov" id="ov"></div>
<aside class="drawer" aria-label="Shopping bag"><div class="dh"><h3>Your Bag</h3><button id="closeCart" aria-label="Close">✕</button></div>
<div class="items" id="items"></div>
<div class="df"><div class="tot"><span>Subtotal</span><span id="total">₹0</span></div><a class="btn solid" href="checkout.html" id="goCheckout">Checkout</a><a class="btn" href="cart.html" style="margin-top:.6rem;width:100%;justify-content:center">View bag</a><small>Free shipping above ₹1,999 · COD available</small></div></aside>`);

  $("#theme").onclick = () => {
    const d = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = d; try { localStorage.setItem("zl_theme", d) } catch {}
    const m = $('meta[name="theme-color"]'); if (m) m.content = d === "dark" ? "#0d0b09" : "#f6f1e9";
  };
  $("#burger").onclick = () => document.body.classList.toggle("menu");
  $("#mm").onclick = () => document.body.classList.remove("menu");
  $("#openCart").onclick = openBag; $("#closeCart").onclick = closeBag; $("#ov").onclick = closeBag;
  $("#items").onclick = e => {
    const b = e.target.closest("[data-a]"); if (!b) return;
    const k = +b.dataset.k, it = cart.items()[k]; if (!it) return;
    b.dataset.a === "rm" ? cart.remove(k) : cart.setQty(k, it.qty + (b.dataset.a === "plus" ? 1 : -1));
  };
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeBag() });
  renderBag();
}
function openBag() { document.body.classList.add("cart") }
function closeBag() { document.body.classList.remove("cart") }
function lineHtml(x, k, mini) {
  const p = prod(x.id);
  return `<div class="it"><a href="product.html?id=${p.id}"><img src="${imgs(p)[0]}" alt=""></a>
  <div class="it-i"><a href="product.html?id=${p.id}">${esc(p.n)}</a><small>Size ${esc(x.size)} · ${inr(p.p)}</small>
  <div class="qty"><button data-a="minus" data-k="${k}" aria-label="Decrease">−</button><span>${x.qty}</span><button data-a="plus" data-k="${k}" aria-label="Increase">+</button></div>
  <button class="rm" data-a="rm" data-k="${k}">Remove</button></div>
  <div class="price">${inr(p.p * x.qty)}</div></div>`;
}
function renderBag() {
  const a = cart.items(); if (!$("#items")) return;
  const c = $("#count"); if (c) c.textContent = cart.count();
  $("#items").innerHTML = a.length ? a.map((x, k) => lineHtml(x, k)).join("") : '<div class="empty">Your bag is empty.<br><a class="btn" href="shop.html" style="margin-top:1.4rem">Start shopping</a></div>';
  $("#total").textContent = inr(cart.sub());
  $("#goCheckout").style.display = a.length ? "" : "none";
}

/* ===== effects ===== */
function initFx() {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target) } }), { threshold: .12 });
  $$(".rv").forEach(el => io.observe(el));
  const vo = new IntersectionObserver(es => es.forEach(x => {
    const v = x.target;
    if (x.isIntersecting) { if (v.preload === "none") v.preload = "auto"; const go = () => { if (v.dataset.on === "1") v.play().catch(() => {}) }; v.dataset.on = "1"; v.addEventListener("canplay", go, { once: true }); go() } else { v.dataset.on = "0"; v.pause() }
  }), { threshold: .25 });
  $$("video[data-lazy]").forEach(v => vo.observe(v));
}
document.addEventListener("DOMContentLoaded", () => { renderChrome(); window.pageInit && pageInit(); initFx() });
