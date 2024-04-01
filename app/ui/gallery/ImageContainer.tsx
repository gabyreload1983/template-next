import Image from "next/image";

type Photo = {
  id: string;
  width: number;
  height: number;
  url: string;
  alt: string;
};

export default function ImageContainer({ image }: { image: Photo }) {
  const widthHeightRatio = image.height / image.width;
  const galleryHeight = Math.ceil(300 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 20) + 1;

  return (
    <div
      className="w-[300px] justify-self-center"
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <div className="rounded-xl overflow-hidden group">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="300px"
          className="group-hover:opacity-75"
        />
      </div>
    </div>
  );
}
