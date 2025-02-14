import waffleImage from "../images/image-waffle-desktop.jpg";

function WaffleItem(props) {
  const { data } = props;
  const { name, category, price } = data;

  return (
    <div className="desert-item">
      <div className="desert-description">
        <img src={waffleImage} alt="" />
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <h4 className="price">${price}</h4>
      </div>
    </div>
  );
}

export default WaffleItem;
