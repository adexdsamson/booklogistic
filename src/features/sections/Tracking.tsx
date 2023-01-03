import { Button } from "../../components";
import { Form } from "../../components/Form/index";
import tracklocation from "../../assets/tracklocation.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../../components/input/TextInput";


type FormState = {
  tracking: string;
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

export const Tracking = () => {
  const handleForm = async (data: FormState) => { };
  

  return (
    <div className="lg:h-[40rem] py-16 lg:py-0 w-full px-2 lg:px-10 flex justify-between items-center">
      <div className="h-full w-full">
        <img
          src={tracklocation}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="h-full w-3/4 flex flex-col justify-center">
        <h4 className="font-bold"> GET UPDATE </h4>
        <h2 className="text-lg font-extrabold"> TRACK YOUR ITEM </h2>
        <Form<FormState>
          className="mt-5"
          onSubmit={handleForm}
          resolver={yupResolver(schema)}
        >
          <TextInput
            name="tracking"
            inputClass="border-b-2 w-3/4 focus:border-b-2 outline-none !bg-transparent"
          />
          <div className="w-3/4 lg:w-[30%] mt-5">
            <Button text="CHECK NOW" />
          </div>
        </Form>
      </div>
    </div>
  );
};
