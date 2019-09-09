
import React from 'react';
import {Scenario1Generic} from "demo-common"; 
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export interface Scenario1Props {

}

const SUBMIT_FORM = gql`
  mutation createPerson($person: PersonCreateRequest!) {
    createPerson(person: $person)
  }
`;

export const Scenario1: React.FunctionComponent<Scenario1Props> = (props) => {
    const {
       
    } = props;

    const [submitForm, { data }] = useMutation(SUBMIT_FORM);

    return <Scenario1Generic
        onSubmit = {submitForm}
    
    />;
}

