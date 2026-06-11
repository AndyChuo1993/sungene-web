import { PRODUCTS, PRODUCT_CATEGORIES } from '../lib/products.ts'
const out = {
  categories: PRODUCT_CATEGORIES.map(c => ({ key: c.key, en: c.en })),
  products: PRODUCTS.map(p => ({
    slug: p.slug, category: p.category, image: p.image,
    name: p.en.name, tagline: p.en.tagline, specs: p.en.specs,
  })),
}
console.log(JSON.stringify(out))
