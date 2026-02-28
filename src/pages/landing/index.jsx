import tutorials from "../../data";
import "./index.scss";

// material-ui components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TutorialCard from "../../components/TutorialCard";

/**
 * Landing page shows all available tutorials as a grid of cards.
 * Clicking one will navigate to the detail view for that topic.
 */
const Landing = () => {
  return (
    <div className="landing">
      {/* use MUI Container for consistent padding */}
      <Container>
        <Typography variant="h5" component="h5" gutterBottom>
          Available Materials
        </Typography>
        <Grid container spacing={3} className="cards">
          {tutorials.map((t) => (
            <Grid item key={t.id} xs={12} sm={6} md={4}>
              <TutorialCard {...t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Landing;
