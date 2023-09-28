export const categories = [
	{ id: 0, title: 'Burgers', icon: 'src/assets/images/dishes/icons/burgers.png'},
	{ id: 1, title: 'Pizza', icon: 'src/assets/images/dishes/icons/pizza.png'},
	{ id: 2, title: 'Sushi', icon: 'src/assets/images/dishes/icons/sushi.png'},
	{ id: 3, title: 'Drinks', icon: 'src/assets/images/dishes/icons/soda.png'},
	{ id: 4, title: 'Ice Cream', icon: 'src/assets/images/dishes/icons/ice_cream.png'},
]

export const dishes = [
	// Бургеры
	{ id: 1, categoryId: 0, title: 'HamBurger', price: 5.99, img: 'src/assets/images/dishes/photos/burgers/HamBurger.png' },
	{ id: 2, categoryId: 0, title: 'CheeseBurger', price: 6.99, img: 'src/assets/images/dishes/photos/burgers/CheeseBurger.png' },
	{ id: 3, categoryId: 0, title: 'Bacon Burger', price: 7.99, img: 'src/assets/images/dishes/photos/burgers/Bacon Burger.png' },
	{ id: 4, categoryId: 0, title: 'Veggie Burger', price: 6.49, img: 'src/assets/images/dishes/photos/burgers/Veggie Burger.png' },
	{ id: 5, categoryId: 0, title: 'Double CheeseBurger', price: 8.99, img: 'src/assets/images/dishes/photos/burgers/Double CheeseBurger.png' },
	{ id: 6, categoryId: 0, title: 'Mushroom Swiss Burger', price: 7.99, img: 'src/assets/images/dishes/photos/burgers/Mushroom Swiss Burger.png' },
	{ id: 7, categoryId: 0, title: 'BBQ Burger', price: 7.99, img: 'src/assets/images/dishes/photos/burgers/BBQ Burger.png' },
	{ id: 8, categoryId: 0, title: 'Turkey Burger', price: 6.99, img: 'src/assets/images/dishes/photos/burgers/Turkey Burger.png' },
	{ id: 9, categoryId: 0, title: 'Chicken Burger', price: 6.99, img: 'src/assets/images/dishes/photos/burgers/Chicken Burger.png' },
	{ id: 10, categoryId: 0, title: 'Fish Burger', price: 7.99, img: 'src/assets/images/dishes/photos/burgers/Fish Burger.png' },
  
	// Пицца
	{ id: 11, categoryId: 1, title: 'Margherita Pizza', price: 9.99, img: 'src/assets/images/dishes/photos/pizza/Margherita Pizza.png' },
	{ id: 12, categoryId: 1, title: 'Pepperoni Pizza', price: 10.99, img: 'src/assets/images/dishes/photos/pizza/Pepperoni Pizza.png' },
	{ id: 13, categoryId: 1, title: 'Vegetarian Pizza', price: 10.99, img: 'src/assets/images/dishes/photos/pizza/Vegetarian Pizza.png' },
	{ id: 14, categoryId: 1, title: 'Hawaiian Pizza', price: 11.99, img: 'src/assets/images/dishes/photos/pizza/Hawaiian Pizza.png' },
	{ id: 15, categoryId: 1, title: 'BBQ Chicken Pizza', price: 11.99, img: 'src/assets/images/dishes/photos/pizza/BBQ Chicken Pizza.png' },
	{ id: 16, categoryId: 1, title: 'Supreme Pizza', price: 12.99, img: 'src/assets/images/dishes/photos/pizza/Supreme Pizza.png' },
	{ id: 17, categoryId: 1, title: 'Buffalo Chicken Pizza', price: 12.99, img: 'src/assets/images/dishes/photos/pizza/Buffalo Chicken Pizza.png' },
	{ id: 18, categoryId: 1, title: 'Seafood Pizza', price: 13.99, img: 'src/assets/images/dishes/photos/pizza/Seafood Pizza.png' },
	{ id: 19, categoryId: 1, title: 'Vegan Pizza', price: 11.99, img: 'src/assets/images/dishes/photos/pizza/Vegan Pizza.png' },
	{ id: 20, categoryId: 1, title: 'White Pizza', price: 12.99, img: 'src/assets/images/dishes/photos/pizza/White Pizza.png' },
  
	// Суши
	{ id: 21, categoryId: 2, title: 'California Roll', price: 9.99, img: 'src/assets/images/dishes/photos/sushi/California Roll.png' },
	{ id: 22, categoryId: 2, title: 'Spicy Tuna Roll', price: 10.99, img: 'src/assets/images/dishes/photos/sushi/Spicy Tuna Roll.png' },
	{ id: 23, categoryId: 2, title: 'Dragon Roll', price: 12.99, img: 'src/assets/images/dishes/photos/sushi/Dragon Roll.png' },
	{ id: 24, categoryId: 2, title: 'Rainbow Roll', price: 12.99, img: 'src/assets/images/dishes/photos/sushi/Rainbow Roll.png' },
	{ id: 25, categoryId: 2, title: 'Sashimi Platter', price: 14.99, img: 'src/assets/images/dishes/photos/sushi/Sashimi Platter.png' },
	{ id: 26, categoryId: 2, title: 'Eel Nigiri', price: 5.99, img: 'src/assets/images/dishes/photos/sushi/Eel Nigiri.png' },
	{ id: 27, categoryId: 2, title: 'Tempura Roll', price: 11.99, img: 'src/assets/images/dishes/photos/sushi/Tempura Roll.png' },
	{ id: 28, categoryId: 2, title: 'Vegetable Roll', price: 8.99, img: 'src/assets/images/dishes/photos/sushi/Vegetable Roll.png' },
	{ id: 29, categoryId: 2, title: 'Salmon Nigiri', price: 6.99, img: 'src/assets/images/dishes/photos/sushi/Salmon Nigiri.png' },
	{ id: 30, categoryId: 2, title: 'Philadelphia Roll', price: 7.99, img: 'src/assets/images/dishes/photos/sushi/Philadelphia Roll.png' },
  
	// Газированные напитки
	{ id: 31, categoryId: 3, title: 'Cola', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Cola.png' },
	{ id: 32, categoryId: 3, title: 'Lemon-Lime Soda', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Lemon-Lime Soda.png' },
	{ id: 33, categoryId: 3, title: 'Orange Soda', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Orange Soda.png' },
	{ id: 34, categoryId: 3, title: 'Root Beer', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Root Beer.png' },
	{ id: 35, categoryId: 3, title: 'Ginger Ale', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Ginger Ale.png' },
	{ id: 36, categoryId: 3, title: 'Dr. Pepper', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Dr. Pepper.png' },
	{ id: 37, categoryId: 3, title: 'Apple Juice', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Apple Juice.png' },
	{ id: 38, categoryId: 3, title: 'Cherry Juice', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Cherry Juice.png' },
	{ id: 39, categoryId: 3, title: 'Monster', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Monster.png' },
	{ id: 40, categoryId: 3, title: 'Pineapple Juice', price: 1.99, img: 'src/assets/images/dishes/photos/drinks/Pineapple Juice.png' },
  
	// Мороженое
	{ id: 41, categoryId: 4, title: 'Vanilla Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Vanilla Ice Cream.png' },
	{ id: 42, categoryId: 4, title: 'Chocolate Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Chocolate Ice Cream.png' },
	{ id: 43, categoryId: 4, title: 'Strawberry Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Strawberry Ice Cream.png' },
	{ id: 44, categoryId: 4, title: 'Mint Chocolate Chip Ice Cream', price: 5.49, img: 'src/assets/images/dishes/photos/ice_cream/Mint Chocolate Chip Ice Cream.png' },
	{ id: 45, categoryId: 4, title: 'Cookie Dough Ice Cream', price: 5.49, img: 'src/assets/images/dishes/photos/ice_cream/Cookie Dough Ice Cream.png' },
	{ id: 46, categoryId: 4, title: 'Rocky Road Ice Cream', price: 5.49, img: 'src/assets/images/dishes/photos/ice_cream/Rocky Road Ice Cream.png' },
	{ id: 47, categoryId: 4, title: 'Butter Pecan Ice Cream', price: 5.49, img: 'src/assets/images/dishes/photos/ice_cream/Butter Pecan Ice Cream.png' },
	{ id: 48, categoryId: 4, title: 'Coffee Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Coffee Ice Cream.png' },
	{ id: 49, categoryId: 4, title: 'Neapolitan Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Neapolitan Ice Cream.png' },
	{ id: 50, categoryId: 4, title: 'Rainbow Sherbet Ice Cream', price: 4.99, img: 'src/assets/images/dishes/photos/ice_cream/Rainbow Sherbet Ice Cream.png' },
]
  