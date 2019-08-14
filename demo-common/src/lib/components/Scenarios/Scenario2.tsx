
import React, { useState, useCallback } from 'react';

import { fetchList, fetchItem } from '../../services/scenario2';



export interface ListItemProps {
    id: number;
    name: string;
    isSelected: boolean;
    onSelect: (i: number) => void;
}

export interface ItemDetailsProps {
    id: number;
}


export const ListItem: React.FunctionComponent<ListItemProps> = (props) => {

    const { id, name, isSelected, onSelect } = props;

    return <div
        className={`list-item ${isSelected && 'selected'}`}
        onClick={() => onSelect(id)}
    >{id} {name} </div>
}

