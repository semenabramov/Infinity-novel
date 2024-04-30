import { Button, Stack, Typography } from "@mui/material";
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
      <AddModal
        open={addOpen}
        handleClose={handleClose}
        setStocks={setStocks}
      />
      <Typography sx={{ width: "1000px" }}>
        Добрый день. Это тестовое задание для "Город Легенд". Я реализовал не
        весь функционал который был в требованиях (нет редактирования,
        пагинации, поиска. Только добавление и удаление). Это было сделано не
        потому, что оно сложно или недостаточно дано времени, а так как считаю
        что данное задание слишком объемное в качестве тестового и тот объем
        который требовался уже приближен к работе которая должна оплачиваться.
        Так же отмечу что в некоторых моментах намеренно были использованы не
        оптимальные решения в угоду быстроте написания (не использован redux на
        фронте, нет разбиения на контроллеры и модели в беке)
      </Typography>
    </Stack>
  );
}

export default App;
