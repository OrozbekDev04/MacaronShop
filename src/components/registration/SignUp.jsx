import React from 'react';
import Group from "../../assets/img/Kalys/Group 339.png"
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const SignUp = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, formState: { errors } } = useForm();

    return (
            <div className="w-[900px] h-[700px] bg-[#F7EBE5] my-[80px] mx-auto">
                <img src={Group} alt="img" className="h-[130px] w-full" />
                <h1 className="text-center text-[30px] pt-[30px] font-bold">
                    Получите доступ к оптовым ценам
                </h1>
                <p className="text-[18px] font-medium text-center my-[15px]">
                    Пройдите регистрацию
                </p>
                <div className="px-[80px]">
                    <form onSubmit={handleSubmit(data => console.log(data))}>
                        <div className="flex flex-wrap gap-[40px]">
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Это обязательное поле",
                                    pattern: {
                                        value: /^[А-Яа-яA-Za-z]+$/i,
                                        message: "Имя может содержать только буквы"
                                    }
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Имя"
                                        variant="outlined"
                                        className="w-[350px]"
                                        error={!!errors.name}
                                        helperText={errors.name && errors.name.message}
                                    />
                                )}
                            />
                            <Controller
                                name="phone"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Это обязательное поле",
                                    pattern: {
                                        value: /^[0-9\b]+$/,
                                        message: "Номер телефона может содержать только цифры"
                                    }
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        type="tel"
                                        label="Телефон"
                                        variant="outlined"
                                        className="w-[350px]"
                                        error={!!errors.phone}
                                        helperText={errors.phone && errors.phone.message}
                                    />
                                )}
                            />
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
                                        className="w-[350px]"
                                        error={!!errors.email}
                                        helperText={errors.email && errors.email.message}
                                    />
                                )}
                            />
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Это обязательное поле"
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Город"
                                        variant="outlined"
                                        className="w-[350px]"
                                        error={!!errors.address}
                                        helperText={errors.address && errors.address.message}
                                    />
                                )}
                            />
                            <Controller
                                name="address"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Это обязательное поле",
                                }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Адрес"
                                        variant="outlined"
                                        className="w-[350px]"
                                        error={!!errors.address}
                                        helperText={errors.address && errors.address.message}
                                    />
                                )}
                            />
                            <Controller
                                name="company"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Компания"
                                        variant="outlined"
                                        className="w-[350px]"
                                    />
                                )}
                            />
                        </div>
                        <button type="submit"
                                className="w-[720px] h-[50px] bg-blue-700 text-[16px] font-medium text-[#FFFFFF] mt-[30px] mb-[15px]">
                            Отправить заявку на регистрацию
                        </button>
                    </form>
                    <p className="text-center text-[16px] mb-[20px]">
                        Уже зарегистрированы? <span
                        className="font-bold text-[#E7426A] cursor-pointer"
                        onClick={() => navigate("/signIn")}
                    >
                            Войти
                        </span>
                    </p>
                    <p className="text-[12px]">
                        Нажимая на кнопку "Отправить заявку на регистрацию" Я принимаю и соглашаюсь с{' '}
                        <span className="text-blue-500 cursor-pointer">Договором оферты</span> и разрешаю обработку моих
                        персональных данных в соответствии с{' '}
                        <span className="text-blue-500 cursor-pointer">Политикой конфиденциальности</span>
                    </p>
                </div>
            </div>
    );
};

export default SignUp;
