import Image from "next/image";
import { IconType } from "react-icons";
interface Itabs {
  icon: IconType;
  header: string;
  subHeaders: string[];
}
interface Iprops {
  tabs: Itabs[];
}

export default function Info(props: Iprops) {
  const { tabs } = props;
  return (
    <>
      <div className=" md:flex gap-8 ">
        {tabs.map((item: Itabs,index:number) => (
          <div className="flex flex-col items-center justify-center mt-16" key={index}>
            <div className="w-[28px]">
              <item.icon size={40} />
            </div>
            <h3>{item.header}</h3>
            <div className="flex justify-center items-center flex-col max-w-[300px] text-center mt-4 gap-4">
              {item.subHeaders.map((item: any, index: number) => (
                <p
                  className="flex justify-center items-center h-[120px] bg-[#252627] py-2 px-3 rounded-md text-[1.09rem] hover:bg-gray-700 duration-300"
                  key={index}
                >
                  "{item}"
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
