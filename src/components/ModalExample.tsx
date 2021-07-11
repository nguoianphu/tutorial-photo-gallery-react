import React, { useState } from 'react';
import { IonModal, IonButton, createAnimation, IonCard, IonCardContent } from '@ionic/react';

interface ContainerProps {
    name: string;
}

export const ModalExample: React.FC<ContainerProps> = () => {
    const [showModal, setShowModal] = useState(false);

    const enterAnimation = (baseEl: any) => {
        const backdropAnimation = createAnimation()
            .addElement(baseEl.querySelector('ion-backdrop')!)
            .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

        const wrapperAnimation = createAnimation()
            .addElement(baseEl.querySelector('.modal-wrapper')!)
            .keyframes([
                { offset: 0, opacity: '0', transform: 'scale(0)' },
                { offset: 1, opacity: '0.99', transform: 'scale(1)' }
            ]);

        return createAnimation()
            .addElement(baseEl)
            .easing('ease-out')
            .duration(500)
            .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
        return enterAnimation(baseEl).direction('reverse');
    }

    return (
        <div>
            <IonModal isOpen={showModal} enterAnimation={enterAnimation} leaveAnimation={leaveAnimation}>
            <IonCard>
            <IonCardContent>
                <i>This is modal content</i>
                <p>It is in an IonCard</p>
            </IonCardContent>
            </IonCard>
                <IonButton onClick={() => setShowModal(false)} expand="block" shape="round">Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)} expand="block" shape="round">Show Modal</IonButton>
        </div>

    )
};

export default ModalExample;
