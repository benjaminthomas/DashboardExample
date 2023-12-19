export default function Customers() {
  return (
    <section className="bg-[#003263]">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-white md:text-4xl">
          Trusted by Our Customers
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-6">
          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/stellantis.png" alt="stellantis" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/mazda.png" alt="mazda" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/isuzu.png" alt="isuzu" />
          </a>

          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/chrysler.png" alt="chrysler" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/gm.png" alt="gm" />
          </a>
          <a
            href="#"
            className="flex justify-center items-center max-w-[120px]"
          >
            <img src="/audi.png" alt="audi" />
          </a>
        </div>
      </div>
    </section>
  );
}
