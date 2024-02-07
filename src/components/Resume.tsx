import { ResumeItemProps } from '../Types';

export function Resume(props: { items: ResumeItemProps[] }) {
    return (
        <div className="resume">
            {props.items.map((resumeItem) => <ResumeItem item={resumeItem} key={resumeItem.company + resumeItem.dateRange} />)}
        </div>
    );
}

function ResumeItem(props: { item: ResumeItemProps }) {
    return (
        <div className="role">
            <div className="dot" />
            <div className="content">
                <h3>{props.item.title}</h3>
                <p><b>{props.item.company}</b> · <i>{props.item.dateRange}</i></p>
                <p>{props.item.description}</p>
                <div className="skill-list" >{props.item.skills.map((skill) => <div className="skill-pill" key={skill}>{skill}</div>)}</div>
            </div>

        </div >);
}
