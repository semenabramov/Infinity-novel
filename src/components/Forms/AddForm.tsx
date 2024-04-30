import { Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { IStock } from "../../types/IStock";
import * as yup from "yup";

const addFormInit = {
  mailingName: "",
  date: "",
  quantity: 0,
};

const AddForm = () => {
  const handleFormSubmit = (values: IStock) => {
    console.log(values);
  };

  const addFormValidationSchema = yup.object().shape({
    mailingName: yup.string().required("Обязательное поле"),
    date: yup.string().required("Обязательное поле"),
    quantity: yup.number().required().positive().integer(),
  });

  const formik = useFormik({
    initialValues: addFormInit,
    onSubmit: handleFormSubmit,
    enableReinitialize: true,
    validationSchema: addFormValidationSchema,
  });

  return (
    <Stack marginTop="15px">
      <TextField
        error={Boolean(formik.errors.mailingName)}
        helperText={formik.errors.mailingName ? formik.errors.mailingName : " "}
        value={formik.values.mailingName}
        onChange={(e) => formik.setFieldValue("mailingName", e.target.value)}
      />

      <TextField
        type="number"
        error={Boolean(formik.errors.quantity)}
        helperText={formik.errors.quantity ? formik.errors.quantity : " "}
        value={formik.values.quantity}
        onChange={(e) => formik.setFieldValue("quantity", +e.target.value)}
      />
      <TextField
        error={Boolean(formik.errors.date)}
        helperText={formik.errors.date ? formik.errors.date : " "}
        type="date"
        value={formik.values.date}
        onChange={(e) => formik.setFieldValue("date", e.target.value)}
      />
      <Button
        type="reset"
        size="large"
        variant="contained"
        onClick={() => formik.handleSubmit()}
      >
        Добавить
      </Button>
    </Stack>
  );
};

export default AddForm;
