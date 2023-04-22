import * as Yup from "yup";

const initialValues = {
  id: null,
  name: "",
  description: "",
  role_create: false,
  role_view: false,
  role_update: false,
  role_delete: false,
  user_create: false,
  user_view: false,
  user_update: false,
  user_delete: false,
  category_create: false,
  category_view: false,
  category_update: false,
  category_delete: false,
  product_create: false,
  product_view: false,
  product_update: false,
  product_delete: false,
  customer_create: false,
  customer_view: false,
  customer_update: false,
  customer_delete: false,
  sell_create: false,
  sell_view: false,
  created_at: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string(),
  role_create: Yup.boolean(),
  role_view: Yup.boolean(),
  role_update: Yup.boolean(),
  role_delete: Yup.boolean(),
  user_create: Yup.boolean(),
  user_view: Yup.boolean(),
  user_update: Yup.boolean(),
  user_delete: Yup.boolean(),
  category_create: Yup.boolean(),
  category_view: Yup.boolean(),
  category_update: Yup.boolean(),
  category_delete: Yup.boolean(),
  product_create: Yup.boolean(),
  product_view: Yup.boolean(),
  product_update: Yup.boolean(),
  product_delete: Yup.boolean(),
  customer_create: Yup.boolean(),
  customer_view: Yup.boolean(),
  customer_update: Yup.boolean(),
  customer_delete: Yup.boolean(),
  sell_create: Yup.boolean(),
  sell_view: Yup.boolean(),
  created_at: Yup.date(),
});

const roleFormValidation = {
  initialValues,
  validationSchema,
};


export default roleFormValidation