function CarItem(props) {
  const { data } = props;
  const {
    brand,
    model,
    engineType,
    basePrice,
    mileage,
    color,
    customColor,
    imageUrl,
  } = data;

  const basePriceNum = Number(basePrice);
  const mileageNum = Number(mileage);

  const additionalPrice =
    engineType === "electric"
      ? 10000
      : engineType === "hybrid"
      ? 7500
      : engineType === "diesel"
      ? 5000
      : 0;

  const baseColors = ["black", "red", "blue", "silver", "white"];
  let colorPrice = 0;

  if (color === "special blue") {
    colorPrice = 500;
  } else if (!baseColors.includes(color)) {
    colorPrice = 3000;
  }

  const finalPriceWithExtras = basePriceNum + additionalPrice + colorPrice;

  let mileageDiscount = 0;
  if (mileageNum > 400000) {
    mileageDiscount = 0.5;
  } else if (mileageNum > 100000) {
    mileageDiscount = 0.3;
  } else if (mileageNum > 50000) {
    mileageDiscount = 0.2;
  } else if (mileageNum > 20000) {
    mileageDiscount = 0.15;
  } else if (mileageNum > 0) {
    mileageDiscount = 0.1;
  }

  const mileageDiscountAmount = finalPriceWithExtras * mileageDiscount;

  const finalPrice = finalPriceWithExtras - mileageDiscountAmount;

  const pvmPrice = finalPrice * 0.21;

  const carFinalPrice = pvmPrice + finalPrice;

  return (
    <div className="car-item">
      <div className="car-item-wrapper">
        <h3>Bazinė automobilio kaina: {basePrice}</h3>
        <p>Variklio tipas: {engineType}</p>
        <p>Spalva: {color}</p>
        <p>
          Galutinė kaina: <span>{finalPriceWithExtras}</span>
        </p>
        <img src={imageUrl} alt="" />
        <div>
          <h1>Kainos sumažėjimas:</h1>
          <p>Dėl kilometražo: {mileageDiscountAmount}</p>
          <p>Nuolaida: {mileageDiscount}</p>
          <p>Galutinė kaina: {finalPrice}</p>
          <p>PVM:{pvmPrice} </p>
        </div>
        <div>
          <h1>Galutinė automobilio kaina yra {carFinalPrice}</h1>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
