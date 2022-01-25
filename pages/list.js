import Layout from "../components/layout";
import { useState } from "react";
import Card from "../components/card";
import Input from "../components/input";

export default function List() {
  const [books, setBooks] = useState([
    { title: "The Hobbit", author: "JRR Tolkien", read: false, completion: 0 },
    {
      title: "The Lord of the Rings",
      author: "JRR Tolkien",
      read: false,
      completion: 50,
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      read: true,
      completion: 100,
    },
  ]);
  const [book, setBook] = useState({});
  return (
    <Layout>
      <div>
        <h1>My Reading List</h1>
        <div className="grid space-x-1 lg:grid-cols-6">
          {books.map((book) => (
            <Card book={book} key={book.title} />
          ))}
        </div>
      </div>
      <Input book={book} setBook={setBook} setBooks={setBooks} books={books} />
    </Layout>
  );
}
