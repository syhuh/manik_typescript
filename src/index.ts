type TypeOfLibrary = "national" | "public" | "private";

type Book = {
  title: string;
  pages: number;
  isbn: string;
};

type Member = {
  name: string;
  phone: string;
  [key: string]: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: TypeOfLibrary;
  books: Book[];
  genres: string[];
  members: member[];
};

const library: Library = {
  name: "New York Library",
  address: "24 Some Street, New York",
  numberOfBooks: 1254,
  type: "national",
  books: [
    {
      title: "Harry Potter",
      pages: 756,
      isbn: "9971-5-0210-0",
    },
    {
      title: "Davinci Code",
      pages: 386,
      isbn: "9971-5-0210-0",
    },
  ],
  genres: ["fiction", "thriller", "mystery"],
  members: [
    {
      name: "John",
      phone: "123-456-7890",
      email: "john@gmail.com",
    },
    {
      name: "Smith",
      phone: "123-456-7890",
    },
  ],
};
