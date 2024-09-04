import React from "react";
import { Header } from "../../components/Header";
import movieImage from "../../assets/imgLogo.png";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Button";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useUserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserSchema } from "../../schemas/registerUserSchema";


export const RegisterPage = () => {
  const {registerUser} = useUserContext()
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(registerUserSchema)
  });

  const submit = (formData) => {
    delete formData.confirmPassword
    registerUser(formData)
  }

  return (
    <>
      <Header
        logo={movieImage}
        text={"Cadastre-se"}
        link="/registerpage"
        button={<Link to="/loginpage">Entrar</Link>}
      />
      <main className={styles.container}>
        <section className={styles.sectionContainer}>
          <div className={styles.divBox}>
            <h1>Cadastro</h1>
            <Link to="/"><button>  <FaArrowLeft /> Voltar</button></Link>
          </div>
          <p>Preencha os campos para cadastrar-se</p>
          <form onSubmit={handleSubmit(submit)}>
              <div className={styles.divInput}>
                  <Input type="text" placeholder="Nome" {...register("name")} error={errors.name} />
                  <Input type="email" placeholder="Email" {...register("email")} error={errors.email} />
                  <Input type="password" placeholder="Senha" {...register("password")} error={errors.password} />
                  <Input type="text" placeholder="Confirmar Senha" {...register("confirmPassword")} error={errors.confirmPassword} />
              </div>
              <div className={styles.divBtn}><Button className={styles.btnCadastrar} type="submit" >Cadastrar-se</Button></div>
          </form>

        </section>

      </main>
      <Footer />
    </>
  );
};
