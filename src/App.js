import "./App.css";

import CategoryCard from "./components/CategoryCard";
import DealCard from "./components/DealCard";
import Fashion from "./components/Fashion";
import GiftCard from "./components/GiftCard";
import Navbar from "./components/Navbar";
import Pixture from "./components/Pixture";
import RecommendedFor from "./components/RecommendedFor";
import TreandingDeal from "./components/TreandingDeal";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography } from "@mui/material";
import { Margin, WrapText } from "@mui/icons-material";
import DealCardTwo from "./components/DealCardTwo";
import PixCard from "./components/PixCard";
import Electonic from "./components/Electonic";
import Mobile from "./components/Mobile";
import Laptop from "./components/Laptop";
import Futer from "./components/Futer";
import Help from "./components/Help";
import Link from "./components/Link";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <Pixture />
        {/* Category Cord Scroll */}

        <div
          style={{
            display: "flex",
            marginLeft: "12px",
            marginTop: "12px",
            justifyContent: "space-between",
          }}
        >
          {categoryData.map((value, index) => {
            return <CategoryCard imgLink={value.imgUrl} />;
          })}
        </div>

        {/* <Typography variant="h6">More reasons to shop</Typography> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "25px",
            marginTop: " 15px",
          }}
        >
          <img
            style={{
              width: "33.33%",
              height: "40",
              marginLeft: "12px",
            }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png"
          />
          <img
            style={{
              width: "33.33%",
              height: "40",
            }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png"
          />
          <img
            style={{
              width: "432px",
              height: "40",
            }}
            src="https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "12px 12px 12px 12px",
          }}
        >
          <div
            style={{
              // backgroundColor: "coral",
              // marginLeft: "12px",
              // marginRight: "12px",
              margin: "0px 12px 12px 12px",
              width: "33.33%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {DealData.map((valua, index) => {
              return <DealCard Dealitem={valua} />;
            })}
          </div>

          <div
            style={{
              backgroundColor: "white",
              width: "33.33%",
              display: "flex",
              flexWrap: "wrap",
              margin: "0px 12px 12px 12px",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {DealDatatwo.map((valua, index) => {
              return <DealCardTwo itemtwo={valua} />;
            })}
          </div>
          <div
            style={{
              // backgroundColor: "coral",
              display: "flex",
              flexDirection: "column",
              width: "33.33%",
              justifyContent: "space-around",
            }}
          >
            {PixData.map((valua, index) => {
              return <PixCard itemPix={valua} />;
            })}
          </div>
        </div>
        <Typography sx={{ marginLeft: 2 }} variant="h4">
          Recommended For you
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {RecommendedData.map((value, index) => {
            return <RecommendedFor itemFor={value} />;
          })}
        </div>
        <GiftCard />
        <Typography
          sx={{ marginLeft: 2, marginTop: 3, marginBottom: 3 }}
          variant="h4"
        >
          TreandingDeal in electronic
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {TreandingData.map((valua, index) => {
            return <TreandingDeal itemT={valua} />;
          })}
        </div>

        <Fashion />
        {/* <div
        style={{
          backgroundColor: "coral",
          margin: "12px",
          padding: "12px",
          marginRight: "22px",
        }}

      >
         </div> */}
        <Typography sx={{ marginLeft: 2 }} variant="h4">
          Electronic
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {ElectonicData.map((valua, index) => {
            return <Electonic itemE={valua} />;
          })}
        </div>

        <Typography sx={{ marginLeft: 2 }} variant="h4">
          Mobile and accessories
        </Typography>
        {/* <ScrollMenu  > */}
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {MobileData.map((valua, index) => {
            return <Mobile itemM={valua} />;
          })}
        </div>

        <Typography sx={{ marginLeft: 2 }} variant="h4">
          Laptop and accessories
        </Typography>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {LaptopData.map((valua, index) => {
            return <Laptop itemL={valua} />;
          })}
        </div>

        <img
          style={{
            height: "200px",
            width: "100%",
            marginTop: "8px",
          }}
          src="https://f.nooncdn.com/mpcms/EN0001/assets/139f8735-8378-436c-a658-9e2f2ea7ebba.gif"
        />
        <Help />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "430px",
            // backgroundColor: "pink",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <div style={{}}>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              ELECTRONICS
            </Typography>
            {ElectronicData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>
          <div style={{}}>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              FASHION
            </Typography>
            {FashionData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>
          <div>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              HOME & KITCHEN
            </Typography>
            {HomeData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>
          <div>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              BEAUTY
            </Typography>
            {BeautyData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>{" "}
          <div style={{}}>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              BABY & TOY'S
            </Typography>
            {BabyData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>{" "}
          <div>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              TOP BRAIND
            </Typography>
            {BraindData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>{" "}
          <div>
            <Typography
              variant="h5"
              sx={{ marginLeft: 1, fontSize: 15.6, fontWeight: 700 }}
            >
              DAILY GROCERYIES
            </Typography>
            {DailyData.map((value) => {
              return <Futer item={value} />;
            })}
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$ LINK $$$$$$$$$$$$$$$$$$$4 */}
        <Link />
      </div>
    </>
  );
}

export default App;

let DealData = [
  {
    id: 1,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png",
    heading: "Branchi",
    discription: "Branchi is great bike",
  },
  {
    id: 2,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png",
    // heading: "this iss heading",
    // discription: "this is discription",
  },
  {
    id: 3,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png",
    // heading: "this iss heading",
    // discription: "this is discription",
  },
  {
    id: 4,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png",
    // heading: "this iss heading",
    // discription: "this is discription",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  DealDatatwo $$$$$$$$$$$$$$$$$$$4

let DealDatatwo = [
  {
    id: 1,
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/ca4107ca-5fb7-4d71-a64e-a03e9f53f613.png",
  },
  {
    id: 2,
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/7183265c-bc56-4a1f-9479-d07e918c09f5.png",
  },
  {
    id: 3,
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/a07f7d9b-bdba-4026-9313-905ae5350290.png",
  },
  {
    id: 4,
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/fb01dc2b-7d3a-49b5-bf2f-19181917de64.png",
  },
];
let PixData = [
  {
    id: "1",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png",
  },
  {
    id: "2",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 categoryData $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
let categoryData = [
  {
    id: 1,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/5431f381-094e-413f-b418-a102a94f6075.png",
  },
  {
    id: 2,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/a4100d70-c868-4cda-9854-224e91ff63cc.png",
  },
  {
    id: 3,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/10119d9a-2d92-4a07-9392-eca8849548f9.png",
  },
  {
    id: 4,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/d4b83965-09f0-4664-9e2d-4f49cb997bec.png",
  },
  {
    id: 5,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/e02116bf-a60e-4f82-a222-c38420225dd1.png",
  },
  {
    id: 6,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/95f4a46a-d0b7-4827-b90d-67d7ee62ae29.png",
  },
  {
    id: 7,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/124bada2-1862-4f89-baa1-7926444af823.png",
  },
  {
    id: 8,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/d1f0c21e-9f54-430a-a92e-7e10e56e3feb.png",
  },
  {
    id: 9,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/30c4cca3-3562-4fe7-8322-5beb111bddda.png",
  },
  {
    id: 10,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/0e6f7b79-a40c-4941-b1b2-bdd1cec29302.png",
  },
  {
    id: 11,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png",
  },
  {
    id: 12,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png",
  },
  {
    id: 13,
    imgUrl:
      "https://f.nooncdn.com/mpcms/EN0001/assets/1e394ca9-b06b-4613-a8c0-b2e6d4820419.png",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ RecommendedData $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
let RecommendedData = [
  {
    id: 1,
    imgUrl:
      "https://f.nooncdn.com/products/tr:n-t_240/v1662964834/N53346828A_1.avif",
    heading: "phone",
    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 2,
    imgUrl:
      " https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif",
    heading: "phone",

    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 3,
    imgUrl:
      "https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif",
    heading: "phone",
    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 4,
    imgUrl:
      "https://f.nooncdn.com/products/tr:n-t_240/v1669221709/N30107462A_1.avif",
    heading: "phone",
    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 5,
    imgUrl:
      "https://f.nooncdn.com/products/tr:n-t_240/v1662640939/N53346628A_1.avif",
    // heading: "phone",
    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 6,
    imgUrl:
      "https://f.nooncdn.com/products/tr:n-t_240/v1628140073/N49741483A_1.avif",
    // heading: "phone",
    description:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  TreandingData $$$$$$$$$$$$$$$$$$$
let TreandingData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/14979010/pexels-photo-14979010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "iPhone 14 Pro Max",
    discription:
      "iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple 5G With FaceTime",
  },
  {
    id: 2,
    image:
      "https://f.nooncdn.com/products/tr:n-t_240/v1665067736/N53330834A_1.avif",
    heading: "MacBook Air",
    discription:
      "MacBook Air 13.6-Inch Display, Apple M2 chip with 8-Core CPU And 8-Core GPU, 256GB SSD English Midnight",
  },
  {
    id: 3,
    image:
      "https://f.nooncdn.com/products/tr:n-t_240/v1662647998/N53348815A_1.avif",
    heading: "AirPods",
    discription: "AirPods Pro (2nd generation) White",
  },
  {
    id: 4,
    image:
      " https://f.nooncdn.com/products/tr:n-t_240/v1662647992/N53349205A_1.avif",
    heading: "Watch Series",
    discription:
      "Watch Series 8 GPS 45mm Aluminium Case With Midnight Sport Band",
  },
  {
    id: 5,
    image:
      "https://f.nooncdn.com/products/tr:n-t_240/v1659447849/N52751034A_1.avif",
    heading: "One Plus",
    discription:
      "Nord CE 2 Dual SIM Bahama Blue 8GB RAM 128GB 5G - International Version",
  },
  {
    id: 6,
    image:
      " https://f.nooncdn.com/products/tr:n-t_240/v1667497469/N40633049A_1.avif",
    heading: "Controller",
    discription: "DualSense Wireless PS5 Controller White",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ElectonicData $$$$$$$$$$$$$$$$$$$$4
let ElectonicData = [
  {
    id: 1,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/601017a6-aa7f-45f8-b0be-b4540ab382bb.png",
  },
  {
    id: 2,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/55d96255-74ae-4aaf-8ac2-c3986190fde4.png",
  },
  {
    id: 3,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/7d75a3bd-08c0-4a04-9e8c-cb9547da3047.png",
  },
  {
    id: 4,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/dc317c7b-7401-485a-aefc-0509ebfbebab.png",
  },
  {
    id: 5,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/676517dc-6c08-4f8d-be8c-12d4b5af3384.png",
  },
  {
    id: 5,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/bf672a58-6b5d-4fb1-870a-0034e4291660.png",
  },
  {
    id: 6,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/2f199af6-7143-45dd-ad1e-e253b44b88fa.png",
  },
];
// %$$$$$$$$$$$$$$$$$$$$$$$4 MobileData $$$$$$$$$$$$$$$$$$$$$
let MobileData = [
  {
    id: 1,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/f0e5c9e4-0e5f-4f27-98f5-de983510bb54.png",
  },
  {
    id: 2,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/b215cb83-5249-478a-b1b7-4f9630dfd26e.png",
  },
  {
    id: 3,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/eaaedd8a-ac86-4242-b6d9-0e0e51030124.png",
  },
  {
    id: 4,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/3ad9fb3d-8efe-427a-81e1-08908c85fbb0.png",
  },
  {
    id: 5,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/a8aa2523-0bc6-41cf-9d49-be46f899cdf7.png",
  },
  {
    id: 6,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/d832d95a-d1e2-47cc-852a-3197886128ac.png",
  },
  {
    id: 7,
    image:
      " https://f.nooncdn.com/mpcms/EN0001/assets/790df29c-294c-4c06-b87e-114c560295e6.png",
  },
];
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 LaptopData $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4
let LaptopData = [
  {
    id: 1,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/fcd49457-e3cb-4543-9a9f-e6c133ec5789.png",
  },
  {
    id: 2,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/88778bd1-0351-480f-8b30-62d9f97f2f12.png",
  },
  {
    id: 3,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/0b088ec6-42e1-4b47-bc1d-18efb2f0211b.png",
  },
  {
    id: 4,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/a8df0bd6-b178-4707-98bf-fab7e9e57793.png",
  },
  {
    id: 5,
    image:
      " https://f.nooncdn.com/mpcms/EN0001/assets/7569239c-ccd8-4d23-a6ea-46768a59ce01.png",
  },
  {
    id: 6,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/de1d933f-8266-4da2-9010-59406e1b37ab.png ",
  },
  {
    id: 7,
    image:
      "https://f.nooncdn.com/mpcms/EN0001/assets/b66575de-6208-4ee3-8a7b-ee85fa5b5d9e.png",
  },
];

const ElectronicData = [
  { name: "Mobile" },
  { name: "Tablets" },
  { name: "Laptops" },
  { name: "Home Appliance" },
  { name: "Camera,Photo & Video" },
  { name: "Television" },
  { name: "Headphones" },
  { name: "Video" },
];
const FashionData = [
  { name: "Women's Fashion" },
  { name: "Men's Fashion" },
  { name: "Girl's Fashion " },
  { name: "BOy's Fashion " },
  { name: "Watches" },
  { name: "Jewellery" },
  { name: " Women Handbags " },
  { name: "Men's Eyewear" },
];
const HomeData = [
  { name: "Bath" },
  { name: "Home Decor" },
  { name: "Kitchen & DiningS" },
  { name: "Tools & Home Improvement " },
  { name: "Audio & Video" },
  { name: "Furniture " },
  { name: "Patio,Lawn & Garden " },
  { name: "Pet Supplies" },
];
const BeautyData = [
  { name: "Fragance" },
  { name: "Make-Up" },
  { name: "Haircare" },
  { name: "Sinkcare" },
  { name: "Bath & Body" },
  { name: "Electronic Beauty Tools" },
  { name: "Men's Grooming " },
  { name: "Helth Care Essential" },
];
const BabyData = [
  { name: "Diapering" },
  { name: "Baby Transport" },
  { name: "Nursing & Feeding" },
  { name: "Baby & Kids Fation" },
  { name: "Baby & Toddler Toy" },
  { name: "Tricycle & Scooters" },
  { name: "Board Games & Card " },
  { name: "Outdoor Play" },
];
const BraindData = [
  { name: "Pampers" },
  { name: "Apple" },
  { name: "Nike" },
  { name: "Samsung" },
  { name: "Tefal" },
  { name: "L'Ore`al Paris" },
  { name: " Skechers " },
  { name: "BLACK+DECKER" },
  { name: "Golazo" },
  { name: " Yellow Friday Sale Offers" },
];
const DailyData = [
  { name: "Fresh Produce" },
  { name: "Dairy & Egg" },
  { name: "Bread & Bakery" },
  { name: "Meat & Seafood" },
  { name: "Breakfast Food" },
  { name: "Pantry Staples" },
  { name: " Household " },
  { name: "personal Care" },
];
