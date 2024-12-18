import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);

  if (pathParts.length === 0) return null;

  const items = pathParts.map((part, index) => ({
    label: part.charAt(0).toUpperCase() + part.slice(1),
    href: "/" + pathParts.slice(0, index + 1).join("/"),
    isActive: index === pathParts.length - 1,
  }));

  return (
    <nav aria-label="breadcrumb" className="py-4">
      <ol className="breadcrumb flex flex-wrap  text-sm text-gray-600">
        <li className="breadcrumb-item">
          <Link to="/" className="text-black hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              item.isActive ? "text-gray-900 font-semibold" : ""
            }`}
            aria-current={item.isActive ? "page" : undefined}>
            {item.isActive ? (
              item.label
            ) : (
              <>
                <Link to={item.href} className="text-black hover:underline">
                  {item.label}
                </Link>
                <span className=" text-gray-400">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
