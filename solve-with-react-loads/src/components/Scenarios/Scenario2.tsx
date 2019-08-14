
import React, { useState, useCallback, useEffect } from 'react';
import { ScenarioPanel } from '../ScenarioPanel';
import { useLoads,  } from "react-loads";
import { fetchList, fetchItem, ListItem, ItemDetailsPanel } from 'demo-common';
import _default from 'react-loads/ts/LoadsContext';






export interface Scenario2Props {
}






export const Scenario2: React.FunctionComponent<Scenario2Props> = (props) => {
    const {

    } = props;


    const fetchItemsCb = React.useCallback(fetchList, []);

    const { response, isPending } = useLoads(fetchItemsCb);
    const [selectedIndex, updateSelectedIndex] = useState(-1);
    const fetchData = useCallback(() => fetchItem(selectedIndex), [selectedIndex]); 
    const { response: itemResponse,isPending: itemIsPending, load} = useLoads(fetchData, {
        context: `${selectedIndex}`, 
 //       defer: true
    });
    // useEffect(() => {
    //     if (selectedIndex>=0) {
    //         load(); 
    //     }
    // }, [selectedIndex])

   
   
 

    return <ScenarioPanel
        description="(Using contexts) Preload a list of items. When when selecting an item, then load further details about that item."
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
                {selectedIndex >=0 && <ItemDetailsPanel item = {itemResponse} isLoading = {itemIsPending}/>}
            </div>
        </div>
    </ScenarioPanel>;
}

