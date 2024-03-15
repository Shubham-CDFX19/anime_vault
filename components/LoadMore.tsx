"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-interaction-observer";
import { fetchAnime } from "@/app/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import { data } from "@/app/_data";
import { pages } from "next/dist/build/templates/app-page";

let page = 2;

export type AnimeCard = JSX.Element;


function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if(inView) {
      fetchAnime(page).then((res)) => {
        setData([...data, ...res]);
        pages++;
      });
    }
  
  
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div>
          {data}
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );

  
export default LoadMore;
