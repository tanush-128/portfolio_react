function Skill(props) {
  return (
    <div class="skill">
      <div class="title">
        <span>{props.name}</span>
        <span>{props.level}%</span>
      </div>
      <div class="bar">
        <div id="indicator" style={{ maxWidth: props.level + "%" }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div id="skills-title">
        <hr />
        My Skills
      </div>
      <div id="skill-collection">
        <Skill name="React" level={90} />
        <Skill name="Flutter" level={70} />
        <Skill name="Django" level={55} />
        <Skill name="Python" level={80} />
      </div>
    </section>
  );
}
