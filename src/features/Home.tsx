import { Button } from "../components";
import tracklocation from "../assets/tracklocation.png";
import whatsapp from "../assets/whatsapp.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";
import lightfacebook from "../assets/lightfacebook.png";
import lightwhatsapp from "../assets/lightwhatsapp.png";
import lightgoogleplus from "../assets/lightgoogleplus.png";
import lightinstagram from "../assets/lightinstagram.png";
import { Heropage, Tracking } from "./sections";
import { TextAreaInput, TextInput } from "../components/input/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../components/Form/index";

type FormState = {
  email: string;
  pickUp: string;
  additionalPickupInfo: string;
  dropOff: string;
  additionalDropOff: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

const Home = () => {
  const handleForm = async (data: FormState) => { };
  

  return (
    <div>
      <Heropage />
      <Tracking />
      <div className="h-screen flex flex-col">
        <div className="w-full py-20 flex justify-between items-center px-2 lg:px-10 text-white bg-[#2E3E55]">
          <div>
            <p className="uppercase text-lg">
              {" "}
              interested in partnering with booklogistics?{" "}
            </p>
            <p className="uppercase font-light text-xs mt-2">
              {" "}
              we are ready to assist you with your orders{" "}
            </p>
          </div>
          <div className="w-[150px]">
            <Button text="GET IN TOUCH" />
          </div>
        </div>
        <div className="w-full h-screen footdrop flex justify-between px-2 gap-5 lg:gap-24 lg:px-10 py-12">
          <Form
            onSubmit={handleForm}
            resolver={yupResolver(schema)}
            className="w-1/2 flex flex-col justify-between text-white font-bold"
          >
            <TextInput
              name="name"
              label="NAME"
              inputClass="p-3 mt-1 rounded-md text-black text-sm"
            />
            <TextInput
              name="email"
              label="EMAIL"
              inputClass="p-3 mt-1 rounded-md text-black text-sm"
            />
            <TextAreaInput
              rows={8}
              name="message"
              label="MESSAGE"
              className="h-[200px] p-3 mt-1 rounded-md text-black text-sm"
            />
            <div className="w-3/4 lg:w-1/4 mt-5">
              <Button text="Send" />
            </div>
          </Form>
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
          <img
            src={logo}
            alt=""
            width="100"
            className="bg-black rounded-xl mb-5 mt-10"
          />
          <p className="text-[#B4B2B2]">
            {" "}
            lets get to meet you various social platform{" "}
          </p>
          <p className="text-[#B4B2B2]"> we are ready to be of assitance </p>
        </div>
        <div className="flex items-center gap-5 mt-10 lg:mt-0">
          <div className="bg-[#00000040] p-3 rounded-full h-10 w-10">
            <img
              src={lightfacebook}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full h-10 w-10">
            <img
              src={lightwhatsapp}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full h-10 w-10">
            <img
              src={lightgoogleplus}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-[#00000040] p-3 rounded-full h-10 w-10">
            <img
              src={lightinstagram}
              alt=""
              className="w-full h-full object-contain"
            />
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
  );
};

export default Home;
