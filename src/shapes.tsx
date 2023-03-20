import {
  ArrowIcon,
  DiamondIcon,
  EllipseIcon,
  EraserIcon,
  FreedrawIcon,
  ImageIcon,
  LineIcon,
  RectangleIcon,
  SelectionIcon,
  TextIcon,
} from "./components/icons";
import { KEYS } from "./keys";

export const SHAPES = [
  {
    icon: SelectionIcon,
    value: "selection",
    key: null, // KEYS.V,
    numericKey: null, // KEYS["1"],
    fillable: true,
  },
  {
    icon: RectangleIcon,
    value: "rectangle",
    key: null, // KEYS.R,
    numericKey: null, // KEYS["2"],
    fillable: true,
  },
  {
    icon: DiamondIcon,
    value: "diamond",
    key: null, // KEYS.D,
    numericKey: null, // KEYS["3"],
    fillable: true,
  },
  {
    icon: EllipseIcon,
    value: "ellipse",
    key: null, // KEYS.O,
    numericKey: null, // KEYS["4"],
    fillable: true,
  },
  {
    icon: ArrowIcon,
    value: "arrow",
    key: null, // KEYS.A,
    numericKey: null, // KEYS["5"],
    fillable: true,
  },
  {
    icon: LineIcon,
    value: "line",
    key: null, // KEYS.L,
    numericKey: null, // KEYS["6"],
    fillable: true,
  },
  {
    icon: FreedrawIcon,
    value: "freedraw",
    key:  null, // [KEYS.P, KEYS.X],
    numericKey: null, // KEYS["7"],
    fillable: false,
  },
  {
    icon: TextIcon,
    value: "text",
    key: null, // KEYS.T,
    numericKey: null, // KEYS["8"],
    fillable: false,
  },
  {
    icon: ImageIcon,
    value: "image",
    key: null,
    numericKey: null, // KEYS["9"],
    fillable: false,
  },
  {
    icon: EraserIcon,
    value: "eraser",
    key: null, // KEYS.E,
    numericKey: null, // KEYS["0"],
    fillable: false,
  },
] as const;

export const findShapeByKey = (key: string) => {
  // no need for this function
  return null;
};
