const books = [
  // English Books
  { id: 1, title: "The Silent Patient", author: "Alex Michaelides", price: 399, discount: "20%", category: "Fiction", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/the-silent-patient-by-alex-michaelides-celadon-pdf.webp" },
  { id: 2, title: "Atomic Habits", author: "James Clear", price: 450, category: "Self-Help", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/AtomicHabits.jpg" },
  { id: 3, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: 699, category: "Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Harry Potter and the Sorcerer's Stone.jpg" },
  { id: 4, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 350, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Rich Dad Poor Dad.webp" },
  { id: 5, title: "The Power of Habit", author: "Charles Duhigg", price: 420, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/the power of habit book.png" },
  { id: 6, title: "Think and Grow Rich", author: "Napoleon Hill", price: 300, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Think and Grow Rich.jpg" },
  { id: 7, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", price: 499, category: "Self-Help", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/The 7 Habits of Highly Effective People.jpg" },
  { id: 8, title: "Deep Work", author: "Cal Newport", price: 550, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Deep Work.webp" },
  { id: 9, title: "Can't Hurt Me", author: "David Goggins", price: 600, category: "Biographies & Autobiographies", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Can't Hurt Me.jpg" },
  { id: 10, title: "The Alchemist", author: "Paulo Coelho", price: 350, category: "Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/The Alchemist.webp" },
  { id: 11, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 400, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/dda49596da8c278bcd05f2cc9291c45e.jpg" },
  { id: 12, title: "Ikigai", author: "Héctor García", price: 320, category: "Self-Help", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Ikigai.jpg" },
  { id: 13, title: "Dune", author: "Frank Herbert", price: 720, category: "Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Dune.jpg" },
  { id: 14, title: "The Hobbit", author: "J.R.R. Tolkien", price: 680, category: "Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/The Hobbit.jpg" },
  { id: 15, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: 750, category: "Non-Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/A Brief History of Humankind.png" },
  { id: 16, title: "Educated", author: "Tara Westover", price: 500, category: "Biographies & Autobiographies", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Educated.webp" },
  { id: 17, title: "Becoming", author: "Michelle Obama", price: 650, category: "Biographies & Autobiographies", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Becoming.jpg" },
  { id: 18, title: "The Midnight Library", author: "Matt Haig", price: 450, category: "Fiction", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/The-Midnight-Library-By-Matt-Haig.png" },
  { id: 19, title: "A Promised Land", author: "Barack Obama", price: 799, category: "Biographies & Autobiographies", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/A Promised Land.png" },
  { id: 20, title: "The Psychology of Money", author: "Morgan Housel", price: 550, category: "Non-Fiction", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/The Psychology of Money.png" },
  { id: 21, title: "Man's Search for Meaning", author: "Viktor E. Frankl", price: 370, category: "Non-Fiction", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Man's Search for Meaning.webp" },
  { id: 22, title: "Good Vibes, Good Life", author: "Vex King", price: 400, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Good Vibes, Good Life.jpg" },
  { id: 23, title: "Outliers", author: "Malcolm Gladwell", price: 480, category: "Non-Fiction", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/by Malcolm Gladwell.jpg" },
  { id: 24, title: "Born a Crime", author: "Trevor Noah", price: 520, category: "Biographies & Autobiographies", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Born a Crime.webp" },
  { id: 25, title: "The Four Agreements", author: "Don Miguel Ruiz", price: 340, category: "Self-Help", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/by Don Miguel Ruiz.jpg" },

  // Malayalam Books
  { id: 26, title: "Randamoozham", author: "M.T. Vasudevan Nair", price: 400, category: "Fiction", language: "Malayalam", rating: 5, quantity: 1, image: "assets/Booksimages/Randamoozham.jpg" },
  { id: 27, title: "Balyakalasakhi", author: "Vaikom Muhammad Basheer", price: 250, category: "Fiction", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/Balyakalasakhi.webp" },
  { id: 28, title: "Kayar", author: "Thakazhi Sivasankara Pillai", price: 500, category: "Fiction", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/kayar.jpg" },
  { id: 29, title: "Ente Katha", author: "Kamala Surayya", price: 300, category: "Biographies & Autobiographies", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/Ente Katha.jpg" },
  { id: 30, title: "Naalukettu", author: "M.T. Vasudevan Nair", price: 350, category: "Fiction", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/Naalukettu.webp" },
  { id: 31, title: "Oru Desathinte Katha", author: "S.K. Pottekkatt", price: 380, category: "Fiction", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/Oru Desathinte Katha.webp" },
  { id: 32, title: "Pathummayude Aadu", author: "Vaikom Muhammad Basheer", price: 220, category: "Fiction", language: "Malayalam", rating: 4, quantity: 1, image: "assets/Booksimages/Pathummayude Aadu.webp" },
  { id: 33, title: "Aarachar", author: "K.R. Meera", price: 450, category: "Fiction", language: "Malayalam", rating: 5, quantity: 1, image: "assets/Booksimages/Aarachar.jpg" },

  // Academic & Educational
  { id: 34, title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: 1200, category: "Academic & Educational", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Introduction to Algorithms.jpg" },
  { id: 35, title: "Physics for Scientists and Engineers", author: "Raymond A. Serway", price: 950, category: "Academic & Educational", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Physics for Scientists and Engineers.jpg" },
  { id: 36, title: "Advanced Mathematics", author: "R.D. Sharma", price: 800, category: "Academic & Educational", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Advanced Mathematics.jpg" },

  // Children's Books
  { id: 37, title: "Charlotte's Web", author: "E.B. White", price: 300, category: "Children's Books", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/Charlotte's Web.jpg" },
  { id: 38, title: "The Very Hungry Caterpillar", author: "Eric Carle", price: 250, category: "Children's Books", language: "English", rating: 5, quantity: 1, image: "assets/Booksimages/The Very Hungry Caterpillar.jpg" },
  { id: 39, title: "Where the Wild Things Are", author: "Maurice Sendak", price: 280, category: "Children's Books", language: "English", rating: 4, quantity: 1, image: "assets/Booksimages/Where the Wild Things Are.jpg" },
];

export default books;
