import * as Yup from "yup";

const initialValues = {
  id: null,
  role: "",
  name: "",
  surname: "",
  image: "",
  email: "",
  password: "",
  state: true,
  created_at: new Date(),
};

const validationSchema = Yup.object({
  role: Yup.string().required(),
  name: Yup.string().required(),
  surname: Yup.string(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const userFormValidation = {
  initialValues,
  validationSchema,
};

export default userFormValidation;
