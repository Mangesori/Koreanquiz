import React from "react";
import Link from "next/link";

const DropdownBlog = () => {
  const categories = [
    {
      title: "Grammar",
      items: ["Basic Grammar", "Intermediate Grammar", "Advanced Grammar"],
    },
    {
      title: "Culture",
      items: ["K-Pop", "Traditions", "Food", "Lifestyle"],
    },
    {
      title: "Learning Tips",
      items: ["Study Methods", "Resources", "Success Stories"],
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-lg min-w-[600px]">
      {categories.map((category, idx) => (
        <div key={idx} className="p-4">
          <h3 className="text-mainText font-bold mb-2">{category.title}</h3>
          <ul className="space-y-2">
            {category.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                <Link
                  href={`/blog/${category.title.toLowerCase()}/${item
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-bodyColor hover:text-primary"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownBlog;
