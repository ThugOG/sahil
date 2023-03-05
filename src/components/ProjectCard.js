const ProjectCard = ({ name, description, technologies, github_link, live_link }) => {
  return (
    <div className="card">
      <div className="heading">
        <p className="card-head">{name}</p>
        <div className="linking">
          <button className="github"><a href={github_link} target="_blank">Github</a></button>
          {(live_link) ? <button className="live-project"><a href={live_link} target="_blank">Live</a></button>: null}
        </div>
      </div>
      <p>{description}</p>
      <div className="button-list">
        {technologies.map((single) => {
          return <div>{single}</div>;
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
