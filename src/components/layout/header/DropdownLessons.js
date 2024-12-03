import React from "react";
import Link from "next/link";

const DropdownLessons = () => {
  const lessonOptions = [
    {
      title: "Lesson Packages",
      items: [
        { name: "Single Lesson", price: "$30" },
        { name: "5 Lessons Pack", price: "$140" },
        { name: "10 Lessons Pack", price: "$270" },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { name: "Book a Class", link: "/lessons/book" },
        { name: "My Schedule", link: "/lessons/schedule" },
        { name: "Previous Classes", link: "/lessons/history" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-lg min-w-[400px]">
      {lessonOptions.map((section, idx) => (
        <div key={idx} className="p-4">
          <h3 className="text-mainText font-bold mb-2">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIdx) => (
              <li key={itemIdx}>
                {item.price ? (
                  <Link
                    href="/lessons/purchase"
                    className="text-bodyColor hover:text-primary"
                  >
                    {item.name} - {item.price}
                  </Link>
                ) : (
                  <Link
                    href={item.link}
                    className="text-bodyColor hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DropdownLessons;
