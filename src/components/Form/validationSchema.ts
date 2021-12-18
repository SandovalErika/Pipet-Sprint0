import * as yup from "yup";

const isRequiredMessage = "Este campo es requerido.";
const maxCharMessage = "Este campo no puede tener más de {max} caracteres.";


export default yup.object().shape({
  street: yup.string().required(isRequiredMessage).max(100),
  number: yup.string().required(isRequiredMessage).max(10),
  extraInfo: yup.string().optional().max(255, maxCharMessage),
  city: yup.string().required(isRequiredMessage).max(50),
  state: yup.string().required(isRequiredMessage).max(50),
  postalCode: yup.string().required(isRequiredMessage).max(10),
  phoneNumber: yup.string().required(isRequiredMessage).max(10),
  
  // monday: yup.string().required().max(5, maxCharMessage),
  // tuesday: yup.string().required().max(5, maxCharMessage),
  // wednesday: yup.string().required().max(5, maxCharMessage),
  // thursday: yup.string().required().max(5, maxCharMessage),
  // friday: yup.string().required().max(5, maxCharMessage),
  // saturday: yup.string().required().max(5, maxCharMessage),
  // sunday: yup.string().required().max(5, maxCharMessage),

  
});
