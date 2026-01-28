"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const ROUTES = [
  {
    name: "Slug 1",
    value: "/test-2/slug-1",
  },
  {
    name: "Slug 2",
    value: "/test-2/slug-2",
  },
];

export const RadioGroupVariantTwo = () => {
  const { push } = useRouter();
  const pathName = usePathname();

  // populate selected route from url
  const filteredRoute =
    ROUTES.find((el) => el?.value === pathName)?.value || ROUTES[0]?.value;

  const handleChangeRoute = (value: string) => {
    push(value);
  };

  useEffect(() => {
    handleChangeRoute(filteredRoute);
  }, [filteredRoute]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold inline-block">
        This will not select the default value
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
            checked={filteredRoute === el?.value}
            onChange={() => handleChangeRoute(el?.value)}
          />
          {el?.name}
        </label>
      ))}
    </div>
  );
};
