import { getGallery } from "../lib/data";
import ImageContainer from "../ui/gallery/ImageContainer";

export default async function About() {
  const gallery = await getGallery();

  return (
    <main className="p-10 md:max-w-screen-2xl md:mx-auto">
      <div className="border-b-2 border-primary pb-5 max-w-6xl mx-auto mb-10">
        <p className="text-2xl text-center lg:text-start">Title Gallery</p>
      </div>
      <div className="px-1 my-3 grid grid-cols-gallery auto-rows-[20px]">
        {gallery.map((image) => (
          <ImageContainer key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
}
