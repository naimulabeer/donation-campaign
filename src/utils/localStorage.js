const getStoredDonationApplication = () => {
  const storedDonationApplication = localStorage.getItem("donate-applications");
  if (storedDonationApplication) {
    return JSON.parse(storedDonationApplication);
  }
  return [];
};

const saveDonationApplication = (id) => {
  const storedDonationApplication = getStoredDonationApplication();
  const exists = storedDonationApplication.find(
    (donationId) => donationId === id
  );
  if (!exists) {
    storedDonationApplication.push(id);
    localStorage.setItem(
      "donate-applications",
      JSON.stringify(storedDonationApplication)
    );
  }
};

export { getStoredDonationApplication, saveDonationApplication };
