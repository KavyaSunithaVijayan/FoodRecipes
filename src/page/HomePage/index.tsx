import { useQuery } from "@tanstack/react-query";
import { GetCategories } from "../../lib/api";
import { useEffect, useState } from "react";

function HomePage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["GetCategory"],
    queryFn: GetCategories,
  });
  useEffect(() => {
    if (!data?.length) return;

    let index = 0;
    const interval = setInterval(() => {
      setFlippedIndex(index);
      index = (index + 1) % data.length;
    }, 2000);

    return () => clearInterval(interval);
  }, [data]);
  return (
    <div className="bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 pt-30">
        <div className="grid grid-cols-4 gap-15 mx-auto ">
          {data?.map((cat: any) => (
            <div
              key={cat?.idCategory}
              className={`group border border-blue-100 rounded-lg w-full relative bg-transparent  ${
                flippedIndex === cat?.idCategory ? "rotate-y-180" : ""
              }`}
            >
              <img
                src={cat?.strCategoryThumb}
                alt={cat?.strCategory}
                className="object-contain w-full h-full mx-auto p-3"
              />
              <div className="group-hover:bg-blue-100 absolute inset-0 z-10 opacity-40 translate-0 duration-300" />
              {/* <h2 className="absolute bottom-0 left-0 px-5">{cat?.strCategory}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
