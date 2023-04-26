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
  console.log(tabs);
  return (
    <>
      <div className=" md:flex gap-8 ">
        {tabs.map((item: Itabs) => (
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="w-[28px]">
              <item.icon size={40} />
            </div>
            <h3>{item.header}</h3>
            <div className="flex justify-center items-center flex-col max-w-[350px] text-center mt-4 gap-4">
              {item.subHeaders.map((item: any) => (
                <p className="flex justify-center items-center h-[120px] bg-[#252627] py-2 px-3 rounded-md text-[1.09rem] hover:bg-[#343560] duration-1000">
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
