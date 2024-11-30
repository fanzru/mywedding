"use client";

type ThankYouQRCodeProps = {
  link: string;
};

export default function ThankYouQRCode({ link }: ThankYouQRCodeProps) {
  if (!link) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-white">
        <h2 className="mb-4 text-2xl font-bold">Terima Kasih!</h2>
        <p className="text-center text-lg">
          Sayangnya, tidak ada tautan yang diberikan. Silakan coba lagi nanti.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 text-white">
      <h2 className="mb-4 text-2xl font-bold">Terima Kasih!</h2>
      <p className="mb-4 text-center text-lg">
        Kami sangat berterima kasih atas kehadiran dan dukungan Anda. Berikut
        tautan ke lokasi pernikahan kami untuk kenyamanan Anda.
      </p>
      {/* QR Code Section */}
      <div className="rounded bg-white p-4 shadow-lg">
        <img
          src="/images/location.png"
          alt="QR Code to Location"
          className="h-[200px] w-[200px] object-contain"
        />
      </div>
      <div className="mb-[20px] mt-4 break-all text-center text-sm underline">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2"
        >
          Klik untuk Google Maps
        </a>
      </div>
      {/* Button to Open Google Maps */}
  
    </div>
  );
}
