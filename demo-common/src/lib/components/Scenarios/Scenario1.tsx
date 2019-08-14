
import React, { useState } from 'react';
import { ScenarioPanel } from '../ScenarioPanel';
import { SubmitForm, SubmitFormResponse, submitForm } from '../../services/scenario1';

export interface FormProps {
    onSubmit: (data: SubmitForm) => Promise<SubmitFormResponse> | any;
    isLoading: boolean; 
}



export const Form: React.FunctionComponent<FormProps> = (props) => {
    const { onSubmit, isLoading } = props;

    const [name, updateName] = useState("");
    const [lastName, updateLastName] = useState("");




    return <form onSubmit = {(e) => {
        e.preventDefault();  
        onSubmit({
        firstName: name, 
        lastName: lastName
    })}} >
        <input placeholder="First Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateName(e.target.value)} />
        <input placeholder="Last Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLastName(e.target.value)} />
        <button type="submit" disabled= {isLoading}> Submit</button>
    </form>;

}

interface ConfirmationProps {
    data: SubmitFormResponse;
}

export const Confirmation: React.FunctionComponent<ConfirmationProps> = (props) => {

    const { data } = props;

    return <div>
        <p> Hi {data.firstName} {data.lastName}!</p>

        <p> Your unique ID is {data.id}</p>
    </div>
}

export interface Scenario1Props {
}

