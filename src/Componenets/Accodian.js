import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove'; 
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div style={{ width: '100%' }}> {/* Ensure the parent div also spans 100% width */}
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{
          width: '100%', // Add this line
          '& .MuiAccordion-root': { width: '100%' }, // Ensure Accordion's root also spans 100%
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What is Webflow and why is it the best website builder?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{
          width: '100%', // Add this line
          '& .MuiAccordion-root': { width: '100%' }, // Ensure Accordion's root also spans 100%
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What is Webflow and why is it the best website builder?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{
          width: '100%', 
          '& .MuiAccordion-root': { width: '100%' }, 
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What is Webflow and why is it the best website builder?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
