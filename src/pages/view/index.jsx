import { useParams, Link } from "react-router-dom";
import tutorials from "../../data";
import "./index.scss";
import Section from "../../components/Section";
import ChapterSidebar from "../../components/ChapterSidebar";

/**
 * ViewPage renders the selected tutorial topic, and optionally a
 * specific chapter within that topic. The underlying data has been
 * restructured so that each topic file exports a `chapters` array
 * (ordered by index), with each chapter containing its own `sections`.
 * Topics without `chapters` are still supported for backwards
 * compatibility; they are treated as a single unnamed chapter.
 *
 * We read `:topicId` (and an optional `:chapterId`) from the route
 * params and render either a list of chapter links or the sections
 * for the selected chapter.
 */
const ViewPage = () => {
  // topicId is always present; chapterId may be undefined
  const { topicId, chapterId } = useParams();
  const topic = tutorials.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="not-found">
        <p>Sorry, that tutorial could not be found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  // normalise data shape: older topics may still use `sections`.
  const chapters = topic.chapters ?? [
    { id: "", title: topic.title, sections: topic.sections || [] },
  ];

  // if a chapterId was provided, try to locate it
  let activeChapter = null;
  if (chapterId) {
    activeChapter = chapters.find((c) => c.id === chapterId);
    if (!activeChapter) {
      // invalid chapter requested
      return (
        <div className="not-found">
          <p>Sorry, that chapter could not be found.</p>
          <Link to="/">Back to list</Link>
        </div>
      );
    }
  }

  // determine which chapter we should display; fall back to first if none
  const selectedChapter = activeChapter || (!chapterId && chapters[0]);

  // find the current chapter index for next/previous navigation
  const currentChapterIndex = chapters.findIndex(
    (c) => c.id === selectedChapter?.id
  );
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;
  const nextChapter =
    currentChapterIndex < chapters.length - 1
      ? chapters[currentChapterIndex + 1]
      : null;

  return (
    <main className="tutorial-view">
      <div className="container">
        {/* sidebar navigation appears only when there are multiple chapters */}
        <ChapterSidebar
          topicId={topicId}
          chapters={chapters}
          activeChapterId={selectedChapter?.id}
        />
        <div className="content">
          <h1>{topic.title}</h1>
          {topic.subtitle && <h2>{topic.subtitle}</h2>}

          {/* render selected chapter */}
          {selectedChapter?.sections.map((section, idx) => (
            <Section key={section.title ?? idx} {...section} />
          ))}
          {topic.footer && (
            <footer className="topic-footer">{topic.footer}</footer>
          )}

          {/* chapter navigation for mobile and desktop */}
          {chapters.length > 1 && (
            <nav className="chapter-nav">
              {prevChapter ? (
                <Link to={`/tutorialhub/${topicId}/${prevChapter.id}`} className="nav-link prev">
                  <span className="nav-label">← Previous</span>
                  <span className="nav-title">{prevChapter.title}</span>
                </Link>
              ) : (
                <div className="nav-link disabled" />
              )}
              {nextChapter ? (
                <Link to={`/tutorialhub/${topicId}/${nextChapter.id}`} className="nav-link next">
                  <span className="nav-label">Next →</span>
                  <span className="nav-title">{nextChapter.title}</span>
                </Link>
              ) : (
                <div className="nav-link disabled" />
              )}
            </nav>
          )}
        </div>
      </div>
    </main>
  );
};

export default ViewPage;
