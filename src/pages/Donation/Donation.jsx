import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationApplication } from "../../utils/localStorage";
import DonationPage from "../DonationPage/DonationPage";

function Donation() {
  const donations = useLoaderData();

  const [appliedDonations, setAppliedDonations] = useState([]);
  const [displayDonations, setDisplayDonations] = useState([]);
  const [donationLength, setDonationLength] = useState(4);

  useEffect(() => {
    const storeDonationIds = getStoredDonationApplication();

    if (donations.length > 0) {
      const donationsApplied = [];

      for (const id of storeDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationsApplied.push(donation);
        }
      }
      setAppliedDonations(donationsApplied);
      setDisplayDonations(donationsApplied);
    }
  }, [donations]);

  return (
    <div className="mt-10 flex flex-col md:px-20 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayDonations.slice(0, donationLength).map((donation) => (
          <DonationPage key={donation.id} donation={donation} />
        ))}
      </div>
      <div
        style={{ textAlign: "center", marginTop: "20px" }}
        className={donationLength === donations.length ? "hidden" : ""}
      >
        <button
          onClick={() => setDonationLength(donations.length)}
          className="bg-[#009444] rounded-lg px-4 py-2 text-white"
        >
          See All
        </button>
      </div>
    </div>
  );
}

export default Donation;
