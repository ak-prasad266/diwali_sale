// src/data.js
import iPhoneImage from "./assets/iPhone17_Air.jpg";
import SamsungImage from "./assets/Samsung_S24.jpg";
import OnePlusImage from "./assets/OnePlus_Nord3.jpg";
import BoatImage from "./assets/Boat_earbuds.jpg";
import SonyImage from "./assets/Sony_earbuds.jpeg";
import PhilipsImage from "./assets/Philips_earbuds.jpg";
import AppleWatchImage from "./assets/Apple_watch.jpg";
import NoiseImage from "./assets/Noise_watch.jpg";
import FasttrackImage from "./assets/Fasttrack_watch.jpeg";

export const products = {
  mobiles: [
    { id: 1, name: "iPhone 17 Air", price: 79999, img: iPhoneImage},
    { id: 2, name: "Samsung Galaxy S24", price: 69999, img: SamsungImage},
    { id: 3, name: "OnePlus Nord 3", price: 59999, img: OnePlusImage},
  ],
  earbuds: [
    { id: 4, name: "Boat Airdopes 441", price: 1999, img: BoatImage},
    { id: 5, name: "Sony WF-1000XM5", price: 2999, img: SonyImage},
    { id: 6, name: "Philips Earbuds", price: 4999, img: PhilipsImage}
  ],
  watches: [
    { id: 7, name: "Apple Watch Series 9", price: 45999, img: AppleWatchImage},
    { id: 8, name: "Noise ColorFit Ultra", price: 4999, img: NoiseImage},
    { id: 9, name: "Fasttrack Fit Max", price: 3999, img: FasttrackImage},
  ],
};
