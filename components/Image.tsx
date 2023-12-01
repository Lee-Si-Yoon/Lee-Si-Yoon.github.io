import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <div className="center relative mx-auto w-full sm:w-3/4 lg:w-2/3">
    <NextImage
      src={`/Lee-Si-Yoon.github.io${src}`}
      className="rounded-lg"
      width={1920}
      height={1080}
      {...rest}
    />
  </div>
)

export default Image
