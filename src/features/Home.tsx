import { Button, Form } from "../components"
import tracklocation from "../assets/tracklocation.png"
import whatsapp from "../assets/whatsapp.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import phone from "../assets/phone.png"
import facebook from "../assets/facebook.png"
import logo from "../assets/logo.png"
import lightfacebook from "../assets/lightfacebook.png"
import lightwhatsapp from "../assets/lightwhatsapp.png"
import lightgoogleplus from "../assets/lightgoogleplus.png"
import lightinstagram from "../assets/lightinstagram.png"

const Home = () => {

  return (
    <div>
      <div className='w-full lg:h-screen backdrop lg:flex lg:flex-row lg:justify-between items-center lg:px-10'>
        <div className="h-3/4 pt-24 lg:pt-5 px-2">
          <h2 className="text-5xl lg:text-7xl text-white font-bold"> Find Your preferred logistic company </h2>
          <h4 className="py-2 text-3xl text-white"> From pickup to destination </h4>
          <p className="text-white w-1/2 lg:w-1/3"> we connect you to a verified dispatch company. </p>
        </div>
        <div className="w-full lg:w-1/2 h-[500px] lg:h-3/4 mt-10">
          <Form />
        </div>
      </div>
      <div className="lg:h-screen py-16 lg:py-0 w-full px-2 lg:px-10 flex justify-between items-center">
        <img src={tracklocation} alt="" width="50%" />
        <div className="w-1/2">
          <h4 className="font-bold"> GET UPDATE </h4>
          <h2 className="text-lg font-extrabold"> TRACK YOUR ITEM </h2>
          <hr className="mt-10 bg-gray-900 h-[2px]"/>
          <div className="w-3/4 lg:w-[30%] mt-10">
            <Button text="CHECK NOW" />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <div className="w-full h-1/4 flex justify-between items-center px-2 lg:px-10 text-white bg-[#2E3E55]">
          <div>
            <p className="uppercase"> interested in partnering with booklogistics? </p>
            <p className="uppercase font-light text-xs mt-5"> we are ready to assist you with your orders </p>
          </div>
          <div className="w-[150px]">
            <Button text="GET IN TOUCH" />
          </div>
        </div>
        <div className="w-full h-screen footdrop flex justify-between px-2 gap-5 lg:gap-24 lg:px-10 py-12">
          <form className="w-1/2 flex flex-col justify-between text-white font-bold">
            <div className="w-full flex flex-col">
              <label> NAME </label>
              <input className="p-3 mt-1 rounded-md text-black text-sm"/>
            </div>
            <div className="w-full flex flex-col">
              <label> EMAIL </label>
              <input className="p-3 mt-1 rounded-md text-black text-sm"/>
            </div>
            <div className="w-full flex flex-col">
              <label> MESSAGE </label>
              <textarea className="h-[200px] p-3 mt-1 rounded-md text-black text-sm"></textarea>
            </div>
            <div className="w-3/4 lg:w-1/4 mt-5">
              <Button text="Send" />
            </div>
          </form>
          <div className="flex flex-col gap-10 w-1/2 items-start text-white text-sm">
            <div className="h-4 flex">
              <img src={location} alt="" className="w-5" />
              <p className="ml-5"> ikeja, lagos. </p>
            </div>
            <div className="h-4 flex">
              <img src={phone} alt="" className="w-5" />
              <p className="ml-5"> +234 (0) 817 500 9200 </p>
            </div>
            <div className="h-4 flex">
              <img src={mail} alt="" className="w-5" />
              <p className="ml-5"> support@booklogistic.com </p>
            </div>
            <div className="h-4 flex">
              <img src={whatsapp} alt="" className="w-5" />
              <p className="ml-5"> +234 (0) 817 500 9200 </p>
            </div>
            <div className="cols-2 h-4 flex">
              <img src={facebook} alt="" className="w-5" />
              <p className="ml-5 capitalize"> booklogistics </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 lg:px-10 bg-[#2E3E55] py-10 flex flex-col lg:flex-row justify-between items-center text-center">
        <div className="flex flex-col items-center">
          <img src={logo} alt="" width="100" className="bg-black rounded-xl mb-10" />
          <p className="text-[#B4B2B2]"> lets get to meet you various social platform </p>
          <p className="text-[#B4B2B2]"> we are ready to be of assitance </p>
        </div>
        <div className="flex items-center gap-5 mt-10 lg:mt-0">
          <div className="bg-[#00000040] p-3 rounded-full">
            <img src={lightfacebook} alt="" className="w-3" />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full">
            <img src={lightwhatsapp} alt="" className="w-5" />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full">
            <img src={lightgoogleplus} alt="" className="w-5" />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full">
            <img src={lightinstagram} alt="" className="w-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-white justify-between items-center text-sm px-10 w-full lg:py-10 bg-[#2E3E55]">
        <div>
          <span> privacy policy | </span>
          <span className="text-[#DF631E]"> contact </span>
          <span> | terms and conditions </span>
        </div>
        <div>
          <span> Designed By </span>
          <span className="text-[#DF631E]"> Booklogistic </span>
          <span> &#169; 2021 All Right Reserved </span>
        </div>
      </div>
    </div>
  )
}

export default Home