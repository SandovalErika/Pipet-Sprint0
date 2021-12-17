import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import validationSchema from "./validationSchema";


interface Schedule {

  monday: { startTime: string; endTime: string; };
  tuesday: { startTime: string; endTime: string; };
  wednesday: { startTime: string; endTime: string; };
  thursday: { startTime: string; endTime: string; };
  friday: { startTime: string; endTime: string; };
  saturday: { startTime: string; endTime: string; };
  sunday: { startTime: string; endTime: string; };
}

const ScheduleInput = (): JSX.Element => {
  const initialValues: Schedule = {
    monday: { startTime: "", endTime: "" },
    tuesday: { startTime: "", endTime: "" },
    wednesday: { startTime: "", endTime: "" },
    thursday: { startTime: "", endTime: "" },
    friday: { startTime: "", endTime: "" },
    saturday: { startTime: "", endTime: "" },
    sunday: { startTime: "", endTime: "" },
  };

  const onSubmit = (values: Schedule) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  const [isChecked, setIsChecked] = useState(true);
  //    const open = () =>{
  //   if (isChecked){
  //     return "Abierto"
  //   }
  // }

  // const close = () =>{
  //   if (isChecked){
  //     return "Cerrado"
  //   }
  // }

  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(true);
  const [isChecked6, setIsChecked6] = useState(true);
  const [isChecked7, setIsChecked7] = useState(true);



  return (
    <>
      <h2>Horario</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}

      >
        <Form className="form">
          <label className="containerOption">
            <p>Lunes</p>
            <label className="switch" >

              <input
                type="checkbox"
                onClick={() => setIsChecked(!isChecked)}

              />
              <span className="slider round"></span>

            </label>

            <label className="form__schedule">

              <input
                name="monday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked(e.currentTarget.checked)}
                disabled={isChecked}
              />
              <span>-</span>
              <input
                name="monday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked(e.currentTarget.checked)}
                disabled={isChecked}
              />

              <ErrorMessage
                name="monday"
                component="span"
                className="form__error"
              />
            </label>
          </label>
          <br />
          <label className="containerOption" >
            <p>Martes</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked2(!isChecked2)}
              />
              <span className="slider round"></span>
            </label>



            <label className="form__schedule">

              <input
                name="tuesday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked2(e.currentTarget.checked)}
                disabled={isChecked2}
              />
              <span>-</span>
              <input
                name="tuesday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked2(e.currentTarget.checked)}
                disabled={isChecked2}
              />

            </label>
          </label>
          <br />
          <label className="containerOption">
            <p>Miercoles</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked3(!isChecked3)}
              />
              <span className="slider round"></span>
            </label>

            <label className="form__schedule">

              <input
                name="wednesday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked3(e.currentTarget.checked)}
                disabled={isChecked3}
              />
              <span>-</span>
              <input
                name="wednesday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked3(e.currentTarget.checked)}
                disabled={isChecked3}
              />

            </label>
          </label>
          <br />
          <label className="containerOption">
            <p>Jueves</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked4(!isChecked4)}
              />
              <span className="slider round"></span>
            </label>

            <label className="form__schedule">

              <input
                name="thursday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked4(e.currentTarget.checked)}
                disabled={isChecked4}
              />
              <span>-</span>
              <input
                name="thursday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked4(e.currentTarget.checked)}
                disabled={isChecked4}
              />

            </label>
          </label>
          <br />
          <label className="containerOption">
            <p>Viernes</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked5(!isChecked5)}
              />
              <span className="slider round"></span>
            </label>

            <label className="form__schedule">

              <input
                name="friday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked5(e.currentTarget.checked)}
                disabled={isChecked5}
              />
              <span>-</span>
              <input
                name="friday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked5(e.currentTarget.checked)}
                disabled={isChecked5}
              />

            </label>
          </label>
          <br />
          <label className="containerOption">
            <p>Sabado</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked6(!isChecked6)}
              />
              <span className="slider round"></span>
            </label>

            <label className="form__schedule">

              <input
                name="saturday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked6(e.currentTarget.checked)}
                disabled={isChecked6}
              />
              <span>-</span>
              <input
                name="saturday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked6(e.currentTarget.checked)}
                disabled={isChecked6}
              />

            </label>
          </label>
          <br />
          <label className="containerOption">
            <p>Domingo</p>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setIsChecked7(!isChecked)}
              />
              <span className="slider round"></span>
            </label>

            <label className="form__schedule">

              <input
                name="saturday.startTime"
                type="text"
                className="form__input"
                placeholder="Abre a las"
                onChange={(e) => setIsChecked7(e.currentTarget.checked)}
                disabled={isChecked7}
              />
              <span>-</span>
              <input
                name="saturday.endTime"
                type="text"
                className="form__input"
                placeholder="Cierra a las"
                onChange={(e) => setIsChecked7(e.currentTarget.checked)}
                disabled={isChecked7}
              />

            </label>
          </label>

        </Form>
      </Formik>
    </>
  );

}

export default ScheduleInput;