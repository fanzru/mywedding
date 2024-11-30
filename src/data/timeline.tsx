import Image from "next/image";

export const timelineSetting = {
  outerDotColor: "bg-[#FFD700]",
  innerDotColor: "bg-[#FFD700]",
  startLineColor: "from-red-500",
  endLineColor: "via-yellow-500",
};

export const timeline = [
  {
    title: "Awal Pertama Kali Bertemu",
    content: (
      <div>
        <p className="mb-8  text-white dark:text-neutral-200 text-[14px] lg:text-[18px] h-auto">
          Awal pertama kali kami bertemu pada tahun 2016 di kelas iPA 4 - SMA Negeri 1 Gombong, kemudian mulai mengenal lebih dekat di tahun 2017.
        </p>
        <div className="relative">
          <Image
            src="/images/story/1.webp"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-[200px] lg:h-[400px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Perjalanan Hubungan",
    content: (
      <div>
        <p className="mb-8  font-normal text-white dark:text-neutral-200 text-[14px] lg:text-[18px] h-auto">
          Mulai dari membantu mengerjakan tugas, saling mengingatkan, mengajarkan pendidikan, hingga akhirnya menjalin hubungan pertemanan yang erat.
        </p>
        <div className="relative">
          <Image
            src="/images/story/2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] lg:h-[400px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Bertunangan",
    content: (
      <div>
        <p className="mb-8 font-normal text-white dark:text-neutral-200 text-[14px] lg:text-[18px] h-auto">
          Pada bulan Oktober 2024, kami melangkah lebih jauh untuk bertunangan dan disaksikan oleh kedua orang tua, kemudian bersepakat untuk merencanakan pernikahan di akhir tahun 2024.
        </p>

        <div className="relative">
          <Image
               src="/images/story/3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] lg:h-[400px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Hari Pernikahan",
    content: (
      <div>
        <p className="mb-8 font-normal text-white dark:text-neutral-200 text-[14px] lg:text-[18px] h-auto">
          Dengan penuh rasa syukur, kami ingin berbagi momen istimewa ini, kami memutuskan untuk mengikat janji suci pernikahan pada tanggal 20 Desember 2024.
        </p>
        <div className="relative">
          <Image
            src="/images/story/4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] lg:h-[400px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];
