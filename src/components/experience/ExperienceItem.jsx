export default function ExperienceItem({item}){return <article className="timeline-item"><span className="timeline-dot"/><div><div className="timeline-top"><h3>{item.role}</h3><span>{item.dates}</span></div><h4>{item.company} · {item.project}</h4><ul>{item.items.map(x=><li key={x}>{x}</li>)}</ul></div></article>}

