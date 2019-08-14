
import React from 'react';


export interface ScenarioPanelProps {
    description: string;
}



export const ScenarioPanel: React.FunctionComponent<ScenarioPanelProps> = (props) => {
    const {
        description,
        children
    } = props;
    return <div className = "description-panel">

        <p className="description">
            {description}
        </p>
        <div>
            {children}
        </div>


    </div>;
}

