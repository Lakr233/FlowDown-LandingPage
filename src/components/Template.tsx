import React from "react";
import { BlurImage } from "./BlurImage";

export const Template = ({ template }: any) => {
  return (
    <div className="py-6 lg:py-10 flex flex-col lg:flex-row  my-20">
      <div className="pr-4">
        <h1 className="font-bold text-2xl text-slate-800">{template.title}</h1>
        <div className="text-sm text-slate-600 max-w-xs mt-4 leading-6">
          {template.description}
        </div>
        <div className="text-sm text-slate-600 max-w-xs mt-4 leading-6 flex flex-row flex-wrap">
          {template.stack.map((el: string, idx: number) => (
            <span className="mr-2 mb-2 px-1 py-0.5 bg-gray-100 rounded-md">
              {el}
            </span>
          ))}
        </div>
        <div className="mt-4 h-px w-6 bg-slate-300" />
        <div className="mt-6 flex flex-row space-x-4">
          <a
            href={template.previewLink}
            target="__blank"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700"
          >
            Live Preview
          </a>
          <a
            href={template.buyLink}
            target="__blank"
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 border border-slate-900 bg-white text-black   hover:bg-slate-700 hover:text-white"
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 lg:mt-0 space-y-6 sm:space-y-0 sm:space-x-6 overflow-x-auto flex-1">
        {template?.images.map((el: any, idx: number) => (
          <div
            key={`template-${idx}-image-${idx}`}
            className="relative w-full h-52 sm:h-72 lg:h-[90%]  sm:w-[50%] lg:w-[45%] rounded-xl border border-gray-100"
          >
            <BlurImage
              src={el}
              layout="fill"
              className="object-cover object-left-top rounded-xl"
              alt={`Product Image`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
