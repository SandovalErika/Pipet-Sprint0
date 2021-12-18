import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";


interface Address {

  street: string;
  number: string;
  extraInfo: string;
  city: string;
  state: string;
  postalCode: string;
  phoneNumber: string;

}

const AddressInput = (): JSX.Element => {
  const initialValues: Address = {
    street: "",
    number: "",
    extraInfo: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
  };

  const onSubmit = (values: Address) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  console.log(onSubmit);


  return (
    <>
      <h2>Formulario</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form" method="post" >
          <label className="form__label">
            <Field
              name="street"
              type="text"
              className="form__input form_input"
              placeholder="Street"
            />
          </label>
          <ErrorMessage
            name="street"
            component="span"
            className="form__error"
          />
          <br />
          <label className="form__label">
            <Field
              name="number"
              type="text"
              className="form__input form_input"
              placeholder="number"
            />
          </label>
          <ErrorMessage
            name="number"
            component="span"
            className="form__error"
          />
          <br />
          <label htmlFor="extraInfo" className="form__label">
            <Field
              name="extraInfo"
              as="textarea"
              className="form__input form_input"
              placeholder="Extra Info"
            />
          </label>
          <ErrorMessage
            name="extraInfo"
            component="span"
            className="form__error"
          />
          <br />
          <label className="form__label">
            <Field
              name="city"
              type="text"
              className="form__input form_input"
              placeholder="city"
            />
          </label>
          <ErrorMessage
            name="city"
            component="span"
            className="form__error"
          />
          <br />
          <label className="form__label">
            <Field
              name="state"
              type="text"
              className="form__input form_input"
              placeholder="state"
            />
          </label>
          <ErrorMessage
            name="state"
            component="span"
            className="form__error"
          />
          <br />
          <label className="form__label">
            <Field
              name="postalCode"
              type="text"
              className="form__input form_input"
              placeholder="Postal Code"
            />
          </label>
          <ErrorMessage
            name="postalCode"
            component="span"
            className="form__error"
          />
          <br />
          <label className="form__label">
            <Field
              name="phoneNumber"
              type="text"
              className="form__input form_input"
              placeholder="Phone Number"
            />
          </label>
          <ErrorMessage
            name="phoneNumber"
            component="span"
            className="form__error"
          />
          <br />
          <button type="submit" className="btn">
            Enviar
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default AddressInput;