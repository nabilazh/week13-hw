import { Box } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

export default function NewBookPage() {
  return (
    <Box>
      {/* Menggunakan BookForm dan mengirimkan informasi buku */}
      <BookForm />
    </Box>
  );
};