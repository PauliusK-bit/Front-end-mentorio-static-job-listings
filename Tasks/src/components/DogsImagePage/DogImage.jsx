import { useEffect, useState } from "react";

function DogImage() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const image = await res.json();
      console.log(image);
      setDogImage(image.message);
    };
    fetchImage();
  }, []);

  const imageHandler = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const image = await res.json();
    setDogImage(image.message);
  };

  return (
    <div className="dog-image">
      <button onClick={imageHandler}>Get A Random Image</button>
      <img src={dogImage} alt="" />
    </div>
  );
}

export default DogImage;
