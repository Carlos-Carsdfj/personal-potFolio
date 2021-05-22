
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xgerajdo");
  if (state.succeeded) {
      return <p>Thank you for your message I will contact you as soon as I can!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className={styles.formContent}>
      
       <label htmlFor="email">
        Contact Me
      </label>
     
    
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className={styles.contentTexts}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder=' your email to contact you'/>
      
      <textarea
        id="message"
        name="message"
        placeholder=' tell me your needs or project in mind '
      />
      </div> 
    
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

