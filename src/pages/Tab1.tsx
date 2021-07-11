import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import ModalExample from '../components/ModalExample';
import { ActionSheetExample } from '../components/ActionSheet';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ActionSheetExample name="Action Sheet" />
                <ModalExample name="Animation" />
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
