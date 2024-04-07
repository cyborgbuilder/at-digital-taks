import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove'; 
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {

  const [expandedPanel, setExpandedPanel] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  }

  return (
    <div style={{ width: '100%' }}> 
      <Accordion
        expanded={expandedPanel === 'panel1'}
        onChange={handleExpansion('panel1')}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={expandedPanel === 'panel1' ? <RemoveIcon /> : <AddIcon />}
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
        expanded={expandedPanel === 'panel2'}
        onChange={handleExpansion('panel2')}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={expandedPanel === 'panel2' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
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
        expanded={expandedPanel === 'panel2'}
        onChange={handleExpansion('panel2')}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        sx={{ width: '100%' }}
      >
        <AccordionSummary
          expandIcon={expandedPanel === 'panel2' ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
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
