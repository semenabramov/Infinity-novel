// import "./styles.css";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Box } from "@mui/material";


const initialItems = [{ name: 'Стандартный', values: [] },{ name: 'new', values: [] }];

export default function Node() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" onReorder={setItems} values={items}>
      {items.map((item) => (
        <Reorder.Item key={item.name} value={item}><Box sx={{backgroundColor:'#fff', width:'200px',height:'50px' }}>{item.name}</Box> </Reorder.Item>
      ))} 
    </Reorder.Group>
  );
}

