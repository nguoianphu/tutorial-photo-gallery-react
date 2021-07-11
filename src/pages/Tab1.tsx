import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonList, IonItem, IonProgressBar, IonSpinner, IonItemDivider, IonRange, IonReorderGroup, IonLabel, IonReorder, IonSegment, IonSegmentButton, IonToggle } from '@ionic/react';
import './Tab1.css';
import ModalExample from '../components/ModalExample';
import { ActionSheetExample } from '../components/ActionSheet';
import { share, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

const Tab1: React.FC = () => {
    const [checked, setChecked] = useState(false);
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

                <IonFab vertical="center" horizontal="center" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={share} />
                    </IonFabButton>
                    <IonFabList side="top">
                        <IonFabButton><IonIcon icon={logoVimeo} /></IonFabButton>
                    </IonFabList>
                    <IonFabList side="bottom">
                        <IonFabButton><IonIcon icon={logoFacebook} /></IonFabButton>
                    </IonFabList>
                    <IonFabList side="start">
                        <IonFabButton><IonIcon icon={logoInstagram} /></IonFabButton>
                    </IonFabList>
                    <IonFabList side="end">
                        <IonFabButton><IonIcon icon={logoTwitter} /></IonFabButton>
                    </IonFabList>
                </IonFab>

                <IonItemDivider>Range Labels - With Snaps & Ticks</IonItemDivider>
                <IonItem>
                    <IonRange min={1000} max={2000} step={100} snaps={true} color="secondary" />
                </IonItem>

                <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
                <IonProgressBar type="indeterminate"></IonProgressBar><br />
                <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />

                <IonSpinner name="crescent" color="tertiary" />

                <IonReorderGroup disabled={false}>
                    <IonReorder>
                        <IonItem>
                            <IonLabel>Item 7</IonLabel>
                        </IonItem>
                    </IonReorder>
                    <IonReorder>
                        <IonItem>
                            <IonLabel>Item 8</IonLabel>
                        </IonItem>
                    </IonReorder>
                </IonReorderGroup>

                <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="dogs">
                        <IonLabel>Friends</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="cats">
                        <IonLabel>Enemies</IonLabel>
                    </IonSegmentButton>
                </IonSegment>

                <IonList>
                    <IonItemDivider>Default Toggle</IonItemDivider>
                    <IonItem>
                        <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                        <IonToggle color="primary" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
