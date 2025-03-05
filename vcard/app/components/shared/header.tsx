import Image from "next/image"
export default function HeaderVcard(){
    return (
<nav className="flex border border-[#adacaa] p-2 justify-center m-2 rounded-lg  bg-cover bg-center " style={{ backgroundImage: "url('/header/navbar/mythical-dragon-beast-anime-style.jpg')" }} >
  <div className="w-[100px] h-[100px] rounded-full overflow-hidden justify-end">
    <Image
      width={100}
      height={100}
      src="/moi.jpg"
      alt="moi.jpg"
      className="w-full h-full object-cover"
    />
  </div>
</nav>

    )
}