import { useRef } from "react";
import useSensorDataStore from "../store/sensorDataStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { sensorData, fetchSensorData, isLoading, error } =
    useSensorDataStore();

  const plantsContainerRef = useRef(null);
  const newsContainerRef = useRef(null);

  const scroll = (ref, direction) => {
    const amount = 200;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSensorData();
    }, 60000);

    fetchSensorData();

    return () => clearInterval(interval);
  }, [fetchSensorData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-whiteMain font-poppins">
      <main className="w-[1000px] max-h-min m-10">
        <section className="flex items-center justify-between w-full mt-5 mb-10 rounded-2xl h-96">
          <div className="p-8">
            <div className="flex justify-center items-center w-[600px] gap-4 h-full mb-5 rounded-3xl shadow-xl p-5">
              <div className="w-24 h-24 rounded-full bg-greenMain">
                <img
                  src="/img/cagita.jpeg"
                  className="object-cover w-full h-full rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-5xl font-semibold text-greenMain">
                  Hi, Cagita!
                </h1>
                <p className="my-2 text-sm">
                  Check your garden with smart and make it grow
                  <span className="text-lg font-bold font-overlock text-greenMain">
                    {" "}
                    beautiful
                  </span>
                </p>
              </div>
            </div>

            <h1 className="mb-2 text-xl my-10 font-semibold mt-9">
              Garden Condition!
            </h1>
            <div className="w-[600px] bg-green4 rounded-2xl">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-20">
                  <div className="flex py-2 px-6 w-full h-full items-center gap-4">
                    <img
                      src="/svg/solar_temperature-linear.svg"
                      className="w-12"
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold text-2xl">
                        {sensorData.temperature}°C
                      </h1>
                      <p className="text-sm text-greenMain">Temperature</p>
                    </div>
                  </div>
                </div>
                <div className="h-20">
                  <div className="flex py-2 px-6 w-full h-full items-center gap-4">
                    <img
                      src="/svg/ion_water-outline.svg"
                      className="w-12"
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold text-2xl">
                        {sensorData.water_level} %
                      </h1>
                      <p className="text-sm text-greenMain">Water Level</p>
                    </div>
                  </div>
                </div>
                <div className="h-20">
                  <div className="flex py-2 px-6 w-full h-full items-center gap-4">
                    <img
                      src="/svg/solar_water-bold.svg"
                      className="w-12"
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold text-2xl">
                        {sensorData.humidity} %
                      </h1>
                      <p className="text-sm text-greenMain">Humidity</p>
                    </div>
                  </div>
                </div>
                <div className="h-20">
                  <div className="flex py-2 px-6 w-full h-full items-center gap-4">
                    <img src="/svg/cil_plant.svg" className="w-12" alt="" />
                    <div>
                      <h1 className="font-bold text-2xl">
                        {sensorData.plants}
                      </h1>
                      <p className="text-sm text-greenMain">Plants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-80">
            <img src="/img/13.png" className="pt-10" alt="" />
          </div>
        </section>

        <section className="w-full my-20">
          <div className="flex gap-3 hover:cursor-pointer">
            <div className="px-4 py-2 rounded-2xl bg-greenMain text-white">
              All
            </div>
            <div className="px-4 py-2 rounded-2xl bg-green3 hover:bg-greenMain">
              Garden
            </div>
            <div className="px-4 py-2 rounded-2xl bg-green3 hover:bg-greenMain">
              Rooftop
            </div>
            <div className="px-4 py-2 rounded-2xl bg-green3 hover:bg-greenMain">
              Backyard
            </div>
            <div className="px-4 py-2 rounded-2xl bg-greenMain text-white hover:font-extrabold">
              +
            </div>
          </div>
          <h1 className="mb-2 text-xl font-semibold mt-9">
            Let's check your garden!
          </h1>

          <div className="relative">
            <button
              onClick={() => scroll(plantsContainerRef, "left")}
              className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-green-100"
            >
              <img src="/svg/left.svg" alt="" />
            </button>

            <div
              ref={plantsContainerRef}
              className="flex items-center gap-6 px-16 overflow-x-auto h-72 scroll-smooth no-scrollbar"
            >
              {[
                {
                  name: "Monstera",
                  status: "Healthy 🌿",
                  img: "/img/1741960.jpg",
                },
                {
                  name: "Aloe Vera",
                  status: "Growing 🪴",
                  img: "/imgplant/1.png",
                },
                {
                  name: "Snake Plant",
                  status: "Strong 🌱",
                  img: "/imgplant/2.png",
                },
                {
                  name: "Orchid",
                  status: "Lush 🌳",
                  img: "/imgplant/3.png",
                },
                {
                  name: "Cactus",
                  status: "Growing 🪴",
                  img: "/imgplant/4.png",
                },
                {
                  name: "Jasmine",
                  status: "Strong 🌱",
                  img: "/imgplant/5.png",
                },
                { name: "Bamboo", status: "Lush 🌳", img: "/imgplant/6.png" },
              ].map((plant, i) => (
                <Link
                  // to={`/plant/${plant.name.toLowerCase()}`}
                  to={"/dashboard"}
                  className="no-underline"
                  key={i}
                >
                  <div className="flex flex-col items-center justify-center flex-none w-48 h-64 transition bg-white rounded-md shadow-md hover:scale-105">
                    <div
                      className="bg-center bg-cover rounded-lg w-36 h-36"
                      style={{ backgroundImage: `url('${plant.img}')` }}
                    ></div>
                    <h1 className="mt-3 text-lg font-semibold font-overlock">
                      {plant.name}
                    </h1>
                    <p className="text-sm text-gray-500">{plant.status}</p>
                  </div>
                </Link>
              ))}
            </div>

            <button
              onClick={() => scroll(plantsContainerRef, "right")}
              className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-green-100"
            >
              <img src="/svg/right.svg" alt="" />
            </button>
          </div>
        </section>

        <section className="w-full my-10">
          <h1 className="mb-2 text-xl font-semibold">Latest News & Tips</h1>
          <div className="relative">
            <button
              onClick={() => scroll(newsContainerRef, "left")}
              className="absolute left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-green-100"
            >
              <img src="/svg/left.svg" alt="" />
            </button>

            <div
              ref={newsContainerRef}
              className="flex items-center gap-6 px-16 overflow-x-auto h-72 scroll-smooth no-scrollbar"
            >
              <a
                href="/news.html"
                className="flex-none w-64 h-64 p-4 transition bg-white shadow-md rounded-xl hover:scale-105"
              >
                <h2 className="mb-2 text-lg font-semibold text-greenMain font-overlock">
                  Tentang Monstera
                </h2>
                <p className="text-sm text-justify text-gray-600">
                  Monstera adalah salah satu jenis tanaman hias tropis yang
                  sangat populer di kalangan pecinta tanaman indoor maupun
                  outdoor. ...
                </p>
              </a>

              {[
                {
                  title: "Tips memilih pupuk",
                  desc: "Pemilihan pupuk yang tepat sangat penting untuk mendukung pertumbuhan...",
                },
                {
                  title: "Teknik menyiram air cerdas",
                  desc: "Menyiram tanaman merupakan salah satu kegiatan penting dalam perawatan tumbuhan...",
                },
                {
                  title: "Melati, si wangi",
                  desc: "Bunga melati dikenal sebagai tanaman hias yang memiliki aroma harum khas...",
                },
              ].map((news, i) => (
                <div
                  key={i}
                  className="flex-none w-64 h-64 p-4 transition bg-white shadow-md rounded-xl hover:scale-105"
                >
                  <h2 className="mb-2 text-lg font-semibold text-greenMain font-overlock">
                    {news.title}
                  </h2>
                  <p className="text-sm text-justify text-gray-600">
                    {news.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll(newsContainerRef, "right")}
              className="absolute right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 hover:bg-green-100"
            >
              <img src="/svg/right.svg" alt="" />
            </button>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-between w-full mt-40 bg-green-950 h-96 p-30">
        <h1 className="text-white font-bold text-6xl">Smart Plant</h1>
        <div className="w-80">
          <div className="w-80 flex justify-between text-white">
            <h1>Dhiyaul Haq Ikbar W.</h1>
            <p>(233140707111023)</p>
          </div>
          <div className="w-80 flex justify-between text-white">
            <h1>Cagita Dian A’yunin</h1>
            <p>(233140707111023)</p>
          </div>
          <div className="w-80 flex justify-between text-white">
            <h1>Aulia Luthfi Hakim</h1>
            <p>(233140707111030)</p>
          </div>
          <div className="w-80 flex justify-between text-white">
            <h1>Nadia Alya Paramitha</h1>
            <p>(233140707111031)</p>
          </div>
          <div className="w-80 flex justify-between text-white">
            <h1>Fredlina Devhania K.</h1>
            <p>(233140707111035)</p>
          </div>
        </div>
      </footer>

      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
