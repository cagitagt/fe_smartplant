import React from "react";

const MonsteraPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-14 p-10 bg-greenMain">
      <div className="shadow-2xl w-[900px] h-96 shadow-greenMain rounded-2xl bg-white">
        <img src="./img/1741960.jpg" alt="monstera" className="object-cover w-full h-full p-10 rounded-2xl"/>
      </div>

      <div className="shadow-2xl w-[900px] h-auto shadow-greenMain rounded-2xl p-12 bg-white">
        <h1 className="mb-6 text-5xl font-bold">Monstera</h1>
        <p className="text-justify">
          Monstera adalah salah satu jenis tanaman hias tropis yang sangat
          populer di kalangan pecinta tanaman indoor maupun outdoor. Tanaman ini
          berasal dari hutan hujan tropis di Amerika Tengah dan Selatan, dan
          dikenal karena bentuk daunnya yang unik dan artistik. Nama ilmiahnya
          adalah Monstera deliciosa, meskipun ada juga jenis lain seperti
          Monstera adansonii. Daun Monstera berwarna hijau mengkilap dan
          memiliki bentuk khas dengan lubang-lubang atau sobekan alami yang
          membuatnya dijuluki "Swiss cheese plant". Lubang-lubang ini bukan
          sekadar estetika, tetapi merupakan adaptasi alami untuk memungkinkan
          cahaya menembus ke daun bagian bawah dan mengurangi kerusakan daun
          akibat angin kencang di habitat aslinya.
        </p>

        <br />

        <p className="text-justify">
          Tanaman Monstera termasuk tanaman merambat dan memiliki akar udara
          yang memungkinkannya tumbuh secara vertikal dengan bantuan penyangga
          seperti turus atau dinding. Dalam kondisi ideal, Monstera dapat tumbuh
          sangat besar dan menciptakan nuansa tropis yang kuat di dalam ruangan.
          Selain itu, tanaman ini relatif mudah dirawat. Monstera tumbuh baik di
          tempat yang terang namun tidak terkena sinar matahari langsung secara
          terus-menerus, serta membutuhkan penyiraman yang cukup tetapi tidak
          berlebihan. Media tanam yang baik untuk Monstera adalah campuran tanah
          yang gembur dan memiliki drainase baik, seperti campuran tanah, sekam
          bakar, dan sedikit pasir atau perlite.
        </p>

        <br />

        <p className="text-justify">
          Selain menjadi elemen dekoratif yang sangat digemari karena tampilan
          daunnya yang dramatis dan estetik, Monstera juga dipercaya memiliki
          nilai simbolis dalam feng shui sebagai simbol pertumbuhan, kemakmuran,
          dan keseimbangan. Tidak heran jika tanaman ini sering muncul di dalam
          desain interior modern, kafe, perkantoran, dan rumah-rumah urban.
          Namun demikian, penting untuk diketahui bahwa semua bagian tanaman
          Monstera bersifat toksik jika tertelan, terutama bagi hewan peliharaan
          seperti kucing dan anjing, karena mengandung kalsium oksalat yang bisa
          menyebabkan iritasi mulut dan pencernaan. Oleh karena itu, penempatan
          Monstera di rumah sebaiknya diperhatikan agar tetap aman namun tetap
          menjadi daya tarik visual yang menawan.
        </p>
        
      </div>
    </div>
  );
};

export default MonsteraPage;
