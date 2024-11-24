"use client";

type ThankYouQRCodeProps = {
  link: string;
};

export default function ThankYouQRCode({ link }: ThankYouQRCodeProps) {
  if (!link) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-white">
        <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
        <p className="text-center text-lg">
          Unfortunately, no link was provided. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10 text-white">
      <h2 className="mb-4 text-2xl font-bold">Thank You!</h2>
      <p className="mb-4 text-center text-lg">
        We are truly grateful for your presence and support. Here's the link to
        our wedding location for your convenience.
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
      <button
        onClick={() =>
          window.open("https://forms.gle/jZCbjkcxNkkJyHyp9", "_blank")
        }
        className="rounded-md bg-[#FFD700] px-4 py-2 text-black shadow hover:bg-[#ffd900e0] focus:outline-none focus:ring-2 focus:ring-[#C6754D]"
      >
        Konfirmasi Hadiah
      </button>
    </div>
  );
}
