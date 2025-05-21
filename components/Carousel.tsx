"use client";

export default function SimpleCarousel({currentIndex, setCurrentIndex, totalList, children}) {

  const dotsArr = new Array(totalList).fill(1);
  console.log("dotsArr", dotsArr);
  const goToSlide = (index: number) => {
    if (index < 0) index = totalList - 1;
    if (index >= totalList) index = 0;
    setCurrentIndex(index);
  };
  console.log("children", children);

  return (
    <div className="max-w-md mx-auto relative">
      <div className="overflow-hidden rounded-md">
        {children}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {dotsArr.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 cursor-pointer rounded-full ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
