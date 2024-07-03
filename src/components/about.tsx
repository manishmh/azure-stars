import Image from "next/image";

const About = () => {
  return (
    <div className="px-4 py-16 flex flex-col gap-8 md:flex-row">
      <div className="flex-shrink-0 md:w-1/2 h-[300px] md:h-[500px] bg-red-400">
        <Image
          src="/about.jpeg"
          alt="about-image"
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h1 className="text-xl md:text-3xl font-semibold">What we do ?</h1>
        <div className="text-gray-500">
          <p className="pt-4 max-w-screen-sm hover:text-black transition-all duration-300">
            HueHarmony uses machine learning and computer vision to analyze a
            user&apos;s skin tone and recommend personalized colour palettes.
            Users can upload a photo, and the system will detect their faces,
            analyze the skin tone, and provide colour suggestions for clothing
            and makeup. This solution offers immediate, tailored advice and is
            easy to use.
          </p>
          <p className="pt-4 hover:text-black  transition-all duration-300">
            This feature eliminates the guesswork involved in selecting suitable
            clothing and makeup colors, ensuring that users receive tailored
            recommendations that enhance their natural complexion. By providing
            immediate and easy-to-use color suggestions, HueHarmony empowers
            users to make informed fashion and beauty choices, boosting their
            confidence and style. Whether preparing for a special event or
            updating their wardrobe, users can rely on HueHarmony for expert
            guidance that complements their unique skin tone, making the process
            both enjoyable and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
