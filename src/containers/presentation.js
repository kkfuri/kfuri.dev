import Image from "next/image";
import StyledText from "@/components/styled-text";

export default function Presentation() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="w-full max-w-2xl p-1 mx-auto border border-red-400 shadow-sm-white">
        <div className="flex space-x-4">
          <div className="flex items-center bg-white border border-gray200">
            <Image
              src="https://avatars0.githubusercontent.com/u/42350846"
              width={460}
              height={460}
            />
          </div>
          <div className="flex flex-col justify-between w-full py-1 md:py-4">
            <div className="flex-1">
              <h1 className="font-sans text-3xl font-semibold lg:leading-snug md:text-6xl">
                Diego Kfuri
              </h1>
              <StyledText className="text-sm tracking-wider md:text-xl md:mt-2">
                software engineer
              </StyledText>
            </div>
            <ul className="lg:mt-6">
              <StyledText
                separator="using"
                as="li"
                className="text-xs sm:text-sm lg:text-base"
              >
                working with front-end using mainly next.js
              </StyledText>
              <StyledText
                separator="&"
                as="li"
                className="text-xs sm:text-sm lg:text-base"
              >
                learning typescript & nodejs
              </StyledText>
              <StyledText
                separator="&"
                as="li"
                className="text-xs sm:text-sm lg:text-base"
              >
                in love with design & games
              </StyledText>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
