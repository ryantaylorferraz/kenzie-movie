import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import movieImage from "../../assets/imgLogo.png";
import { Footer } from '../../components/Footer';
import styles from "./style.module.scss";
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../../providers/UserContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema } from '../../schemas/loginUserSchema';


export const LoginPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(loginUserSchema)
    })
    const {loginUser} = useUserContext()

    const submit = (formData) => {
        loginUser(formData)
    }

  return (
    <>
    <section className={styles.container}>
        <Header logo={movieImage} text={"Cadastre-se"} button={"Entrar"} link="/registerpage"/>
        <main>
            <section className={styles.sectionContainer}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit(submit)}>
                <Input type="email" placeholder="Email" {...register("email")} error={errors.email} />
                <Input placeholder="Senha" type="password" {...register("password")} error={errors.password} />
                    <Button>Entrar</Button>
                    <p className={styles.paragraph}>ou</p>
                    <Link to="/registerpage" >Cadastre-se</Link>
                </form>
            </section>
        </main>
    </section>
    <Footer />
    </>
  )
}
