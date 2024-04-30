import { Button, Stack } from "@mui/material";
import TableStocks from "./components/TableStocks/TableStocks";
import { useEffect, useState } from "react";
import AddModal from "./components/Modals/AddModal";
import { IStock } from "./types/IStock";
import { getStocks } from "./api/stocks";

function App() {
  const [addOpen, setAddOpen] = useState(false);
  const handleOpen = () => setAddOpen(true);
  const handleClose = () => setAddOpen(false);
  const [stocks, setStocks] = useState<IStock[]>([]);
  const getStocksRequest = async () => {
    const res = await getStocks();
    console.log(res.data);
    setStocks(res.data);
  };

  useEffect(() => {
    getStocksRequest();
  }, []);

  return (
    <Stack sx={{ p: "20px", gap: "15px" }}>
      <Button variant="contained" sx={{ width: "200px" }} onClick={handleOpen}>
        Добавить акцию
      </Button>
      <TableStocks stocks={stocks} setStocks={setStocks} />
      <AddModal open={addOpen} handleClose={handleClose} setStocks={setStocks} />
    </Stack>
  );
}

export default App;
