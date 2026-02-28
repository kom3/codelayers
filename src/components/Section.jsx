import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Section.scss";

/**
 * Render a single section of a tutorial. Supports:
 * - title (string)
 * - body (string with optional paragraph newlines)
 * - note (string or array -> renders as paragraph or list)
 * - code (string) -> renders as pre/code block with syntax highlighting
 * - codeLang (string) -> language for syntax highlighting (e.g. 'python', 'javascript')
 * - table ({ headers: [], rows: [ [] ] }) -> renders HTML table
 */
const renderBody = (body) => {
  if (!body) return null;
  // split on double newlines for paragraphs
  return body.split(/\n\n+/).map((p) => (
    <p key={p.slice(0, 64)}>{p}</p>
  ));
};

const renderNote = (note) => {
  if (!note) return null;
  if (Array.isArray(note)) {
    return (
      <aside className="note">
        <ul>
          {note.map((n) => (
            <li key={String(n).slice(0, 64)}>{n}</li>
          ))}
        </ul>
      </aside>
    );
  }

  // if newline-delimited list markers are present, convert to list
  const lines = String(note).split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const isBulletList = lines.every((l) => /^[-*\u2022]\s+/.test(l));
  if (isBulletList) {
    return (
      <aside className="note">
        <ul>
          {lines.map((l) => (
            <li key={String(l).slice(0, 64)}>{l.replace(/^[-*\u2022]\s+/, '')}</li>
          ))}
        </ul>
      </aside>
    );
  }

  return <aside className="note">{note}</aside>;
};

const renderCode = (code, lang = "javascript") => {
  if (!code) return null;
  return (
    <div className="code-block-wrapper">
      <SyntaxHighlighter
        language={lang}
        style={theme}
        className="code-block"
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          borderRadius: "6px",
          fontSize: "0.95rem",
          lineHeight: "1.6",
          backgroundColor: "#2d2d2d",
        }}
        wrapLines={true}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const renderTable = (table) => {
  if (!table || !Array.isArray(table.headers) || !Array.isArray(table.rows)) return null;
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {table.headers.map((h) => (
              <th key={String(h).slice(0, 64)}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r) => (
            <tr key={JSON.stringify(r).slice(0, 128)}>{r.map((cell, ci) => <td key={`${String(cell).slice(0,32)}-${ci}`}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Section = ({ title, body, note, footer, code, codeLang, table }) => (
  <article className="section">
    {title && <h3>{title}</h3>}
    {renderBody(body)}
    {note && renderNote(note)}
    {code && renderCode(code, codeLang)}
    {table && renderTable(table)}
    {footer && <footer>{footer}</footer>}
  </article>
);

Section.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  footer: PropTypes.string,
  code: PropTypes.string,
  codeLang: PropTypes.string,
  table: PropTypes.shape({ headers: PropTypes.array, rows: PropTypes.array }),
};

export default Section;
