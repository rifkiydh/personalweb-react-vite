import HeroImage from "../assets/images/hero.svg";

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
      </div>
    </div>
  );
};

export default HomePage;
