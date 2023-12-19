type SectionProps = {
  children: React.ReactNode;
  idName?: string;
};
export default function Section({ children, idName }: SectionProps) {
  return (
    <section id={idName}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">{children}</div>
      </div>
    </section>
  );
}
