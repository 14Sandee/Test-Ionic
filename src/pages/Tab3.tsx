import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
const Tab3: React.FC = () => {
  const { photos } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image Slider</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
         {/* Grid to display photos */}
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonSlides>
            {photos.map((photo, index) => (
            <IonSlide key={index}>
              <IonImg src={photo.webviewPath} />
            </IonSlide>
          ))}
            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
