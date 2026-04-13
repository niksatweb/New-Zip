import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export const ImageGallery = ({ images = [] }: { images?: string[] }) => {
  return (
    <PhotoProvider loop={4}>
      <div className="foo flex overflow-scroll overflow-y-scroll">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img className="cursor-pointer" src={item} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}
