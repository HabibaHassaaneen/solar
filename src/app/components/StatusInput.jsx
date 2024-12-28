import React from "react";
import { RadioGroup, Radio, Chip } from "@nextui-org/react";
import { GiSolarPower } from "react-icons/gi";
export default function StatusInput() {
  const [selected, setSelected] = React.useState("1");

  return (
    <div className="flex  gap-3">
   
      <RadioGroup
startContent={<GiSolarPower />}
        label="Number of Angels  "
        value={selected}
        onValueChange={setSelected}
    orientation="horizontal"
      >
        <Radio color="success" value="1">
          {" "}
          <Chip color="success" variant="flat">
            1 Angele
          </Chip>
        </Radio>
        <Radio color="warning" value="2">

          <Chip color="warning" variant="flat">
           2 Angeles
          </Chip>
        </Radio>
        <Radio color="danger" value="3">
          <Chip color="danger"  variant="flat" >
            3 Angeles
          </Chip>
        </Radio>
      </RadioGroup>
      <p className="text-default-500 text-small">Selected: {selected}</p>
    </div>
  );
}
