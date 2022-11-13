
import "./style.css"


const Section = ({title, body, extraHeaderContent}) => ( 
<section>
<div className="list">
<h2 className="list__header">{title}</h2>
{extraHeaderContent}
</div>
<div className="list__tasks">
<div className="form__hiddenButtons"></div>
{body}
</div>
</section>
)

export default Section;