import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// material-ui
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./TutorialCard.scss";

/**
 * Presentational card used on the landing page. Accepts any additional
 * props needed to render a tutorial link.  This keeps the landing page
 * logic clean and makes it easy to change visual appearance in one
 * place.
 */
// show count of chapters if available (fallback to one section)
const TutorialCard = ({ id, title, subtitle, chapters, sections }) => {
  let count = 0;
  if (chapters && Array.isArray(chapters)) {
    count = chapters.length;
  } else if (sections) {
    count = 1;
  }
  return (
    <Card className="tutorial-card" elevation={2}>
      <CardActionArea component={Link} to={`/${id}`}>
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="textSecondary">
              {subtitle}
            </Typography>
          )}
          {count > 1 && (
            <Typography variant="caption" color="textSecondary">
              {count} chapters
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

TutorialCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  chapters: PropTypes.array,
  sections: PropTypes.array,
};

export default TutorialCard;
