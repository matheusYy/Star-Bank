//import methods
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Social from './icon/social';
import { Assent } from './error_assets/assent';
//styles
import './form.css';
//create object in Yup
const SignupSign = Yup.object().shape({
  name: Yup.string()
    .min(3, "muito curto...")
    .max(45, "limite de caracteres...")
    .required("é preciso preencher esse campo"),
   textarea: Yup.string()
   .min(5, "mesagem muito curta...")
   .max(145, "ei, está otímo, está ficando longo demais...")
   .required("precisamos de uma mensagem de envio..."),
  email: Yup.string().email("email invalido").required("coloque o seu email!"),
});

interface formsValues {
  name: string;
  email: string;
  textarea: string;
}
export const InputFormik: React.FC = () => {
  const [reload, setReload] = useState(false);
  const initialValues: formsValues = { name: "", email: "", textarea: ""};
  const sleep = (ms: any) => new Promise((r) => setInterval(r, ms));

  async function animate() {
    try {
      setReload(true);
      setTimeout(() => {
        setReload(false);
      }, 800);
    } catch (e) {
      return e;
    }
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSign}
        onSubmit={async (value, action) => {
         
        }}
      >
        {({ isValid, dirty, handleSubmit }) => (
          <Form
            autoComplete="off"
            noValidate
            action="https://formsubmit.co/matheusrodrigues.yy7@gmail.com"
            method="post"
            className='form-style'
            onSubmit={() => animate()} >
           
          <div className='input-sty input-child-sty-name'>
           <span></span>
            <Field 
             id={"nome"} 
             name={"name"}
             placeholder={"seu nome..."}
             className="input-child-sty" 
             autocomplete="off"
             />
            <ErrorMessage name={"name"} 
            render={msg => <span className="span-error-content"> <Assent /> {msg}</span>} />
          </div>
          <div className='input-sty input-child-sty-name'>
           <span></span>
            <Field
              id={"email"}
              name="email"
              type="email"
              placeholder={"seu email..."}
              className="input-child-sty" 
              autocomplete="off"
              />
             <ErrorMessage name={"email"} 
              render={msg => <span className="span-error-content"> <Assent /> {msg}</span>} />
           </div>
           <div className="form-text-area">
            <Field 
             as="textarea" 
             type="text" 
             name="textarea" 
             />
             <ErrorMessage name={"textarea"} 
              render={msg => <div className="span-error-content-textarea"> <Assent /> {msg}</div>} />
           </div>
            <button
              type="submit"
              className="submit-btn-interfac"
              disabled={!isValid || !dirty} 
              >
              enviar
            </button>

            <input type="hidden" name="_next" value="" />
            <input type="hidden" name="_template" value="table" />
          </Form>
        )}
      </Formik>
    </>
  );
};