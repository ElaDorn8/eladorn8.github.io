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
     <a href='#'><img src={getImageUrl(imageID)} /></a>
     <p id='cardFont'>{description}</p>    
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
        title="CSS/grid"
        imageID="two"
        description="Recreated the Modian picture using grid"
    />

<Card
        title="Flexbox"
        imageID="three"
        description="Utilizing flexbox to have all three 'cards' on one line"
    />

<Card
        title="Bootstrap"
        imageID="four"
        description="Recreate website using bootstrap"
    />
<Card
        title="First JavaScript"
        imageID="five"
        description="My first javascript game. No event handlers."
    />
   
    </>
     )
}
export default ProjectCards;