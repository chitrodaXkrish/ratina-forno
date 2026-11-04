export type MenuCategory = 'Pizzas' | 'Sides' | 'Desserts' | 'Beverages'

export interface MenuItem {
  id: string
  category: MenuCategory
  name: string
  description: string
  price: string
  image: string
}

export const menuCategories: MenuCategory[] = ['Pizzas', 'Sides', 'Desserts', 'Beverages']

export const menuItems: MenuItem[] = [
  {
    id: 'pizza-01',
    category: 'Pizzas',
    name: 'Margherita Classica',
    description: 'San Marzano tomato, creamy mozzarella, basil and a drizzle of extra virgin olive oil.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pizza-02',
    category: 'Pizzas',
    name: 'Soppressata Piccante',
    description: 'Tomato, mozzarella, spicy soppressata, roasted peppers and a touch of honey.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pizza-03',
    category: 'Pizzas',
    name: 'Funghi e Tartufo',
    description: 'Roasted mushrooms, mozzarella, parmesan and fragrant truffle oil.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'side-01',
    category: 'Sides',
    name: 'Placeholder Side',
    description: 'Side placeholder content for salads, antipasti, bites or seasonal accompaniments.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'side-02',
    category: 'Sides',
    name: 'Placeholder Side 02',
    description: 'Swap this for your final side list as the menu becomes available.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'dessert-01',
    category: 'Desserts',
    name: 'Placeholder Dessert',
    description: 'Sample dessert content that keeps the structure ready for real menu copy and pricing.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'drink-01',
    category: 'Beverages',
    name: 'Placeholder Beverage',
    description: 'Use this block for soft drinks, coffee, wine, or house-crafted non-alcoholic pairings.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'drink-02',
    category: 'Beverages',
    name: 'Placeholder Beverage 02',
    description: 'A reusable section that can be easily updated when final menu details are confirmed.',
    price: 'Price placeholder',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
]
