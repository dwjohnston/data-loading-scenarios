
import React, { useState } from 'react';
import { ScenarioPanel } from '../ScenarioPanel';
import { useLoads, createResource } from "react-loads";
import { fetchList, fetchItem } from 'demo-common';



interface ListItemProps {
    id: number;
    name: string;
    isSelected: boolean;
    onSelect: (i: number) => void;
}

interface ItemDetailsProps {
    id: number;
}

export interface Scenario2Props {
}


export const ListItem: React.FunctionComponent<ListItemProps> = (props) => {

    const { id, name, isSelected, onSelect } = props;

    return <div
        className={`list-item ${isSelected && 'selected'}`}
        onClick={() => onSelect(id)}
    >{id} {name} </div>
}



const itemsResource = createResource({
    _namespace: "scenario2", 
    load: fetchItem, 
}); 

console.log(itemsResource); 
export const ItemDetails: React.FunctionComponent<ItemDetailsProps> = (props) => {
    const { id } = props;
    
    //@ts-ignore  - Apparently useLoads isn't on the resource interface. 
    const { response, load, isIdle, isResolved, isPending } = itemsResource.useLoads({
        id: id, 
        args: [id]
    }); 
 
    return <div>
        {id}
        {isIdle && "isIdle"} {isPending && "isPending"} {isResolved && "isResolved"}
        {isPending && "Loading..."}
        {isResolved && response&&  <>
            <p>{response.name}</p>
            <p> {response.details}</p>
        </>}
    </div>

}




export const Scenario2b: React.FunctionComponent<Scenario2Props> = (props) => {
    const {

    } = props;


    const fetchItemsCb = React.useCallback(fetchList, []);

    const { response, load, isIdle, isPending } = useLoads(fetchItemsCb);
    const [selectedIndex, updateSelectedIndex] = useState(-1);

    return <ScenarioPanel
        description="(Using resources) Preload a list of items. When when selecting an item, then load further details about that item."
    >
        <div className="split-pane">

            <div className="list">
                <strong>Items</strong>
                {isPending && "loading..."}
                {response && response.map((v) => <ListItem
                    {...v}
                    isSelected={selectedIndex === v.id}
                    onSelect={updateSelectedIndex}
                />)}

            </div>

            <div className="body">
                {selectedIndex >=0 && <ItemDetails id = {selectedIndex}/>}
            </div>
        </div>
    </ScenarioPanel>;
}

