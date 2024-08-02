"use client";
import { generateImage } from "@/lib/openai";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

function GenerateImage({
  handleImageChange,
  handleLoading,
}: {
  handleImageChange: (url: string) => void;
  handleLoading: (value: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    const { prompt } = data;
    handleLoading(true);
    ("use server");
    const url = await generateImage(prompt);
    if (url) {
      handleLoading(false);
      handleImageChange(url);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="prompt">Prompt</label>
      <textarea
        {...register("prompt")}
        placeholder="e.g. An astronaut cat"
        required
      />
      <label htmlFor="negative-prompt">Negative Prompt (Optional)</label>
      <textarea
        {...register("negative-prompt")}
        placeholder="e.g. No planets behind"
      />
      <button
        type="submit"
        className="h-10 w-full rounded-md bg-purple texxt-white flex items-center justify-center gap-4"
      >
        <Image
          src={"icons/stars.svg"}
          width={18}
          height={18}
          alt={"generate ai"}
        />
        <span>Generate Image</span>
      </button>
    </form>
  );
}

export default GenerateImage;
