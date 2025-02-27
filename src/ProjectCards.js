import './ProjectCards.css';

function getImageUrl(imageID){
    return(
        'img/'+
        imageID+
        '.png'
    );
}

function Card({
       title,
       imageID,
       description
    }){
        return(
<div  className= 'projectCard'>    
     <h3>{title}</h3>    
     <img src={getImageUrl(imageID)} />
     <p style={{fontSize: 18}}>{description}</p>    
    </div>
        )
    }


function ProjectCards(){    
    return (
   <>
    <Card
        title="CSS"
        imageID="one"
        description="Some CSS practice"
    />

    <Card
        title="CSS"
        imageID="two"
        description="Some more CSS practice"
    />

<Card
        title="Flexbox"
        imageID="three"
        description="Utilizing flexbox to have all three 'cards' on one line"
    />
   
    </>
     )
}
export default ProjectCards;