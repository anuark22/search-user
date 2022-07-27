import React from 'react';
import '../public/css/Users.css';
import { useForm } from 'react-hook-form';

const EditUser = (props) => {
        const { register, errors, handleSubmit, setValue } = useForm({
            defaultValues: props.currentUser
        });
        setValue( 'name', props.currentUser.name);
        setValue( 'address', props.currentUser.address);
        setValue( 'phonenumber', props.currentUser.phonenumber);
        setValue( 'email', props.currentUser.email);
        const onSubmit = (data, e) => {
            data.id = props.currentUser.id;
            props.updateUser(props.currentUser.id, data);
            //Clear inputs
            e.target.reset();
        }

        return(
            <form className="add-user-form" onSubmit={handleSubmit(onSubmit)} >
                <input type="text" name={props.name} ref={
                        register({
                            required: { value: true, message:'Campo Requerido' }
                        })
                }/>
    
          </form>
        );
    }
export default EditUser;