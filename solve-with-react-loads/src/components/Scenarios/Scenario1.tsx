
import React, { useState } from 'react';
import { ScenarioPanel } from '../ScenarioPanel';
import {useLoads} from "react-loads"; 
import {Form, Confirmation, submitForm, Scenario1Generic} from "demo-common"; 

export interface Scenario1Props {
}


export const Scenario1: React.FunctionComponent<Scenario1Props> = (props) => {
    const {

    } = props;

    
    const submitFormCb = React.useCallback(submitForm, []);
    
    const {response, load , isIdle,  isPending} = useLoads(submitFormCb, {
        defer: true
    })

    return <Scenario1Generic
        description="Submit a form and return those values with a random unique identifier."
        isLoading = {isPending}
        isPending = {isIdle}
        data = {response}
        onSubmit = {submitFormCb}  

    />
}

