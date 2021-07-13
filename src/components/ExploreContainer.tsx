import React from 'react';
import './ExploreContainer.css';
import { isPlatform } from '@ionic/core';
import { getPlatforms, IonButton } from '@ionic/react';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

interface ContainerProps {
    name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
    let platforms: string[];
    platforms = getPlatforms();


    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
    };

    if (!isPlatform('hybrid')) {
        return (
            <div className="container">
                <strong>{name}</strong>
                <p>This is a web view <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
                <strong>{platforms}</strong>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <strong>{name}</strong>
                <p>This is a hybrid view <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
                <strong>{platforms}</strong>
                <IonButton onClick={openScanner}>Scan barcode</IonButton>
            </div>
        );

    }
};

export default ExploreContainer;
