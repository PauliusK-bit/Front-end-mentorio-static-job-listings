import { useState } from "react";
import CarItem from "./CarItem";

function Cars() {
  const [cars, setCars] = useState([]);
  const [carData, setCarData] = useState({
    brand: "",
    model: "",
    engineType: "",
    basePrice: "",
    mileage: "",
    color: "juoda",
    customColor: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCarData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      ...carData,
      color: carData.color === "other" ? carData.customColor : carData.color,
    };

    setCars([...cars, newCar]);
    setCarData({
      brand: "",
      model: "",
      engineType: "electric",
      basePrice: "",
      mileage: "",
      color: "black",
      customColor: "",
      imageUrl: "",
    });
  };

  return (
    <>
      <h1>Mašinų sąrašas</h1>
      {cars.map((car, index) => (
        <CarItem key={index} data={car} />
      ))}

      <form className="car-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="brand">Brandas:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={carData.brand}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="model">Modelis:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={carData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="engineType">Variklio Tipas:</label>
          <select
            name="engineType"
            id="engineType"
            value={carData.engineType}
            onChange={handleChange}
          >
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="basePrice">Bazinė kaina:</label>
          <input
            type="number"
            id="basePrice"
            name="basePrice"
            value={carData.basePrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="mileage">Kilometražas:</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={carData.mileage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="color">Pasirinkite spalvą:</label>
          <select
            name="color"
            id="color"
            value={carData.color}
            onChange={handleChange}
          >
            <option value="black">Juoda</option>
            <option value="red">Raudona</option>
            <option value="blue">Mėlyna</option>
            <option value="silver">Sidabrinė</option>
            <option value="white">Balta</option>
            <option value="special-blue">Special blue</option>
            <option value="other">Other</option>
          </select>
        </div>

        {carData.color === "other" && (
          <div className="form-control">
            <label htmlFor="customColor">Įveskite spalvą:</label>
            <input
              type="text"
              id="customColor"
              name="customColor"
              value={carData.customColor}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-control">
          <label htmlFor="imageUrl">Mašinos nuotrauka (URL):</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={carData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Cars;
