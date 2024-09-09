import React, { useState } from 'react';
import '../AddApartment.css'; // Import stylów

const AddApartment = () => {
  const [formData, setFormData] = useState({
    buildingType: '',
    floor: '',
    floorsNumber: '',
    buildingMaterial: '',
    windows: '',
    heating: '',
    yearBuilt: '',
    condition: '',
    rent: '',
    ownership: '',
    availableFrom: '',
    media: [],
    security: [],
    equipment: [],
    additionalInfo: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiChange = (e, key) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [key]: checked
        ? [...prevData[key], value]
        : prevData[key].filter((item) => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h2>Dodaj mieszkanie na sprzedaż</h2>
      <form onSubmit={handleSubmit} className="apartment-form">
        
        <div className="form-group">
          <label>Rodzaj zabudowy:</label>
          <input type="text" name="buildingType" value={formData.buildingType} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Piętro:</label>
          <input type="number" name="floor" value={formData.floor} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Liczba pięter:</label>
          <input type="number" name="floorsNumber" value={formData.floorsNumber} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Materiał budynku:</label>
          <input type="text" name="buildingMaterial" value={formData.buildingMaterial} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Okna:</label>
          <input type="text" name="windows" value={formData.windows} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Ogrzewanie:</label>
          <input type="text" name="heating" value={formData.heating} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Rok budowy:</label>
          <input type="number" name="yearBuilt" value={formData.yearBuilt} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Stan wykończenia:</label>
          <input type="text" name="condition" value={formData.condition} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Czynsz:</label>
          <input type="text" name="rent" value={formData.rent} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Forma własności:</label>
          <input type="text" name="ownership" value={formData.ownership} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Dostępne od:</label>
          <input type="text" name="availableFrom" value={formData.availableFrom} onChange={handleChange} />
        </div>

        {/* Media */}
        <div className="form-group-checkbox">
          <label>Media:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="internet" onChange={(e) => handleMultiChange(e, 'media')} /> Internet
            </label>
            <label>
              <input type="checkbox" value="telewizja kablowa" onChange={(e) => handleMultiChange(e, 'media')} /> Telewizja kablowa
            </label>
            <label>
              <input type="checkbox" value="telefon" onChange={(e) => handleMultiChange(e, 'media')} /> Telefon
            </label>
          </div>
        </div>

        {/* Zabezpieczenia */}
        <div className="form-group-checkbox">
          <label>Zabezpieczenia:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="rolety antywłamaniowe" onChange={(e) => handleMultiChange(e, 'security')} /> Rolety antywłamaniowe
            </label>
            <label>
              <input type="checkbox" value="drzwi / okna antywłamaniowe" onChange={(e) => handleMultiChange(e, 'security')} /> Drzwi/okna antywłamaniowe
            </label>
            <label>
              <input type="checkbox" value="domofon / wideofon" onChange={(e) => handleMultiChange(e, 'security')} /> Domofon/wideofon
            </label>
            <label>
              <input type="checkbox" value="monitoring / ochrona" onChange={(e) => handleMultiChange(e, 'security')} /> Monitoring/ochrona
            </label>
            <label>
              <input type="checkbox" value="system alarmowy" onChange={(e) => handleMultiChange(e, 'security')} /> System alarmowy
            </label>
            <label>
              <input type="checkbox" value="teren zamknięty" onChange={(e) => handleMultiChange(e, 'security')} /> Teren zamknięty
            </label>
          </div>
        </div>

        {/* Wyposażenie */}
        <div className="form-group-checkbox">
          <label>Wyposażenie:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="meble" onChange={(e) => handleMultiChange(e, 'equipment')} /> Meble
            </label>
            <label>
              <input type="checkbox" value="pralka" onChange={(e) => handleMultiChange(e, 'equipment')} /> Pralka
            </label>
            <label>
              <input type="checkbox" value="zmywarka" onChange={(e) => handleMultiChange(e, 'equipment')} /> Zmywarka
            </label>
            <label>
              <input type="checkbox" value="lodówka" onChange={(e) => handleMultiChange(e, 'equipment')} /> Lodówka
            </label>
            <label>
              <input type="checkbox" value="kuchenka" onChange={(e) => handleMultiChange(e, 'equipment')} /> Kuchenka
            </label>
            <label>
              <input type="checkbox" value="piekarnik" onChange={(e) => handleMultiChange(e, 'equipment')} /> Piekarnik
            </label>
            <label>
              <input type="checkbox" value="telewizor" onChange={(e) => handleMultiChange(e, 'equipment')} /> Telewizor
            </label>
          </div>
        </div>

        {/* Informacje dodatkowe */}
        <div className="form-group-checkbox">
          <label>Informacje dodatkowe:</label>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" value="balkon" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Balkon
            </label>
            <label>
              <input type="checkbox" value="pom. użytkowe" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Pom. użytkowe
            </label>
            <label>
              <input type="checkbox" value="garaż/miejsce parkingowe" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Garaż/miejsce parkingowe
            </label>
            <label>
              <input type="checkbox" value="piwnica" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Piwnica
            </label>
            <label>
              <input type="checkbox" value="ogródek" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Ogródek
            </label>
            <label>
              <input type="checkbox" value="taras" onChange={(e) => handleMultiChange(e, 'additionalInfo')}/> Taras
          </label>
          <label>
            <input type="checkbox" value="winda" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Winda
          </label>
          <label>
            <input type="checkbox" value="dwupoziomowe" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Dwupoziomowe
          </label>
          <label>
            <input type="checkbox" value="oddzielna kuchnia" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Oddzielna kuchnia
          </label>
          <label>
            <input type="checkbox" value="klimatyzacja" onChange={(e) => handleMultiChange(e, 'additionalInfo')} /> Klimatyzacja
          </label>
        </div>
      </div>

      <button type="submit" className="submit-btn">Dodaj mieszkanie</button>
    </form>
  </div>
  );
};

export default AddApartment;
