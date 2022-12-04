import {
  FormLabel,
  Input,
  PlacementWithLogical,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { memo } from "react";
import { HexAlphaColorPicker } from "react-colorful";

interface Props {
  id: string;
  value: string;
  onColor: (id: string, value: string) => void;
  placement?: PlacementWithLogical;
}

const ColorField = memo(
  ({ id, value, onColor, placement = "right" }: Props) => {
    return (
      <>
        <FormLabel fontWeight="bold">Color</FormLabel>
        <Popover placement={placement}>
          <PopoverTrigger>
            <Input
              fontFamily="monospace"
              value={value}
              onChange={(e) => onColor(id, e.target.value)}
            />
          </PopoverTrigger>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            <PopoverBody>
              <HexAlphaColorPicker
                color={value}
                onChange={(newColor) => onColor(id, newColor)}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </>
    );
  }
);
ColorField.displayName = "ColorField";
export { ColorField };
