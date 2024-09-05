import React from 'react'
import styles from "./style.module.scss"
import { Input } from '../Form/Input'
import { useForm } from 'react-hook-form'
import { Button } from '../Button'
import { useReviewContext } from '../../providers/ReviewContext'
import { useUserContext } from '../../providers/UserContext'

export const ModalReview = ({movieImg}) => {
    const {modalReview, setModalReview, createReview} = useReviewContext() 
    const {user} = useUserContext()
    console.log(user);
    
    const {register, handleSubmit} = useForm()
    const userId = localStorage.getItem("@USERID:")


    const submit = ({score, description}) => {
        const newReview = {
            movieId: movieImg.id,
            userId: userId,
            score: score,
            description: description,
            name: user
        }
        console.log(newReview);
        
        setModalReview(false)
        createReview(newReview)
    }
  return (
    <div className={styles.modalOverlay} role='dialog'>
        <div className={styles.modalBox}>
            <div className={styles.divHeaderModal}>
                <h1>Avaliação</h1>
                <p>X</p>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input type="number" min="0" max="10" placeholder="Selecione uma nota" {...register("score")} />
                <textarea className={styles.inputTextarea} maxLength={100} rows="10" cols="35" placeholder='Deixe um comentário' {...register("description")}/>
                <Button type="submit">Avaliar</Button>
            </form>
        </div>
    </div>
  )
}
