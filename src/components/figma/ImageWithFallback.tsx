import React, { useState } from "react";

const DEFAULT_FALLBACK =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Rva2Utd2lkdGg9IjMuNyI+PHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHJ4PSI2Ii8+PHBhdGggZD0ibTE2IDU4IDE2LTE4IDMyIDMyIi8+PGNpcmNsZSBjeD0iNTMiIGN5PSIzNSIgcj0iNyIvPjwvc3ZnPgo=";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({
  fallbackSrc = DEFAULT_FALLBACK,
  src,
  alt,
  style,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const handleError = () => setDidError(true);

  const fallbackStyle: React.CSSProperties = {
    display: "inline-block",
    width: style?.width ?? "auto",
    height: style?.height ?? "auto",
    ...style,
  };

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={fallbackStyle}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={fallbackSrc}
          alt={alt ?? "Image failed to load"}
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}
