import { Card, Heading, Image, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom"; 
import { deleteBook as deleteBookFromFetch } from "../modules/fetch";


export default function Books({ id, title, author, image, publisher, year }) {
  const navigate = useNavigate();

  const handleDeleteBook = async () => {
    try {
      // deleteBook from fetch module to delete the book
      await deleteBookFromFetch(id);
    } catch (error) {
      console.error("Delete book error:", error);
    }
  };

  const handleEditBook = () => {
    // Redirect to the edit book page with the book ID as a parameter
    navigate(`/editbook/${id}`);
  };

  return (
    <Link to={`/books/${id}`}>
      <Card key={id} my={4} p={4} cursor='pointer'>
        <HStack>
          {/* Delete button */}
          <Button onClick={handleDeleteBook} colorScheme="red">
            Delete
          </Button>
          {/* Edit button */}
          <Button onClick={handleEditBook}>
            Edit
          </Button>
          <Heading size={"md"}>
            {title} ({year})
          </Heading>
          <Text>{author}</Text>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
          <Text>
            <span>Publisher: </span>
            {publisher}
          </Text>
        </HStack>
      </Card>
    </Link>
  );
};
