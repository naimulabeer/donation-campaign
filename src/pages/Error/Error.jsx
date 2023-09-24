import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-800 mt-4">Page not found</p>
        <p className="mt-8">
          <Link to="/" className="text-blue-500 font-semibold hover:underline">
            Go back to the home page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Error;
