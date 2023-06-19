import audiImg from "../assets/images/cars-big/audi-box.png";
import golf6Img from "../assets/images/cars-big/golf6-box.png";
import toyotaImg from "../assets/images/cars-big/toyota-box.png";
import bmwImg from "../assets/images/cars-big/bmw-box.png";
import benzImg from "../assets/images/cars-big/benz-box.png";
import passatImg from "../assets/images/cars-big/passat-box.png";

const carModel = [
  {
    model: "Audi A1",
    price: "$23,410",
    discount: "7% Off",
    modelName: "1,394 cc",
    doors: "2/3",
    modelType: "Auto",
    modelLooks: "Petrol",
    modelImg: audiImg,
  },
  {
    model: "Golf 6 TDI",
    price: "$13,918",
    discount: "10% Off",
    modelName: "2,500 cc",
    doors: "4/5",
    modelType: "Auto",
    modelLooks: "Diesel",
    modelImg: golf6Img,
  },
  {
    model: "Toyota Camry",
    price: "$21,550",
    discount: "8% Off",
    modelName: "2487 cc",
    doors: "4/5",
    modelType: "Auto",
    modelLooks: "Petrol",
    modelImg: toyotaImg,
  },
  {
    model: "BMW 320i",
    price: "$29,984",
    discount: "9% Off",
    modelName: "1995 cc",
    doors: "2/3",
    modelType: "Auto",
    modelLooks: "Petrol",
    modelImg: bmwImg,
  },
  {
    model: "Mercedes Gik",
    price: "$37,500",
    discount: "7% Off",
    modelName: "2,143 cc",
    doors: "4/5",
    modelType: "Auto",
    modelLooks: "Diesel",
    modelImg: benzImg,
  },
  {
    model: "VW Passat",
    price: "$29,980",
    discount: "10% Off",
    modelName: "1968 cc",
    doors: "4/5",
    modelType: "Auto",
    modelLooks: "Petrol",
    modelImg: passatImg,
  },
];

export default carModel;
