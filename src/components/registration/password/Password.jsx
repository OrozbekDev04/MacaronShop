import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Group from "../../../assets/img/Kalys/Group 339.png";

const ForgotPassword = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="gradient-background">
            <div style={{ maxWidth: '600px', height: '450px', margin: '80px auto', backgroundColor: 'rgba(247,235,229,0.43)', borderRadius: '10px' }}>
                <img src={Group} alt="img" className="w-full h-[110px]" />
                <div className="px-[80px]">
                    <h1 className="text-center mt-[24px] mb-[10px] text-[30px] font-bold">
                        Забыли пароль?
                    </h1>
                    <p className="mb-[16px] text-center text-[14px] w-[420px]">
                        ведите адрес электронной почты, который вы использовали при регистрации, и мы отправим вам инструкции по сбросу пароля.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box style={{ marginBottom: '24px' }}>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Это обязательное поле",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Введите корректный email"
                                    }
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        className="w-full"
                                        error={!!errors.email}
                                        helperText={errors.email && errors.email.message}
                                    />
                                )}
                            />
                        </Box>
                        <Box style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => navigate("/signIn")}
                                style={{ width: '45%', height: '50px', fontSize: '16px', borderRadius: '10px' }}
                            >
                                Назад
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ width: '45%', height: '50px', fontSize: '16px', borderRadius: '10px' }}
                            >
                                Продолжить
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
