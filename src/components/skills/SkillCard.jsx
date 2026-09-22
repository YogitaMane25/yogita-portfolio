export default function SkillCard({skill}){return <article className="skill-card"><h3>{skill.title}</h3><div className="chips">{skill.items.map(item=><span key={item}>{item}</span>)}</div></article>}
