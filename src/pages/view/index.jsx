import { useParams, Link } from "react-router-dom";
import tutorials from "../../data";
import "./index.scss";
import Section from "../../components/Section";

/**
 * ViewPage renders the selected tutorial topic. The data lives
 * in `src/data` and is just normal JS/JSON exports. Because we
 * route with `:topicId` we can look the object up in the array.
 */
const ViewPage = () => {
	const { topicId } = useParams();
	const topic = tutorials.find((t) => t.id === topicId);

	if (!topic) {
		return (
			<div className="not-found">
				<p>Sorry, that tutorial could not be found.</p>
				<Link to="/">Back to list</Link>
			</div>
		);
	}

	return (
		<main className="tutorial-view">
			<div className="container">
				<h1>{topic.title}</h1>
				{topic.subtitle && <h2>{topic.subtitle}</h2>}
				{topic.sections?.map((section, idx) => (
					<Section key={section.title ?? idx} {...section} />
				))}
				{topic.footer && <footer className="topic-footer">{topic.footer}</footer>}
			</div>
		</main>
	);
};

export default ViewPage;
