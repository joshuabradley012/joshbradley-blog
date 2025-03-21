import Image, { ImageProps } from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { cn } from "@/lib/utils";

interface FigureProps extends Omit<ImageProps, "alt"> {
  alt: string;
  caption?: string;
  imgClassName?: string;
  disableZoom?: boolean;
}

export default function Figure({
  alt,
  caption,
  className,
  imgClassName,
  disableZoom = false,
  ...props
}: FigureProps) {
  const image = (
    <div className="border border-neutral-200">
      <Image alt={alt} className={cn("w-full", imgClassName)} {...props} />
    </div>
  );

  return (
    <figure className={cn("my-8", className)}>
      {disableZoom ? image : <Zoom>{image}</Zoom>}
      {caption && (
        <figcaption className="mt-2 text-xs text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
