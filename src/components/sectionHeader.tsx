import { DescriptionText, SecondaryTitleText } from "./textanimation";

type SectionHeaderProps = {
  titleTextValue: string;
  descriptionTextValue?: string;
  styles?: string;
};
export default function SectionHeader({
  titleTextValue,
  descriptionTextValue,
  styles,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto text-center pb-12 md:pb-20 ${styles}`}>
      <SecondaryTitleText>{titleTextValue}</SecondaryTitleText>
      <DescriptionText>{descriptionTextValue}</DescriptionText>
    </div>
  );
}
