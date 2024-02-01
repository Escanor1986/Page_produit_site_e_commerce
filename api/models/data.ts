export interface Article {
  id: number;
  numberOfArticle: number;
  company: string;
  name: string;
  description: string;
  price: number;
  promo: boolean;
  images: string[];
}

const ArticleList: Article[] = [
  {
    id: 1,
    numberOfArticle: 0,
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.0,
    promo: true,
    images: [
      "chemin/vers/image1_1.jpg",
      "chemin/vers/image1_2.jpg",
      "chemin/vers/image1_3.jpg",
      "chemin/vers/image1_4.jpg",
      "chemin/vers/image1_5.jpg",
    ],
  },
  {
    id: 2,
    numberOfArticle: 0,
    company: "Sneaker Company",
    name: "Winter Classic Boots",
    description:
      "Stay warm and stylish with these classic winter boots. They're lined with cozy fleece and have a sturdy sole for icy sidewalks.",
    price: 149.99,
    promo: true,
    images: [
      "chemin/vers/image2_1.jpg",
      "chemin/vers/image2_2.jpg",
      "chemin/vers/image2_3.jpg",
      "chemin/vers/image2_4.jpg",
      "chemin/vers/image2_5.jpg",
    ],
  },
  {
    id: 3,
    numberOfArticle: 0,
    company: "Sneaker Company",
    name: "Athletic Performance Cleats",
    description:
      "Achieve peak athletic performance with these high-performance cleats from Adidas. Designed for speed and agility on the field.",
    price: 89.99,
    promo: false,
    images: [
      "chemin/vers/image3_1.jpg",
      "chemin/vers/image3_2.jpg",
      "chemin/vers/image3_3.jpg",
      "chemin/vers/image3_4.jpg",
      "chemin/vers/image3_5.jpg",
    ],
  },
  {
    id: 4,
    numberOfArticle: 0,
    company: "Sneaker Company",
    name: "Elegant Ballet Flats",
    description:
      "Dance with grace in these elegant ballet flats from Capezio. They offer comfort and style for any ballet enthusiast.",
    price: 59.99,
    promo: true,
    images: [
      "chemin/vers/image4_1.jpg",
      "chemin/vers/image4_2.jpg",
      "chemin/vers/image4_3.jpg",
      "chemin/vers/image4_4.jpg",
      "chemin/vers/image4_5.jpg",
    ],
  },
  {
    id: 5,
    numberOfArticle: 0,
    company: "Sneaker Company",
    name: "Skateboarding Pro Sneakers",
    description:
      "Experience top-notch skateboarding performance with these pro sneakers from Vans. They offer style and durability for skaters of all levels.",
    price: 79.99,
    promo: false,
    images: [
      "chemin/vers/image5_1.jpg",
      "chemin/vers/image5_2.jpg",
      "chemin/vers/image5_3.jpg",
      "chemin/vers/image5_4.jpg",
      "chemin/vers/image5_5.jpg",
    ],
  },
];

export default ArticleList;
