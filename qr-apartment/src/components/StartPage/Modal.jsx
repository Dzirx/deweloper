import React, { useState } from "react";
import ModalImage from "../../assets/apartment.jpg";

function Modal() {
  const [isOpen, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Form data is only stored in memory and not persisted on refresh
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    area: '',
    rooms: '',
    market: '',
    energyCertificate: '',
    advertType: '',
    city: '',
    district: '',
    street: '',
    buildingType: '',
    floor: '',
    totalFloors: '',
    buildingMaterial: '',
    windows: '',
    heating: '',
    constructionYear: '',
    finishingStatus: '',
    rent: '',
    ownership: '',
    availableFrom: '',
    media: [] ,
    securityFeatures: [],
    furnishings: [],
    equipment: [],
    additionalInfo: [], 
    fullName: '', 
    phoneNumber: '' 
  });

  // Store images in the state to persist between steps
  const [images, setImages] = useState([null, null, null]); 

  function handleNextStep(e) {
    e.preventDefault();
    if (step < 9) {
      setStep((prevStep) => prevStep + 1);
    }
  }

  function handlePrevStep(e) {
    e.preventDefault();
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handleChangeCheckbox(e) {
    const { name, value, checked } = e.target;
  
    let updatedValues = [...formData[name]];
  
    if (checked) {
      // Add the selected value to the array if checked
      updatedValues.push(value);
    } else {
      // Remove the value from the array if unchecked
      updatedValues = updatedValues.filter((item) => item !== value);
    }
  
    // Update the corresponding field in formData
    setFormData({
      ...formData,
      [name]: updatedValues
    });
  }
  
  
  

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <>
      {isOpen ? (
        <ModalClick
          setOpen={setOpen}
          step={step}
          setStep={setStep}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          formData={formData}  // Pass form data to steps
          handleChange={handleChange}  // Pass handleChange to update form data
          handleChangeCheckbox={handleChangeCheckbox}
          images={images}  // Pass images to Step2
          setImages={setImages}  // Pass setImages to handle image updates in Step2
        />
      ) : (
        <button className="btn-modal" onClick={() => setOpen(true)}>
          Dodaj mieszkanie
        </button>
      )}
    </>
  );
}

function ModalClick({
  setOpen,
  step,
  handleNextStep,
  handlePrevStep,
  formData,
  handleChange,
  handleChangeCheckbox,
  images,
  setImages,
}) {
  return (
    <div className="modal_container">
      <div className="modal">
        <div className="img">
          <img src={ModalImage} alt="" />
          <p className="close" onClick={() => setOpen(false)}>
            X
          </p>
        </div>

        <div className="content">
          <h2>Uzupełnij formularz</h2>
          <form>
            {step === 1 && (
              <Step1 formData={formData} handleChange={handleChange} />
            )}
            {step === 2 && (
              <Step2 images={images} setImages={setImages} />
            )}
            {step === 3 && (
              <Step3 formData={formData} handleChange={handleChange} />
            )}
            {step === 4 && (
              <Step4 formData={formData} handleChange={handleChange} />
            )}
            {step === 5 && (
                <Step5 formData={formData} handleChangeCheckbox={handleChangeCheckbox} />
            )}
            {step === 6 && (
              <Step6 formData={formData} handleChangeCheckbox={handleChangeCheckbox}  />
            )}
            {step === 7 && (
              <Step7 formData={formData} handleChangeCheckbox={handleChangeCheckbox} />
            )}
            {step === 8 && (
              <Step8 formData={formData} handleChangeCheckbox={handleChangeCheckbox}/>
            )}
            {step === 9 && (
              <Step9 formData={formData} handleChange={handleChange} />
            )}

            
              {step > 1 && (
                <button onClick={handlePrevStep}>Poprzednia strona</button>
              )}
              {step < 9 && (
                <button onClick={handleNextStep}>Następna strona</button>
              )}
              {step === 9 && <button type="submit">Zakończ</button>}
       
          </form>
        </div>
      </div>
    </div>
  );
}

function Step1({ formData, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Tytuł ogłoszenia"
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        placeholder="Cena zł"
        onChange={handleChange}
      />
      <input
        type="text"
        name="area"
        value={formData.area}
        placeholder="Powierzchnia"
        onChange={handleChange}
      />
      <input
        type="text"
        name="rooms"
        value={formData.rooms}
        placeholder="Liczba pokoi"
        onChange={handleChange}
      />
      <input
        type="text"
        name="market"
        value={formData.market}
        placeholder="Rynek"
        onChange={handleChange}
      />
      <input
        type="text"
        name="energyCertificate"
        value={formData.energyCertificate}
        placeholder="Certyfikat energetyczny"
        onChange={handleChange}
      />

      <div className="content-radio">
        <p>Typ ogłoszenia</p>
        <label>
          <input
            type="radio"
            name="advertType"
            value="private"
            checked={formData.advertType === 'private'}
            onChange={handleChange}
          /> Prywatny
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="advertType"
            value="agency"
            checked={formData.advertType === 'agency'}
            onChange={handleChange}
          /> Biuro nieruchomości
        </label>
      </div>
    </>
  );
}

function Step2({ images, setImages }) {
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result; // Store the image as base64 URL
        setImages(updatedImages);
      };
      reader.readAsDataURL(file); // Convert image to base64 format for preview
    }
  };

  return (
    <div className="step2-container">
      <h3>Dodaj zdjęcia</h3>

      <div className="image-upload-grid">
        {images.map((image, index) => (
          <div className="image-upload-slot" key={index}>
            <input
              type="file"
              id={`image${index}`}
              accept="image/*"
              onChange={(e) => handleImageChange(e, index)}
            />
            <label htmlFor={`image${index}`}>
              {image ? (
                <img src={image} alt={`thumbnail ${index}`} className="thumbnail" />
              ) : (
                <span className="plus-icon">+</span>
              )}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3({ formData, handleChange }) {
  return (
    <>
    <h3>Lokalizacja</h3>
      <input
        type="text"
        name="city"
        value={formData.city}
        placeholder="Miejscowość"
        onChange={handleChange}
      />
      <input
        type="text"
        name="district"
        value={formData.district}
        placeholder="Dzielnica"
        onChange={handleChange}
      />
      <input
        type="text"
        name="street"
        value={formData.street}
        placeholder="Ulica lub osiedle"
        onChange={handleChange}
      />
    </>
  );
}
function Step4({ formData, handleChange }) {
    return (
      <>
        <h3>Szczegóły nieruchomości</h3>
  
        <input
          type="text"
          name="buildingType"
          value={formData.buildingType}
          placeholder="Rodzaj zabudowy"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="floor"
          value={formData.floor}
          placeholder="Piętro"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="totalFloors"
          value={formData.totalFloors}
          placeholder="Liczba pięter"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="buildingMaterial"
          value={formData.buildingMaterial}
          placeholder="Materiał budynku"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="windows"
          value={formData.windows}
          placeholder="Okna"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="heating"
          value={formData.heating}
          placeholder="Ogrzewanie"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="constructionYear"
          value={formData.constructionYear}
          placeholder="Rok budowy"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="finishingStatus"
          value={formData.finishingStatus}
          placeholder="Stan wykończenia"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="rent"
          value={formData.rent}
          placeholder="Czynsz"
          onChange={handleChange}
        />
  
        <input
          type="text"
          name="ownership"
          value={formData.ownership}
          placeholder="Forma własności"
          onChange={handleChange}
        />
  
        <input
          type="date"
          name="availableFrom"
          value={formData.availableFrom}
          placeholder="Dostępne od"
          onChange={handleChange}
        />
      </>
    );
  }

  function Step5({ formData, handleChangeCheckbox }) {
    return (
      <>
        <h3>Media</h3>
        <div className="content-checkbox">
          <label>
            <input
              type="checkbox"
              name="media"
              value="internet"
              checked={formData.media.includes('internet')}
              onChange={handleChangeCheckbox}
            />
            Internet
          </label>
  
          <label>
            <input
              type="checkbox"
              name="media"
              value="telewizja kablowa"
              checked={formData.media.includes('telewizja kablowa')}
              onChange={handleChangeCheckbox}
            />
            Telewizja kablowa
          </label>
  
          <label>
            <input
              type="checkbox"
              name="media"
              value="telefon"
              checked={formData.media.includes('telefon')}
              onChange={handleChangeCheckbox}
            />
            Telefon
          </label>
        </div>
      </>
    );
  }
  
  
  
  
  function Step6({ formData, handleChangeCheckbox }) {
    return (
      <>
        <h3>Zabezpieczenia</h3>
        <div className="content-checkbox">
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="rolety antywłamaniowe"
              checked={formData.securityFeatures.includes('rolety antywłamaniowe')}
              onChange={handleChangeCheckbox}
            />
            Rolety antywłamaniowe
          </label>
  
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="drzwi / okna antywłamaniowe"
              checked={formData.securityFeatures.includes('drzwi / okna antywłamaniowe')}
              onChange={handleChangeCheckbox}
            />
            Drzwi / okna antywłamaniowe
          </label>
  
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="domofon / wideofon"
              checked={formData.securityFeatures.includes('domofon / wideofon')}
              onChange={handleChangeCheckbox}
            />
            Domofon / wideofon
          </label>
  
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="monitoring / ochrona"
              checked={formData.securityFeatures.includes('monitoring / ochrona')}
              onChange={handleChangeCheckbox}
            />
            Monitoring / ochrona
          </label>
  
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="system alarmowy"
              checked={formData.securityFeatures.includes('system alarmowy')}
              onChange={handleChangeCheckbox}
            />
            System alarmowy
          </label>
  
          <label>
            <input
              type="checkbox"
              name="securityFeatures"
              value="teren zamknięty"
              checked={formData.securityFeatures.includes('teren zamknięty')}
              onChange={handleChangeCheckbox}
            />
            Teren zamknięty
          </label>
        </div>
      </>
    );
  }
  
  
  function Step7({ formData, handleChangeCheckbox }) {
    return (
      <>
        <h3>Wyposażenie</h3>
        <div className="content-checkbox">
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="meble"
              checked={formData.equipment.includes('meble')}
              onChange={handleChangeCheckbox}
            />
            Meble
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="pralka"
              checked={formData.equipment.includes('pralka')}
              onChange={handleChangeCheckbox}
            />
            Pralka
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="zmywarka"
              checked={formData.equipment.includes('zmywarka')}
              onChange={handleChangeCheckbox}
            />
            Zmywarka
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="lodówka"
              checked={formData.equipment.includes('lodówka')}
              onChange={handleChangeCheckbox}
            />
            Lodówka
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="kuchenka"
              checked={formData.equipment.includes('kuchenka')}
              onChange={handleChangeCheckbox}
            />
            Kuchenka
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="piekarnik"
              checked={formData.equipment.includes('piekarnik')}
              onChange={handleChangeCheckbox}
            />
            Piekarnik
          </label>
  
          <label>
            <input
              type="checkbox"
              name="equipment"
              value="telewizor"
              checked={formData.equipment.includes('telewizor')}
              onChange={handleChangeCheckbox}
            />
            Telewizor
          </label>
        </div>
      </>
    );
  }
  
  
  function Step8({ formData, handleChangeCheckbox }) {
    return (
      <>
        <h3>Informacje dodatkowe</h3>
        <div className="content-checkbox">
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="balkon"
              checked={formData.additionalInfo.includes('balkon')}
              onChange={handleChangeCheckbox}
            />
            Balkon
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="pom. użytkowe"
              checked={formData.additionalInfo.includes('pom. użytkowe')}
              onChange={handleChangeCheckbox}
            />
            Pom. użytkowe
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="garaż/miejsce parkingowe"
              checked={formData.additionalInfo.includes('garaż/miejsce parkingowe')}
              onChange={handleChangeCheckbox}
            />
            Garaż/miejsce parkingowe
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="piwnica"
              checked={formData.additionalInfo.includes('piwnica')}
              onChange={handleChangeCheckbox}
            />
            Piwnica
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="ogródek"
              checked={formData.additionalInfo.includes('ogródek')}
              onChange={handleChangeCheckbox}
            />
            Ogródek
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="taras"
              checked={formData.additionalInfo.includes('taras')}
              onChange={handleChangeCheckbox}
            />
            Taras
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="winda"
              checked={formData.additionalInfo.includes('winda')}
              onChange={handleChangeCheckbox}
            />
            Winda
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="dwupoziomowe"
              checked={formData.additionalInfo.includes('dwupoziomowe')}
              onChange={handleChangeCheckbox}
            />
            Dwupoziomowe
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="oddzielna kuchnia"
              checked={formData.additionalInfo.includes('oddzielna kuchnia')}
              onChange={handleChangeCheckbox}
            />
            Oddzielna kuchnia
          </label>
  
          <label>
            <input
              type="checkbox"
              name="additionalInfo"
              value="klimatyzacja"
              checked={formData.additionalInfo.includes('klimatyzacja')}
              onChange={handleChangeCheckbox}
            />
            Klimatyzacja
          </label>
        </div>
      </>
    );
  }
  
  
  function Step9({ formData, handleChange }) {
    return (
      <>
        <h3>Dane kontaktowe</h3>
        <div className="content-input">
          <label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Imię i nazwisko"
              onChange={handleChange}
            />
          </label>
  
          <label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Numer telefonu"
              onChange={handleChange}
            />
          </label>
        </div>
      </>
    );
  }
  
export default Modal;
