import { useLoaderData, useParams } from "react-router-dom";
import {
  getDonationStatus,
  saveDonationApplication,
} from "../../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DonationDetails() {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const donation = donations.find((donation) => donation.id === idInt);

  const handleDonation = () => {
    const alreadyDonated = getDonationStatus(idInt);

    if (alreadyDonated) {
      toast.warning("You have already donated here!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        progress: undefined,
      });
    } else {
      saveDonationApplication(idInt);
      toast.success("You have donated successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex flex-col mt-10 px-20">
      <ToastContainer />
      <div className="mb-10 relative">
        <img
          className="md:w-full md:h-[500px] sm:w-[800px] sm:h-[400px]"
          src={donation.picture}
          alt="donation"
        />
        <div className="absolute w-full h-[100px]  bottom-0 left-0 bg-[#0B0B0B80] ">
          <button
            onClick={handleDonation}
            className="absolute top-5 left-5 rounded-md px-3 py-4 text-white"
            style={{ backgroundColor: donation.text_button_bg }}
          >
            Donate ${donation.price}
          </button>
        </div>
      </div>

      <h1 className="md:text-xl sm:text-xs font-bold">{donation.title}</h1>
      <p className="text-sm">{donation.description}</p>
    </div>
  );
}

export default DonationDetails;
