/* eslint-disable react/prop-types */

import "./CityItem.css";

function CityItem(props) {
  const { data } = props;
  const { name, population, location, touristAttractions } = data;

  return (
    <div className="cities">
      <p> Miestas: {name}</p>
      <p>Populiacija {population}</p>
      <h1>
        Lokacija: {location.continent}, {location.country}
      </h1>
      <li className={data.isCapital ? "capital" : ""}>
        <strong>
          {data.name}
          {data.isCapital ? " (capital)" : ""}
        </strong>{" "}
        {data.isCapital
          ? `${data.name} is capital of ${data.location.country}`
          : ""}
        {data.description}
      </li>

      <div className="city-description">
        <h3>Miesto aprašymas:</h3>
        {name} city is located in {location.continent} and has population of{" "}
        {population}.{" "}
        {data.isCapital && (
          <p>
            {name} is the capital of {location.continent}
          </p>
        )}
        {touristAttractions.length > 0 && (
          <p>
            {touristAttractions.length === 1
              ? `Main Tourist attraction of ${name} is ${touristAttractions[0]}.`
              : `Main Tourist attractions of ${name} are ${touristAttractions.join(
                  ", "
                )}.`}
          </p>
        )}
      </div>
    </div>
  );
}

export default CityItem;
