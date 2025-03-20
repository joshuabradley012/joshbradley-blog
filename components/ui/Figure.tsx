import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface FigureProps extends Omit<ImageProps, "alt"> {
  alt: string;
  caption?: string;
  disableZoom?: boolean;
}

export default function Figure({
  alt,
  caption,
  className,
  disableZoom = false,
  ...props
}: FigureProps) {
  const image = (
    <div className="border border-neutral-200">
      <Image alt={alt} className="w-full" {...props} />
    </div>
  );

  return (
    <figure className={cn("my-8", className)}>
      {disableZoom ? image : <Zoom>{image}</Zoom>}
      {caption && (
        <figcaption className="mt-2 font-serif text-xs text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
