type CardTitleProps = {
  children: React.ReactNode;
};

export default function CardTitle({ children }: CardTitleProps) {
  return (
    <div className="px-7.5 py-7">
      <h3 className="text-xl font-semibold text-black dark:text-white uppercase">
        {children}
      </h3>
    </div>
  );
}
