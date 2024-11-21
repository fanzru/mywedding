"use client";

type ThankYouQRCodeProps = {
  link: string;
};

export default function ThankYouQRCode({ link }: ThankYouQRCodeProps) {
  if (!link) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-white">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg text-center">
          Unfortunately, no link was provided. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 text-white">
      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
      <p className="text-lg mb-4 text-center">
        We are truly grateful for your presence and support. Here's the link to
        our wedding location for your convenience.
      </p>
      {/* QR Code Section */}
      <div className="p-4 bg-white rounded shadow-lg">
        <img
          src="/images/location.png"
          alt="QR Code to Location"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
      <p className="text-sm mt-4 break-all text-center underline mb-[20px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className="p-2">
          Klik untuk Google Maps
          </p>
        </a>
      </p>
      {/* Button to Open Google Maps */}
      <button
        onClick={() => window.open("https://forms.gle/jZCbjkcxNkkJyHyp9", "_blank")}
        className=" rounded-md bg-[#FFD700] px-4 py-2 text-black shadow hover:bg-[#ffd900e0] focus:outline-none focus:ring-2 focus:ring-[#C6754D]"
      >
        Konfirmasi Hadiah
      </button>
    </div>
  );
}
