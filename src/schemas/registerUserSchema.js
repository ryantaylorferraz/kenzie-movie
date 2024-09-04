import { z } from "zod";

export const registerUserSchema = z.object({
    name: z.string().min(1, "* Este campo é obrigatório."),
    email: z.string().email("* Forneça uma email válido").min(1, "* Este campo é obrigatório."),
    password: z.string().min(8, "* São necessários pelo menos oito caracteres.")
    .regex(/[a-z]+/, "* É necessário conter pelo menos uma letra minúscula.")
    .regex(/[A-Z]+/, "* É necessário conter pelo menos uma letra maiúscula.")
    .regex(/[0-9]+/, "* É necessário conter pelo menos um número."),
    confirmPassword: z.string().min(1, "* Confirmar a senha é obrigatório.")
}).refine(({password, confirmPassword}) => password.includes(confirmPassword), {
    message: "*As senhas não correspondem.",
    path: ["confirmPassword"]
})