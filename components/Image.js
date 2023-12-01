import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => (
  <div className="center relative mx-auto w-full sm:w-3/4 lg:w-2/3">
    <NextImage className="rounded-lg" width={1920} height={1080} {...rest} />
  </div>
)

export default Image
