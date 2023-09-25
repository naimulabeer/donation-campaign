import { Link } from "react-router-dom";

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
    <div className="flex gap-4" style={{ backgroundColor: card_bg }}>
      <img
        className=" w-1/2 md:w-[220px] md:h-[200px]"
        src={picture}
        alt={id}
      />

      <div className="flex flex-col justify-center gap-2">
        <h2
          className=" px-2 py-1 w-fit text-xs md:text-sm"
          style={{ backgroundColor: category_bg, color: text_button_bg }}
        >
          {category}
        </h2>
        <h1 className="font-bold text-sm md:text-base">{title}</h1>
        <span style={{ color: text_button_bg }} className="text-sm">
          ${price}
        </span>

        <Link to={`/donation/${id}`}>
          <button
            className=" md:w-fit px-1 py-1 md:px-4 md:py-2 text-white text-sm md:text-base"
            style={{
              backgroundColor: text_button_bg,
            }}
          >
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DonationPage;
