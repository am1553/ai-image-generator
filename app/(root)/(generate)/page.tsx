"use client";
import GenerateImage from "@/components/GenerateImage";
import Image from "next/image";
import React, { useState } from "react";
import { BounceLoader } from "react-spinners";
function Generate() {
  const [imageURL, setImageURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleImageChange = (url: string) => setImageURL(url);
  const handleLoading = (value: boolean) => setIsLoading(value);
  return (
    <section className="px-6 py-8 flex flex-col gap-6">
      <GenerateImage
        handleImageChange={handleImageChange}
        handleLoading={handleLoading}
      />
      {isLoading ? (
        <BounceLoader />
      ) : (
        imageURL !== "" && (
          <Image
            src={imageURL}
            width={300}
            height={300}
            layout="responsive"
            alt="generate image using prompt"
            className="rounded-lg shadow-md"
          />
        )
      )}
    </section>
  );
}

export default Generate;
