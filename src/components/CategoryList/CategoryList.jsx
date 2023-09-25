import { Link } from "react-router-dom";

function CategoryList({ donation }) {
  const { id, title, category, picture, text_button_bg, card_bg, category_bg } =
    donation;
  return (
    <Link to={`/donation/${id}`}>
      <div
        className="card lg:w-[312px] "
        style={{ backgroundColor: category_bg }}
      >
        <figure>
          <img
            className="lg:w-[312px] lg:h-[200px] w-full"
            src={picture}
            alt="Category"
          />
        </figure>
        <div className="card-body">
          <h2
            style={{
              color: text_button_bg,
              backgroundColor: card_bg,
            }}
            className="border-0 rounded-md px-2 py-1 w-fit"
          >
            {category}
          </h2>
          <h2 style={{ color: text_button_bg }} className="card-title">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default CategoryList;
