import { SectionEyebrow } from "@/components/SectionEyebrow";
import { sectionHeading } from "@/lib/ui-classes";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  className = "",
}: Props) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow>
      <h2 className={sectionHeading}>{title}</h2>
      {description ? (
        <p className="text-text-muted mx-auto mt-4 max-w-2xl text-base leading-[1.65]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
