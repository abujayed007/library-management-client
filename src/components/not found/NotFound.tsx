import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-5 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
      >
        Back to Library
      </Link>
    </div>
  );
};

export default NotFound;
