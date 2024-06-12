import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Typography, Box, TextField, Button, Link, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import Group from "../../assets/img/Kalys/Group 339.png"; // Путь к изображению Group
import "../../style/Style.css"

const SignIn = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="gradient-background">
            <div style={{ maxWidth: '600px', height:'590px', margin: '80px auto', backgroundColor: 'rgba(247,235,229,0.43)', borderRadius: '10px' }}>
                <img src={Group} alt="img" className="w-full h-[130px]"/>
                <div className="px-[100px]">
                    <Typography variant="h4" component="h1" gutterBottom align="center" style={{ marginTop: '24px', marginBottom: '16px', fontWeight: 'bold', fontSize: '30px' }}>
                        Вход
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box style={{ marginBottom: '24px' }}>
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Это обязательное поле' }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label="Имя пользователя"
                                        variant="outlined"
                                        error={!!errors.username}
                                        helperText={errors.username ? errors.username.message : ''}
                                        {...field}
                                        style={{ borderRadius: '10px' }}
                                    />
                                )}
                            />
                        </Box>
                        <Box style={{ marginBottom: '24px', position: 'relative' }}>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Это обязательное поле' }}
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        type={showPassword ? "text" : "password"}
                                        label="Пароль"
                                        variant="outlined"
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        {...field}
                                        style={{ borderRadius: '10px' }}
                                    />
                                )}
                            />
                            <IconButton
                                aria-label="Показать/скрыть пароль"
                                onClick={handleClickShowPassword}
                                edge="end"
                                style={{ position: 'absolute', top: '50%', right: '16px', transform: 'translateY(-50%)' }}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </Box>
                        <Box style={{ marginBottom: '16px' }}>
                            <Typography variant="body2" align="end" style={{ color: '#E7426A', cursor: 'pointer', fontSize: '16px' }} onClick={() => navigate("/password")}>
                                Забыли пароль?
                            </Typography>
                        </Box>
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginBottom: '16px', borderRadius: '10px', height: '50px', fontSize: '16px' }}>
                            Войти
                        </Button>
                        <p className="text-center text-[16px] my-[15px]">Еще не зарегистрированы? <br/>
                            <span className="font-bold text-[#E7426A] cursor-pointer" onClick={() => navigate("/signUp")}>Регистрация</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
