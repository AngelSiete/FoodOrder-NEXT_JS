'use client';
import {useFormStatus} from 'react-dom';

export default function MealsFormSubmit(){
    const {pending} = useFormStatus();
    let content = 'Submit form'
    if (pending){
        content = 'Submitting...'
    }
    return(
        <button disabled={pending}>{content}</button>
    )
}