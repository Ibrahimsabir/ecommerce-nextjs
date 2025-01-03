import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Image from "next/image";

interface Data {
  text: string;
  p: string;
  rating: number; // Add rating prop
  date?: string;
}

export default function Card(props: Data) {
  // Generate an array of stars based on the rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <IoIosStar key={i} className="text-[#FFC633]" />
        ) : (
          <IoIosStarOutline key={i} className="text-[#FFC633]" />
        )
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="w-[400px] rounded-[20px] border-[1px] border-[#0000001A]">
        <div className="m-8 pb-0">
          <div className="flex gap-2 text-lg h-[22px]">
            {renderStars(props.rating)} {/* Render dynamic stars */}
          </div>
          <div className="flex gap-1 justify-start items-center">
            <h3 className="w-[92px] h-[15px] text-[20px] leading-[22px] font-bold my-4">
              {props.text}
            </h3>
            <Image
              className="my-4"
              src={"/customerright.png"}
              alt={"icon"}
              height={24}
              width={24}
            />
          </div>
          <p className="text-[16px] text-[#00000099] text-justify mb-4">
            {props.p}
          </p>
          {props.date ? (
            <p className="text-gray-600 text-md font-normal mt-auto self-start">
              {`Posted on ${props.date}`}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
