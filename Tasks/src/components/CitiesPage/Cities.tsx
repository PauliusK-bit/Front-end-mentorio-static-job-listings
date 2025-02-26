import { useState } from "react";
import CityItem from "./CityItem";
import CityContextProvider, { City } from "./CitiesContextProvider";
import { ReactFormState } from "react-dom/client";

const CityList = () => {
  const [cities, setCities] = useState<City[]>([
    {
      name: "Vilnius",
      population: 500000,
      location: { continent: "Europe", country: "Lithuania" },
      touristAttractions: ["Gedimino pilis"],
      isCapital: true,
    },
    {
      name: "Kaunas",
      population: 295000,
      location: { continent: "Europe", country: "Lithuania" },
      touristAttractions: ["Laisvės alėja", "Kauno pilis"],
      isCapital: false,
    },
    {
      name: "Paris",
      population: 2148000,
      location: { continent: "Europe", country: "France" },
      touristAttractions: ["Eifelio bokštas", "Luvras"],
      isCapital: true,
    },
    {
      name: "Tokyo",
      population: 13929286,
      location: { continent: "Asia", country: "Japan" },
      touristAttractions: ["Sensoji šventykla", "Tokijo bokštas"],
      isCapital: true,
    },
    {
      name: "New York",
      population: 8419600,
      location: { continent: "North America", country: "USA" },
      touristAttractions: ["Laisvės statula", "Times Square"],
      isCapital: false,
    },
  ]);

  const [newCity, setNewCity] = useState<City>({
    name: "",
    population: 0,
    location: {
      continent: "",
      country: "",
    },

    touristAttractions: [],
    isCapital: false,
  });

  const handleInputChange = (e: React.FormEvent) => {
    const { name, value } = e.target;
    setNewCity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddCity = (e: React.FormEvent) => {
    e.preventDefault();
    setCities((prevCities) => [
      ...prevCities,
      {
        name: newCity.name,
        population: newCity.population,
        location: {
          continent: newCity.continent,
          country: newCity.country,
        },
        touristAttractions: newCity.touristAttractions.split(","),
        isCapital: newCity.isCapital === "true",
      },
    ]);
    setNewCity({
      name: "",
      population: 0,
      location: {
        continent: "",
        country: "",
      },

      touristAttractions: [],
      isCapital: false,
    });
  };

  return (
    <>
      <CityContextProvider>
        <h2>Miestu sarasas</h2>
        {cities.map((city, index) => (
          <CityItem key={index} data={city} />
        ))}
      </CityContextProvider>

      <h3>Pridėti naują miestą</h3>
      <form onSubmit={handleAddCity}>
        <div className="form-control">
          <input
            type="text"
            name="name"
            value={newCity.name}
            placeholder="Miesto pavadinimas"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            name="population"
            value={newCity.population}
            placeholder="Gyventojų skaičius"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="continent"
            value={newCity.continent}
            placeholder="Kontinentas"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="country"
            value={newCity.country}
            placeholder="Šalis"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="touristAttractions"
            value={newCity.touristAttractions}
            placeholder="Turistiniai objektai"
            onChange={handleInputChange}
            required
          />
        </div>
        <label>
          Sostinė?
          <select
            name="isCapital"
            value={newCity.isCapital}
            onChange={handleInputChange}
          >
            <option value="false">Ne</option>
            <option value="true">Taip</option>
          </select>
        </label>
        <button type="submit">Pridėti miestą</button>
      </form>
    </>
  );
};

export default CityList;
