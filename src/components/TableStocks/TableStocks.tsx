import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, IconButton } from "@mui/material";
import { Edit2, Trash } from "iconsax-react";
import { IStock } from "../../types/IStock";
import { deleteStocks } from "../../api/stocks";

interface ITableStocks {
  stocks: IStock[];
  setStocks: React.Dispatch<React.SetStateAction<IStock[]>>;
}

const TableStocks: React.FC<ITableStocks> = ({ stocks, setStocks }) => {
  const handleDelete = async (id: number) => {
    const res = await deleteStocks(id);
    setStocks(res.data);
  };

  return (
    <TableContainer sx={{ width: "1000px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Название рассылки</TableCell>
            <TableCell align="left">Дата рассылки</TableCell>
            <TableCell align="left">Кол-во отправленных подарков</TableCell>
            <TableCell align="left">Редактировать</TableCell>
            <TableCell align="left">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!stocks.length && (
            <TableRow>
              <TableCell align="left">
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
          {stocks.map((row) => (
            <TableRow key={row.mailingName} hover>
              <TableCell component="th" scope="row">
                {row.mailingName}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">
                <IconButton>
                  <Edit2 />
                </IconButton>
              </TableCell>
              <TableCell align="left">
                <IconButton onClick={() => handleDelete(row.id)}>
                  <Trash />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableStocks;
