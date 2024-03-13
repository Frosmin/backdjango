import { useForm } from 'react-hook-form';
import { createTask } from "E:/DATOS/aplicaciones/phyton/backdjango/client/api/tasks.api.js";
import { useNavigate } from "react-router-dom";

export function TasksFormPage() {
    const { register, handleSubmit, formState: {errors} } = useForm();

     const navigate = useNavigate();

    const onSubmit = handleSubmit( async (data) => {
        //console.log(data);
      const res = await createTask(data)
      console.log(res)
      navigate('/tasks')
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    {...register('title', { required: true })}
                />
                {errors.title && <span>este campo es requerido</span>}

                <textarea
                    rows="3"
                    placeholder="description"
                    {...register('description', { required: true })}
                ></textarea>
                {errors.description && <span>este campo es requerido des</span>}

                <button type="submit">Save</button>
            </form>
        </div>
    )
}