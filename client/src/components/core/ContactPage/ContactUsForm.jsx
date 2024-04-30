import { useForm } from "react-hook-form";
import { sendOtp } from "../../../redux/slices/TableReservationSlices";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../../../redux/slices/bookingSlice";
import { toast } from "react-hot-toast";

const ContactUsForm = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.table);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    dispatch(addBooking(data));
    const response = await dispatch(sendOtp(data.useremail));
    if (response?.payload?.success) {
      toast.success(response?.payload?.message);
    }
  };
  return (
    <div className="m-auto mb-[6.5rem] mt-10">
      <form
        action=""
        className="border md:w-1/2 w-full m-auto p-10 rounded-lg"
      >
        <div className="flex justify-between gap-x-5">
        </div>
        <div className="flex justify-between mt-2 gap-x-5">
          <div className="flex flex-col flex-1 items-start">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              className="border  rounded-lg p-3 mt-1 w-full"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-xs tracking-wide text-red-700">
                Name is Required*
              </span>
            )}
          </div>
          <div className="flex flex-col flex-1 items-start">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="border  rounded-lg p-3 mt-1 w-full"
              {...register("useremail", { required: true })}
            />
            {errors.useremail && (
              <span className="text-xs tracking-wide text-red-700">
                Email is Required*
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 items-start">
            <label htmlFor="email" className="font-semibold">
              Subject
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="border  rounded-lg p-3 mt-1 w-full"
              {...register("useremail", { required: true })}
            />
            {errors.useremail && (
              <span className="text-xs tracking-wide text-red-700">
                Email is Required*
              </span>
            )}
          </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="nop" className="font-semibold">
            Message
          </label>
          <textarea
            type="number"
            name=""
            id="nop"
            className="border  rounded-lg p-3 mt-1"
            {...register("numberOfPerson", { required: true })}
          />
          {errors.numberOfPerson && (
            <span className="text-xs tracking-wide text-red-700">
              Number of Person is Required*
            </span>
          )}
        </div>
        <div className="mt-5 flex justify-center">
          <button
            className="bg-[#C71F1F] px-4 py-5 rounded-lg text-white w-full"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
