import React, { useState } from 'react';
import { IonActionSheet, IonButton } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';

interface ContainerProps {
    name: string;
}

export const ActionSheetExample: React.FC<ContainerProps> = () => {
    const [showActionSheet, setShowActionSheet] = useState(false);

    return (
        <div>
            <IonButton onClick={() => setShowActionSheet(true)} expand="block" color="success" shape="round" fill="outline" size="small" slot="start">
                Show Action Sheet
            </IonButton>
            <IonActionSheet
                isOpen={showActionSheet}
                onDidDismiss={() => setShowActionSheet(false)}
                cssClass='my-custom-class'
                buttons={[{
                    text: 'Delete',
                    role: 'destructive',
                    icon: trash,
                    handler: () => {
                        console.log('Delete clicked');
                    }
                }, {
                    text: 'Share',
                    icon: share,
                    handler: () => {
                        console.log('Share clicked');
                    }
                }, {
                    text: 'Play (open modal)',
                    icon: caretForwardCircle,
                    handler: () => {
                        console.log('Play clicked');
                    }
                }, {
                    text: 'Favorite',
                    icon: heart,
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Cancel',
                    icon: close,
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }]}
            >
            </IonActionSheet>
        </div>
    )
};

export default ActionSheetExample;
