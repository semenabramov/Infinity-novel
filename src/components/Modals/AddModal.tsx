import { Box, Modal, Typography } from "@mui/material";
import AddForm from "../Forms/AddForm";
import { IStock } from "../../types/IStock";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface IModal {
  open: boolean;
  handleClose: () => void;
  setStocks: React.Dispatch<React.SetStateAction<IStock[]>>;
}

const AddModal: React.FC<IModal> = ({ open, handleClose, setStocks }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Добавить Акцию
        </Typography>
        <AddForm setStocks={setStocks} />
      </Box>
    </Modal>
  );
};

export default AddModal;
