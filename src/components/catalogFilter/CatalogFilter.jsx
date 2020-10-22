import React from 'react'
import {useForm } from 'react-hook-form'
import './assets/CatalogFilter.css'

const CatalogFrom = () => {

    const {register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="f">
        <h3>Buscador</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
           <div>

           <label htmlFor="categoria">Categoria</label>
           <br/>
           <select id="categoria" name="categoria" ref={register}>
               <option value="ancheta">Ancheta</option>
               <option value="Caja personalizada">Caja Personalizada</option>
               <option value="Caja Sorpresa">Caja Sorpresa</option>
               <option value="Arreglo floral">Arreglo Floral</option>
               <option value="Arreglo Globos">Arreglo Globos</option>
               <option value="Peluches">Peluches</option>
           </select>
           </div>
            <div>
           <label htmlFor="precio">Precio</label>
            <br/>
           <select id="precio" name="precio" ref={register}>
               <option value="Entre 10.000 y 50.000">Entre 10.000 y 50.000</option>
               <option value="Entre 50.000 y 100.000<">Entre 50.000 y 100.000</option>
               <option value="Entre 100.000 y 200.000">Entre 100.000 y 200.000</option>
               <option value="Más de 200.000">Más de 200.000</option>
           </select>
            </div>
        <div>

           <label htmlFor="ocasion">Ocasion</label>
           <br/>
           <select id="precio" name="precio" ref={register}>
               <option value="aniversario">Aniversario</option>
               <option value="cumpleaños">Cumpleaños</option>
               <option value="baby showe">Baby Shower</option>
               <option value="bodas">Bodas</option>
               <option value="grados">Grados</option>
           </select>
        </div>
        <div>
           <label htmlFor="tiempo">Tiempo de entrega</label>
           <br/>
           <select id="tiempo" name="tiempo" ref={register}>
                <option value="semana">Esta semana</option>
                <option value="dos semanas">La siguiente semana</option>
                <option value="mes">En un mes</option>
           </select>
        </div>
        <div className="palabra">
           <label htmlFor="palabra">Busqueda por palabra</label>
           <br/>
           <input type="text" id="palabra" name="palabra" ref={register}/>

        </div>
           <input type="submit"/>
       </form>
        </div>
    );
}

export default CatalogFrom;