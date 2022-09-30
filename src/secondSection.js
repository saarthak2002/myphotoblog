import nyc from './nyc.png';

const content = "Lorem ipsum dolor sit amet. Et ipsum cupiditate qui eligendi rerum et voluptatem esse et velit sunt eum provident cupiditate? Ut consequatur deserunt est quisquam quibusdam sed harum autem sit aliquam soluta et Quis tenetur eos sint possimus et error sunt."

export function SecondSection() {
    return(
        <section className='secondSection'>
         <div className='topSection-rigt'>
          <img src={nyc} alt="logo" height='480 px' width='640 px'/>
        </div>
        <div className='secondSection-left'>
        <h2>New York</h2>
        <p>
          {content}
        </p>
        <button className='viewButton'>View More</button>
        </div>
       
      </section>
    )
}