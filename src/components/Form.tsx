// "use client";
import {useForm} from '@tanstack/react-form';



const Form = () => {
    const form = useForm({
      defaultValues: {
        nom: "",
        prenom: "",
        dateNaissance: "",
        nationalite: "",
        email: "",
        telephone: "",
        adresse: "",
        eglise: "",
        motivation: "",
        pieceIdentite: null,
      },
      onSubmit: async ({ value }) => {
        console.log(value);
      },
    });

    return (
      <div>
        <form
            
          onSubmit=
          {(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}>
          {/* CHAMP 4 : Nationalité
          <form.Field
            name="nationalite"
            children={(field) => (
              <div className="mb-4">
                <label htmlFor={field.name}></label>
                <input
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                />
              </div>
            )}
          /> */}
          
        </form>
      </div>
    );
}
export default Form;