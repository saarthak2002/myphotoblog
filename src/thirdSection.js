import monumentImage from './washmonu.png';

const content = "Lorem ipsum dolor sit amet. Et ipsum cupiditate qui eligendi rerum et voluptatem esse et velit sunt eum provident cupiditate? Ut consequatur deserunt est quisquam quibusdam sed harum autem sit aliquam soluta et Quis tenetur eos sint possimus et error sunt.";


export function ThirdSection() {
    return(
        <section className='lastSection'>
        <div className='topSection-left'>
        <h2>Washington DC</h2>
        <p>
        {content}
        </p>
        <button className='viewButton'>View More</button>
        </div>
        <div className='topSection-rigt'>
          <img src={monumentImage} alt="logo" height='640 px' width='480 px'/>
        </div>
      </section>
    )
}