import { Button, Stack } from "@mui/material";
import TableStocks from "./components/TableStocks/TableStocks";
import { useState } from "react";
import AddModal from "./components/Modals/AddModal";

function App() {
  const [addOpen, setAddOpen] = useState(false);
  const handleOpen = () => setAddOpen(true);
  const handleClose = () => setAddOpen(false);

  return (
    <Stack sx={{ p: "20px", gap: "15px" }}>
      <Button variant="contained" sx={{ width: "200px" }} onClick={handleOpen}>
        Добавить акцию
      </Button>
      <TableStocks />
      <AddModal open={addOpen} handleClose={handleClose} />
    </Stack>
  );
}

export default App;
