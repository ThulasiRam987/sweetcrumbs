export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'cake' | 'snack' | 'juice' | 'offer';
  description?: string;
}

export const cakes: Product[] = [
  { id: 'c1', name: 'Black Forest Cake', price: 450, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop', category: 'cake', description: 'Classic black forest with cherries.' },
  { id: 'c2', name: 'Chocolate Truffle', price: 550, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop', category: 'cake', description: 'Rich chocolate truffle cake.' },
  { id: 'c3', name: 'Red Velvet Cake', price: 600, image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&h=600&fit=crop', category: 'cake', description: 'Delicious red velvet with cream cheese.' },
  { id: 'c4', name: 'Pineapple Cake', price: 400, image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&h=600&fit=crop', category: 'cake', description: 'Fresh pineapple flavor.' },
  { id: 'c5', name: 'Butterscotch Cake', price: 450, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop', category: 'cake', description: 'Crunchy butterscotch goodness.' },
  { id: 'c6', name: 'Strawberry Shortcake', price: 500, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop', category: 'cake', description: 'Fresh strawberries and cream.' },
  { id: 'c7', name: 'White Forest Cake', price: 450, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop', category: 'cake', description: 'White chocolate curls and cherries.' },
  { id: 'c8', name: 'Mango Mousse Cake', price: 650, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop', category: 'cake', description: 'Seasonal fresh mango mousse.' },
  { id: 'c9', name: 'Vanilla Bean Cake', price: 350, image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop', category: 'cake', description: 'Classic vanilla bean flavor.' },
  { id: 'c10', name: 'Coffee Walnut Cake', price: 500, image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop', category: 'cake', description: 'Espresso flavor with roasted walnuts.' }
];

export const snacks: Product[] = [
  { id: 's1', name: 'Veg Puff', price: 25, image: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's2', name: 'Chicken Puff', price: 40, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's3', name: 'Paneer Roll', price: 50, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's4', name: 'Cheese Samosa', price: 20, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's5', name: 'Veg Burger', price: 80, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's6', name: 'Chicken Sandwich', price: 100, image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's7', name: 'French Fries', price: 60, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's8', name: 'Aloo Tikki', price: 30, image: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's9', name: 'Muffin', price: 40, image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's10', name: 'Donut', price: 50, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's11', name: 'Croissant', price: 60, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop', category: 'snack' },
  { id: 's12', name: 'Brownie', price: 80, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop', category: 'snack' }
];

export const juices: Product[] = [
  { id: 'j1', name: 'Fresh Orange Juice', price: 60, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop', category: 'juice' },
  { id: 'j2', name: 'Apple Juice', price: 70, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&h=600&fit=crop', category: 'juice' },
  { id: 'j3', name: 'Watermelon Juice', price: 50, image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&h=600&fit=crop', category: 'juice' },
  { id: 'j4', name: 'Mango Shake', price: 80, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=600&h=600&fit=crop', category: 'juice' },
  { id: 'j5', name: 'Strawberry Smoothie', price: 90, image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?w=600&h=600&fit=crop', category: 'juice' }
];

export const allProducts: Product[] = [...cakes, ...snacks, ...juices];

export const birthdayOffers: Product[] = [
  {
    id: 'offer1',
    name: 'Birthday Special Combo',
    description: 'Get a 1kg Black Forest Cake + 5 Veg Puffs + 2 Orange Juices for only ₹799!',
    price: 799,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1200&h=400&fit=crop',
    category: 'offer'
  }
];
