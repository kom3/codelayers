import PropTypes from "prop-types";
import "./Section.scss";

/**
 * Render a single section of a tutorial. Supports:
 * - title (string)
 * - body (string with optional paragraph newlines)
 * - note (string or array -> renders as paragraph or list)
 * - code (string) -> renders as pre/code block
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

const renderCode = (code, lang) => {
  if (!code) return null;
  return (
    <pre className="code-block">
      <code className={lang ? `language-${lang}` : undefined}>{code}</code>
    </pre>
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
