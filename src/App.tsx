/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
import { Button, Stack, TextField, Typography } from "@mui/material";
import "./App.css";
import * as XLSX from "xlsx";
import { useRef, useState } from "react";

interface IData {
  Name: string;
}

function App() {
  const filePicker = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);
  const [data, setData] = useState<IData[]>([]);
  const [inputValue, setInputValue] = useState("");

  function inputChangeHandler(e: React.ChangeEvent) {
    if (
      e.target instanceof HTMLInputElement &&
      e.target.type === "file" &&
      e.target.files
    ) {
      setSelectedFiles(Array.prototype.slice.call(e.target.files));

      const reader = new FileReader();
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = () => {
        const workbook = XLSX.read(reader.result, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parseData = XLSX.utils.sheet_to_json(sheet);
        console.log(parseData);
        setData(parseData as IData[]);
      };
    }
  }

  function handlePick() {
    filePicker.current?.click();
  }

  return (
    <Stack gap="15px" direction="row" alignItems="center">
      <Button
        variant="contained"
        onClick={handlePick}
        color={!Boolean(data.length) ? "primary" : "secondary"}
      >
        {!Boolean(data.length) ? "Загрузить файл" : "Файл загружен"}
      </Button>
      <input
        type="file"
        onChange={(e) => inputChangeHandler(e)}
        ref={filePicker}
        hidden
      />
      <TextField
        placeholder={
          !Boolean(data.length) ? "Загрузите файл" : "Что вы хотите найти?"
        }
        size="small"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={!Boolean(data.length)}
      />
      {data && inputValue && (
        <Typography>
          {data.find((row) => row.Name === inputValue) ? "Найден" : "Не найден"}
        </Typography>
      )}
    </Stack>
  );
}

export default App;
