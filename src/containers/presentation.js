import Image from "next/image";
import StyledText from "@/components/styled-text";

export default function Presentation() {
  return (
    <>
      <a
        href="mailto:diego@kfuri.dev"
        className="fixed z-10 px-2 py-1 text-gray-600 transition-colors delay-75 bg-white border border-purple-300 cursor-pointer dark:border-red-400 bottom-2 right-4 dark:text-gray-200 dark:bg-gray-800 hover:text-purple-500 dark:hover:text-red-400"
      >
        diego@kfuri.dev
      </a>
      <div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
        <div className="w-full max-w-[320px] lg:max-w-2xl p-1 mx-auto border border-purple-500 dark:border-red-400 shadow-sm-white">
          <div className="flex flex-col lg:space-y-0 lg:space-x-4 lg:flex-row">
            <div className="flex items-center mx-auto border border-purple-500 dark:border-red-400">
              <Image
                alt="Diego Kfuri avatar"
                src="https://avatars0.githubusercontent.com/u/42350846"
                width={320}
                height={340}
              />
            </div>
            <div className="flex flex-col justify-between w-full px-4 py-2 md:py-4 lg:px-0">
              <div className="flex-1">
                <h1 className="font-sans text-3xl font-semibold lg:leading-snug md:text-5xl">
                  Diego Kfuri
                </h1>
                <StyledText
                  className="text-sm tracking-wider md:text-xl"
                  separator="&"
                >
                  software developer & curious
                </StyledText>
              </div>
              <ul className="mt-4 lg:mt-6">
                <StyledText
                  separator="using"
                  as="li"
                  className="text-xs sm:text-sm lg:text-base"
                >
                  lately using react, vue and svelte
                </StyledText>
                <StyledText
                  separator="&"
                  as="li"
                  className="text-xs sm:text-sm lg:text-base"
                >
                  learning python & systems design
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
    </>
  );
}
