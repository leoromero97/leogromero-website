export type CategoryTypes = "design" | "development" | "advisory" | "education";

export type PillProps = {
  label: string;
  category: CategoryTypes;
  className?: string;
};
