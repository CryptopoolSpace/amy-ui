import iconsSelection from "@icons/Assembly.json";

export const iconControl = {
  control: {
    type: "select",
    options: iconsSelection.iconSets[0].selection.filter((i) => i.name).map((i) => i.name)
  }
};
