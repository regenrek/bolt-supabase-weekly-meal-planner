import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PlaceholderImageProps {
  className?: string;
  width?: number;
  height?: number;
  alt: string;
  fill?: boolean;
}

export function PlaceholderImage({ 
  className, 
  width = 600, 
  height = 400, 
  alt,
  fill: shouldFill = true
}: PlaceholderImageProps) {
  const ratio = width / height;

  if (shouldFill) {
    return (
      <AspectRatio 
        ratio={ratio} 
        className={cn("relative w-full bg-slate-100", className)}
      >
        <Image
          src={`https://picsum.photos/${width}/${height}`}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio>
    );
  }

  return (
    <AspectRatio 
      ratio={ratio} 
      className={cn("relative overflow-hidden rounded-lg bg-slate-100", className)}
    >
      <Image
        src={`https://picsum.photos/${width}/${height}`}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </AspectRatio>
  );
}