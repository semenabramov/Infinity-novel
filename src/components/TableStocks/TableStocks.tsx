import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Edit2, Trash } from "iconsax-react";

function createData(mailingName: string, date: number, quantity: number) {
  return { mailingName, date, quantity };
}

const rows = [
  createData("Акция1", 159, 6.0),
  createData("Акция2", 237, 9.0),
  createData("Акция3", 262, 16.0),
];

export default function TableStocks() {
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
          {rows.map((row) => (
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
                <IconButton>
                  <Trash />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
