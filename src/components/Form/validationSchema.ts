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
  // technologies: yup
  //   .array()
  //   .required(isRequiredMessage)
  //   .min(1, minTechnologyMessage),
  // monday:yup.string()
  // .test('len', 'Must be exactly 5 characters', val => val.length === 5),
  // monday: yup.string().optional().max(5, maxCharMessage),
  // tuesday: yup.string().optional().max(255, maxCharMessage),
  // wednesday: yup.string().optional().max(255, maxCharMessage),
  // thursday: yup.string().optional().max(255, maxCharMessage),
  // friday: yup.string().optional().max(255, maxCharMessage),
  // saturday: yup.string().optional().max(255, maxCharMessage),
  // sunday: yup.string().optional().max(255, maxCharMessage),

  // coding_frequency: yup.string().required(isRequiredMessage),
  // receive_notifications: yup.string().required(isRequiredMessage),
});
