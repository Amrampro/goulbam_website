"use client";

import Image from "next/image";

type AmbassadorBannerProps = {
  image?: string;
};

export default function AmbassadorBanner({
  image = "/images/ambassador/banner.png",
}: AmbassadorBannerProps) {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[24px]">
          <Image
            src={image}
            alt="Programme Ambassadeur GoulBAM"
            width={1600}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}