import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";
import Proyek4 from "../assets/images/proyek-4.webp";
import Proyek5 from "../assets/images/proyek-5.webp";
const HomePage = () => {
  return (
    <div className="homePage pb-10">
      <div className="container mx-auto px-4 ">
        <div className="hero pt-32 grid md:grid-cols-2  grid-cols-1 gap-20 items-center">
          <div className="box">
            <h1 className="lg:text-5xl/tight  text-3xl font-medium mb-7">
              Belajar Membuat websaite Dengan <span className="font-bold bg-sky-400 underline"> Tailwind CSS </span>
            </h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus recusandae error minus dignissimos modi quos voluptates aliquam debitis. Hic.</p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-600 transition-all py-2
             px-4 text-white shadow rounded-full "
            >
              Tentang Kmai <i classNames="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="hero image" className="md:w-full w-[400px] mx-auto md:m-0"></img>
          </div>
        </div>

        <div className="about pt-32 grid md:grid-cols-2  grid-cols-1 gap-20 items-center">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} className="md:w-full w-[400px] mx-auto md:m-0"></img>
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight  text-3xl font-medium mb-7">
              Belajar Membuat websaite Dengan <span className="font-bold bg-sky-400 underline"> Tailwind CSS </span>
            </h1>
            <p className="text-base/8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus recusandae error minus dignissimos modi quos voluptates aliquam debitis. Hicee.</p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-600 transition-all py-2
             px-4 text-white shadow rounded-full mt-3"
            >
              Tentang Kmai <i classNames="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div className="services pt-32">
          <h1 className="text-center text-3xl font-medium mb-2 lg:text-5xl/tight">Layanan</h1>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className="services-box  mt-10 grid md:grid-cols-3 gap-3 grid-cols-1">
            <div className="card-box p-10  bg-sky-400">
              <i class="fa-solid fa-1 fa-lg"></i>
              <h1 className="text-2xl">Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="card-box p-10  bg-sky-400">
              <i class="fa-solid fa-1 fa-lg"></i>
              <h1 className="text-2xl">Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="card-box p-10  bg-sky-400">
              <i class="fa-solid fa-1 fa-lg"></i>
              <h1 className="text-2xl">Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
          </div>
        </div>
        <div className="proyek mt-8">
          <h1 className=" text-center text-3xl font-medium mb-2 lg:text-5xl/tight">Proyek</h1>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className="proyek-box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            <div className="proyek-1 border p-3 bg-white shadow-md">
              <img src={Proyek1} alt="" className="h-48 w-full"></img>
              <h1 className="text-xl2 font-bold">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="proyek-2 border p-3 bg-white shadow-md">
              <img src={Proyek2} alt="" className="h-48 w-full"></img>
              <h1 className="text-xl2 font-bold">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="proyek-3 border p-3 bg-white shadow-md">
              <img src={Proyek3} alt="" className="h-48 w-full"></img>
              <h1 className="text-xl2 font-bold">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="proyek-4 border p-3 bg-white shadow-md">
              <img src={Proyek4} alt="" className="h-48 w-full"></img>
              <h1 className="text-xl2 font-bold">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
            <div className="proyek-5 border p-3 bg-white shadow-md">
              <img src={Proyek5} alt="" className="h-48 w-full"></img>
              <h1 className="text-xl2 font-bold">Lorem Ipsum</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores temporibus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
