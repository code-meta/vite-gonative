import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const PageLinks = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Link to="/words">Top most useful words.</Link>
        </AccordionTrigger>
        <AccordionContent>
          All the words you are going to learn are both informal and formal also
          important expressions are included.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PageLinks;
