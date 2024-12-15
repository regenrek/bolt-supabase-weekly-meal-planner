import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AspectRatio } from "@/components/ui/aspect-ratio"; // Provided by shadcn/ui
import placeholder from '@/public/placeholder.jpg';

interface PlaceholderImageStaticProps {
  className?: string;
  width?: number;
  height?: number;
  alt: string;
  fill?: boolean;
}

export function PlaceholderImageStatic({ 
  className, 
  width = 600, 
  height = 400, 
  alt,
  fill: shouldFill = true
}: PlaceholderImageStaticProps) {
  const ratio = width / height; // e.g. 600/400 = 1.5 (3/2)

  if (shouldFill) {
    return (
      <AspectRatio 
        ratio={ratio} 
        className={cn("relative w-full bg-slate-100", className)}
      >
        <Image
          src={placeholder}
          alt={alt}
          fill
          className="object-cover"
          placeholder="blur"
          priority
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
        src={placeholder}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        placeholder="blur"
        priority
      />
    </AspectRatio>
  );
}
