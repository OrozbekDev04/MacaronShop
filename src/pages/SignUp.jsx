import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, watch} = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("first_name")); // watch input value by passing the name of it
    console.log(watch("last_name")); // watch input value by passing the name of it
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("first_name")}/>
            <input type="text" {...register("last_name")}/>
            <input type="text" {...register("email")}/>
            <input type="text" {...register("password")}/>
            <input type="text" {...register("password_confirmation")}/>
            {/* include validation with required or other standard HTML validation rules */}
            {/*<input {...register("exampleRequired", { required: true })} />*/}
            {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}
            <button type="submit"></button>
        </form>
    );
};

export default SignUp;