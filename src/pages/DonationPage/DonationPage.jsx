function DonationPage({ donation }) {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = donation;
  return (
    <div className="flex" style={{ backgroundColor: category_bg }}>
      <img className="w-[220px] h-[200px]" src={picture} alt={id} />

      <div className="flex flex-col">
        <h2>{category}</h2>
        <h1>{title}</h1>
        <span>{price}</span>

        <button>Show Details</button>
      </div>
    </div>
  );
}

export default DonationPage;
