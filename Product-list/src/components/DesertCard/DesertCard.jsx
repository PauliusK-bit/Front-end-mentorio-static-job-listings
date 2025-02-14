function DesertCard(props) {
  const { data } = props;
  const { image, name, category, price } = data;

  return (
    <div className="desert-item">
      <div className="desert-description">
        <img src={image.desktop} alt="" />
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <h4 className="price">${price}</h4>
      </div>
    </div>
  );
}

export default DesertCard;
