import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";



export default function Homepage() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        if (response && response.data && response.data.books) {
          setBooks(response.data.books);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Fetch books error:", error);
      }
    };

    
    fetchBooks();
  }, []);

  return (
    <VStack w="100vw">
      {books.map((book) => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}
