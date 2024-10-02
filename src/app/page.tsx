import Image from 'next/image';
import img from "@/app/images/myImage.png";

export default function Home() {
  return (
    <div className="parent_container">
      <div className="text">
       <span className="myName">Muhammad Azhar Khan</span><br/> 
       <span className="description">I am a professional <span className="proffesion">CAD/3D Designer</span></span>
      </div>
      <div className="image">
      <Image
      src={img}
      width={1000}
      height= {1000}
      alt="/"
      />
      </div>
    </div>
  )
}
