"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ROUTES = [
  {
    name: "Slug 1",
    value: "slug-1",
  },
  {
    name: "Slug 2",
    value: "slug-2",
  },
];

export const RadioGroupVariantOne = () => {
  const { push } = useRouter();
  const pathName = usePathname();

  // populate selected route from url
  const pathSegments = pathName.split("/").filter((segment) => segment);
  const currentSlug = pathSegments[pathSegments.length - 1];

  const filteredData = ROUTES.find(({ value }) => value === currentSlug)?.value;

  const [selected, setSelected] = useState(filteredData || ROUTES[0]?.value);

  useEffect(() => {
    if (pathName !== selected) {
      push(selected);
    }
  }, [pathName, selected, pathSegments, push]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold inline-block">
        This will lead to infinite loop
      </h1>
      {ROUTES?.map((el) => (
        <label
          key={el?.value}
          className="flex cursor-pointer items-center gap-2 font_med_8 text-C_404040"
          htmlFor={el?.value?.toString()}
        >
          <input
            type="radio"
            name="commercial-property-type"
            id={el?.value?.toString()}
            value={el?.value}
            checked={selected === el?.value}
            onChange={() => setSelected(el?.value)}
          />
          {el?.name}
        </label>
      ))}
    </div>
  );
};
