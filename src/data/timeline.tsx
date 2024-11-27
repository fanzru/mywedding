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
        <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 md:text-sm">
          Bertemu saat SMA, dua kepribadian berbeda bersatu melalui percakapan ringan yang perlahan menciptakan rasa penasaran dan keakraban.
        </p>
        <div className="relative">
          <Image
            src="/images/story/1.webp"
            alt="startup template"
            width={1000}
            height={1000}
            className="h-[200px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Perjalanan Hubungan",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 md:text-sm">
          Melewati suka duka, menghadapi tantangan jarak, hingga akhirnya hubungan dewasa terbentuk dengan keyakinan memilih bersama selamanya.
        </p>
        <div className="relative">
          <Image
            src="/images/story/2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Bertunangan",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 md:text-sm">
          Dalam suasana hangat penuh cinta, kalian mengikat janji, simbol komitmen dan restu keluarga untuk melangkah ke masa depan.
        </p>

        <div className="relative">
          <Image
               src="/images/story/3.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Hari Pernikahan",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-white dark:text-neutral-200 md:text-sm">
        Hari bahagia penuh kebahagiaan, di mana janji suci terucap, merayakan cinta dan awal hidup bersama yang abadi.
        </p>
        <div className="relative">
          <Image
            src="/images/story/4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-[200px] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];
