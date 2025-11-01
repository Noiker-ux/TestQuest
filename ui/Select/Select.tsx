import { forwardRef } from "react";
import ISelect from "./Select.interface";

const Select = forwardRef(function Select({ options, onChange }: { options: ISelect[]; onChange: () => void }, ref) {
  return (
    <div>
      <p>Филалы</p>
      <select className="w-full" onChange={onChange} ref={ref}>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
