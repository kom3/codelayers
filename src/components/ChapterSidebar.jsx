import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ChapterSidebar.scss";

/**
 * Sidebar navigation showing a list of chapters for the current topic.
 * Highlights the active chapter if provided.
 */
const ChapterSidebar = ({ topicId, chapters, activeChapterId }) => {
  if (!chapters || chapters.length <= 1) return null;

  return (
    <aside className="chapter-sidebar">
      <nav>
        <ul>
          {chapters.map((c) => (
            <li key={c.id} className={c.id === activeChapterId ? "active" : ""}>
              <Link to={`/${topicId}/${c.id}`}>{c.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

ChapterSidebar.propTypes = {
  topicId: PropTypes.string.isRequired,
  chapters: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })
  ),
  activeChapterId: PropTypes.string,
};

export default ChapterSidebar;
