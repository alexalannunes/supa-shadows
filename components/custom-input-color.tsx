interface Props {
  color: string;
  onChange: (color: string) => void;
}
export function CustomInputColor({ color, onChange }: Props) {
  return (
    <input
      className="supa-shadows__custom-input-color"
      type="color"
      value={color}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
