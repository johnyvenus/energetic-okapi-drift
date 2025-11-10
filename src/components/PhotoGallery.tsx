interface PhotoGalleryProps {
  images: { src: string; alt: string }[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;