/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { useForm } from "react-hook-form";

const Formulario_APP = () => {
   
   const { register, handleSubmit, formState: { errors } } = useForm();
   
   const onSubmit = (data) => {
    console.log(data)
   }

   return (
     <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input type="text" {...register('nombre',{
                    required: true,
                    maxLength: 10
                })}/>
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo debe tener 10 caracteres</p>}
            </div>

            <div>
                <label>Dirección</label>
                <input type="text" {...register('dirección',{
                    required: true,
                })}/>
            </div>

            <div>
                <label>Email</label>
                <input type="text" {...register('email',{
                    pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
                })}/>
                {errors.email?.type === 'pattern' && <p>Correo electrónico inválido</p>}
            </div>
            <div>
                <label>Edad</label>
                <input type="number" {...register('Edad')}/>
            </div>
            <div>
                <label>País</label>
                <select {...register('país')}>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                    {/* Otras opciones aquí */}
                </select>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
   );
}

export default Formulario_APP;
