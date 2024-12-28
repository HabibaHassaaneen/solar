import {Accordion, AccordionItem} from "@nextui-org/react";
import StatusInput from "./StatusInput";
import CheckboxItem from "./CheckboxItem";
import IrredianceChart from "./IrredianceChart";

export default function Taps() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Configration"  title="Configration">
        <div className="flex flex-col gap-3">
      <StatusInput/>
      <CheckboxItem/>
</div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Result" title="Result">
        <div>
        Angel ratio
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Chart" title="Chart">
       <IrredianceChart/>
      </AccordionItem>
    </Accordion>
  );
}
