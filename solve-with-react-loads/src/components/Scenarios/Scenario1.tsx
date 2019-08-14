
import React, { useState } from 'react';
import { ScenarioPanel } from '../ScenarioPanel';
import {useLoads} from "react-loads"; 
import {Form, Confirmation, submitForm} from "demo-common"; 

export interface Scenario1Props {
}


export const Scenario1: React.FunctionComponent<Scenario1Props> = (props) => {
    const {

    } = props;

    
    const submitFormCb = React.useCallback(submitForm, []);
    
    const {response, load , isIdle,  isPending} = useLoads(submitFormCb, {
        defer: true
    })

    return <ScenarioPanel
        description="Submit a form and return those values with a random unique identifier."
    >

        {!response && <Form onSubmit = {load} isLoading = {isPending}/> }
        {!response && <Form onSubmit = {load} isLoading = {isPending}/> }
        {isPending && "Loading"}
        {response && <Confirmation data = {response}/> }

    </ScenarioPanel>;
}

