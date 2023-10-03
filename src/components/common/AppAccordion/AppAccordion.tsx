import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import React from "react";

type Props = {
  title: string;
  items: JSX.Element;
};

const AppAccordion: React.FC<Props> = ({ title, items }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{items}</AccordionDetails>
    </Accordion>
  );
};

export default AppAccordion;
