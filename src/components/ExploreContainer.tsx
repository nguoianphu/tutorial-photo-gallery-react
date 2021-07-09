import React from 'react';
import './ExploreContainer.css';
import { isPlatform } from '@ionic/core';

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    if (!isPlatform('hybrid')) {
        return (
            <div className="container">
                <strong>{name}</strong>
                <p>This is a web view <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <strong>{name}</strong>
                <p>This is a hybrid view <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
            </div>
        );

    }
};

export default ExploreContainer;
