
import React, { useState, useCallback } from 'react';

import { fetchList, fetchItem, ItemDetails } from '../../services/scenario2';



export interface ListItemProps {
    id: number;
    name: string;
    isSelected: boolean;
    onSelect: (i: number) => void;
}
export const ListItem: React.FunctionComponent<ListItemProps> = (props) => {

    const { id, name, isSelected, onSelect } = props;

    return <div
        className={`list-item ${isSelected && 'selected'}`}
        onClick={() => onSelect(id)}
    >{id} {name} </div>
}


export interface ItemDetailsProps {
    isLoading: boolean; 
    item?: ItemDetails; 
}

export const ItemDetailsPanel: React.FunctionComponent<ItemDetailsProps> = (props) => {
    const { isLoading, item,  } = props;
    

    return <div>
        <p>{isLoading && "Loading..."}</p>
        {item && <>
            <p>{item.name}</p>
            <p> {item.details}</p>
        </>}
    </div>

}




