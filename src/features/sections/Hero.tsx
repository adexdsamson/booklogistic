import { Button } from "../../components";
import { Form } from "../../components/Form/index";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextAreaInput, TextInput } from "../../components/input/TextInput";
import { useState } from "react";

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
    pickUp: yup.string().required(),
    additionalPickupInfo: yup.string().optional(),
    dropOff: yup.string().required(),
    additionalDropOffInfo: yup.string().optional(),
  })
  .required();

export const Heropage = () => {
  const [showAdditionalPickup, setShowAdditionalPickup] = useState(false);
  const [showAdditionalDropoff, setShowAdditionalDropoff] = useState(false);

  const handleForm = async (data: FormState) => {};

  return (
    <div className="w-full lg:h-screen backdrop lg:flex lg:flex-row lg:justify-between items-center lg:px-10">
      <div className="h-3/4 pt-24 lg:pt-5 px-2 flex items-center">
        <div className="lg:w-3/4">
          <h2 className="text-4xl lg:text-7xl text-white font-bold">
            {" "}
            Find Your preferred logistic company{" "}
          </h2>
          <h4 className="py-2 lg:text-3xl text-lg text-white my-3 ">
            {" "}
            From pickup to destination, we connect you to a verified dispatch
            company.{" "}
          </h4>
          <div className="w-[150px]">
            <Button text="GET IN TOUCH" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-fit mt-10">
        <Form<FormState>
          className="flex flex-col justify-between w-full bg-white h-full rounded-md p-5 pt-10"
          onSubmit={handleForm}
          resolver={yupResolver(schema)}
        >
          <TextInput name="email" label="Email Address" />

          <TextInput
            name="pickUp"
            label="Pick up location"
            containerClass="mt-4"
          />
          <div>
            <input
              type="checkbox"
              onChange={(e) => setShowAdditionalPickup(e.target.checked)}
            />
            <label> provide more infomation on pickup location? </label>
          </div>

          {showAdditionalPickup ? (
            <TextAreaInput
              name="additionalPickupInfo"
              rows={8}
              placeholder="more details for pickup"
            />
          ) : null}

          <TextInput
            name="dropOff"
            label="Enter destination"
            containerClass="mt-4"
          />
          <div>
            <input
              type="checkbox"
              onChange={(e) => setShowAdditionalDropoff(e.target.checked)}
            />
            <label> provide more infomation on pickup location? </label>
          </div>

          {showAdditionalDropoff ? (
            <TextAreaInput
              name="additionalDropOffInfo"
              rows={4}
              placeholder="more details for pickup"
            />
          ) : null}

          <Button text="Request" />
        </Form>
      </div>
    </div>
  );
};
