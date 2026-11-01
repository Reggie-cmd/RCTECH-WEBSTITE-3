// RC TECH Part 3: product data is rendered dynamically and can be searched/sorted.
const rcProducts = [
  { name: 'USB-C Cable', description: 'Everyday charging and connectivity cable.', price: 99, image: 'images/cable.svg', alt: 'Illustration of a USB-C cable', tags: 'usb c cable charging connectivity' },
  { name: 'Fast Charger', description: 'Compact charger for compatible devices.', price: 199, image: 'images/charger.svg', alt: 'Illustration of a wall charger', tags: 'fast charger power charging adapter' },
  { name: 'Phone Covers', description: 'Protective covers for selected devices.', price: 149, image: 'images/cover.svg', alt: 'Illustration of a phone cover', tags: 'phone cover case protection' },
  { name: 'Audio Accessories', description: 'Accessories for everyday listening and calls.', price: 129, image: 'images/audio.svg', alt: 'Illustration of audio accessories', tags: 'audio headphones sound listening' },
  { name: 'Adapters', description: 'Useful adapters for connecting different devices.', price: 119, image: 'images/adapter.svg', alt: 'Illustration of a USB adapter', tags: 'adapter usb connection converter' }
];
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('#productGrid');
  if (!grid) return;
  const search = document.querySelector('#productSearch');
  const sort = document.querySelector('#productSort');
  const count = document.querySelector('#productCount');
  const empty = document.querySelector('#noProducts');
  const render = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let items = rcProducts.filter(p => `${p.name} ${p.description} ${p.tags}`.toLowerCase().includes(term));
    const order = sort?.value || 'featured';
    if (order === 'low') items.sort((a,b) => a.price-b.price);
    if (order === 'high') items.sort((a,b) => b.price-a.price);
    if (order === 'name') items.sort((a,b) => a.name.localeCompare(b.name));
    grid.innerHTML = items.map(p => `<article class="card product-card"><img src="${p.image}" alt="${p.alt}" loading="lazy" width="480" height="300"><h2>${p.name}</h2><p>${p.description}</p><span class="product-price">From R${p.price.toFixed(2)}</span><a class="btn btn-secondary product-enquire" href="enquiry.html">Enquire about this product</a></article>`).join('');
    if (count) count.textContent = `${items.length} product${items.length === 1 ? '' : 's'} found`;
    if (empty) empty.hidden = items.length !== 0;
    grid.hidden = items.length === 0;
  };
  search?.addEventListener('input', render);
  sort?.addEventListener('change', render);
  render();
});
