import * as Yup from "yup";
import { CONTAINS_A_SPECIAL_CHARACTER_REGEX } from "../helpers/regex/regex";

export const SchemaValidation = Yup.object({
  full_name: Yup.string().min(4).required("Minimum of 4 characters"),
  email: Yup.string()
    .email("please enter a valid email")
    .required("enter your email address"),
  password: Yup.string().min(8).required("please enter password").matches(CONTAINS_A_SPECIAL_CHARACTER_REGEX, 'Must contain a special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter the confirmed password"),
});
