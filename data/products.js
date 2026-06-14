const products = [
  { 
    id: 1, 
    category: "Laptops", 
    name: "ProBook 16-inch", 
    price: 239900, 
    description: "2019 model with an Intel Core i7 processor and large clear display.", 
    image: "/assets/macbookpro.jpg",
    featured: true,
    trending: true
  },
  { 
    id: 2, 
    category: "Laptops", 
    name: "Red Magic ROG", 
    price: 336999, 
    description: "High performance machine with fast screen for smooth gaming.", 
    image: "/assets/redmagicrog.jpg",
    featured: true,
    newArrival: true
  },
  { 
    id: 3, 
    category: "Laptops", 
    name: "Acer Nitro 5", 
    price: 89999, 
    description: "Great gaming laptop for daily play and heavy workloads.", 
    image: "/assets/acernitro.jpg",
    newArrival: true
  },
  { 
    id: 4, 
    category: "Laptops", 
    name: "Samsung Galaxy Book", 
    price: 69990, 
    description: "Very thin and light laptop, perfect for travel and office work.", 
    image: "/assets/samsunglaptop.jpg",
    trending: true
  },
  
  { 
    id: 5, 
    category: "Mobiles", 
    name: "Samsung Galaxy S26 Ultra", 
    price: 124999, 
    description: "Top tier phone with amazing cameras and a useful stylus pen.", 
    image: "/assets/s26ultra.jpg",
    featured: true
  },
  { 
    id: 6, 
    category: "Mobiles", 
    name: "Vivo X300 Smartphone", 
    price: 89999, 
    description: "Runs fast on OriginOS and features a beautiful double rear camera setup.", 
    image: "/assets/vivox300.jpg",
    trending: true
  },
  { 
    id: 7, 
    category: "Mobiles", 
    name: "Nothing Phone 3a", 
    price: 26999, 
    description: "Unique clear back design with fun light up alerts.", 
    image: "/assets/nothing3a.jpg",
    featured: true
  },
  { 
    id: 8, 
    category: "Mobiles", 
    name: "Apple iPhone 18 Pro", 
    price: 139900, 
    description: "The newest phone from Apple with pro grade video recording.", 
    image: "/assets/iphone18pro.jpg",
    newArrival: true
  },

  { 
    id: 9, 
    category: "Earphones", 
    name: "Boat Airdopes", 
    price: 1499, 
    description: "True wireless earbuds with deep bass and long battery life.", 
    image: "/assets/boatbuds.jpg",
    featured: true,
    trending: true
  },
  { 
    id: 10, 
    category: "Earphones", 
    name: "Boult Audio Mustang", 
    price: 1799, 
    description: "Sporty design earphones with clear and loud sound.", 
    image: "/assets/boultmustang.jpg" 
  },
  { 
    id: 11, 
    category: "Earphones", 
    name: "Apple AirPods Max", 
    price: 1599, 
    description: "Premium over ear headphones that block out all outside noise.", 
    image: "/assets/appleheadphone.jpg",
    trending: true
  },
  { 
    id: 12, 
    category: "Earphones", 
    name: "Nothing Earbuds", 
    price: 64999, 
    description: "Very light earbuds inside a cool clear charging case.", 
    image: "/assets/nothingbuds.jpg",
    newArrival: true
  },

  { 
    id: 13, 
    category: "Powerbanks", 
    name: "Portronics Power Bank", 
    price: 3499, 
    description: "Small 10000mAh battery block to keep your phone alive.", 
    image: "/assets/portronicpb.jpg" 
  },
  { 
    id: 14, 
    category: "Powerbanks", 
    name: "Acwo Fast Charge Bank", 
    price: 1799, 
    description: "Quick charging power bank for busy days on the go.", 
    image: "/assets/acwopb.jpg" 
  },
  { 
    id: 15, 
    category: "Powerbanks", 
    name: "CaseGear Power Bank", 
    price: 25000, 
    description: "Tough and strong portable battery for outdoor trips.", 
    image: "/assets/casegearpb.jpeg" 
  },
  { 
    id: 16, 
    category: "Powerbanks", 
    name: "Boat Energy Bank", 
    price: 999, 
    description: "High capacity 20000mAh battery for very long trips.", 
    image: "/assets/boatpb.jpg",
    featured: true
  },

  { 
    id: 17, 
    category: "Smartwatches", 
    name: "Casio G-Shock Smart", 
    price: 7990, 
    description: "Very tough watch that can handle any drop or deep water.", 
    image: "/assets/gshockwatch.jpeg",
    newArrival: true
  },
  { 
    id: 18, 
    category: "Smartwatches", 
    name: "Fastrack Reflex", 
    price: 2099, 
    description: "Nice fitness band to track your daily steps and health..", 
    image: "/assets/fasttrackwatch.jpeg",
    trending: true
  },
  { 
    id: 19, 
    category: "Smartwatches", 
    name: "Apple Watch Series", 
    price: 25900, 
    description: "The best watch to track your workouts and heart rate.", 
    image: "/assets/iwatch.jpeg",
    featured: true
  },
  { 
    id: 20, 
    category: "Smartwatches", 
    name: "Boult Dive Smartwatch", 
    price: 1399, 
    description: "Great screen and long battery life for daily use.", 
    image: "/assets/boultwatch.jpeg" 
  },
  { 
    id: 21, 
    category: "Bluetooth Speakers", 
    name: "Sony Extra Bass Speaker", 
    price: 27990, 
    description: "Small speaker but makes very loud and deep punchy sound.", 
    image: "/assets/sonyspeaker.jpeg",
    newArrival: true
  },
  { 
    id: 22, 
    category: "Bluetooth Speakers", 
    name: "Marshall Acton", 
    price: 51999, 
    description: "Classic rock design with very rich and clear audio quality.", 
    image: "/assets/marshallspeaker.jpeg",
    trending: true
  },
  { 
    id: 23, 
    category: "Bluetooth Speakers", 
    name: "JBL Flip 6", 
    price: 9999, 
    description: "Waterproof speaker that is easy to carry anywhere you go.", 
    image: "/assets/jblspeaker.jpeg",
    featured: true
  },
  { 
    id: 24, 
    category: "Bluetooth Speakers", 
    name: "Zebronics Party Speaker", 
    price: 1990, 
    description: "Big sound and bright lights for your next house party.", 
    image: "/assets/zebronicspeaker.jpeg" 
  }
];

export default products;