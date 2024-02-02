import React from 'react';
import '../../../index.css';
import temp from '../../../Assets/SE3350.jpg'

const Jan_news = () => {
    return(
        <div>
            <a href='newsletter'>
                <button className='newsletter_button'>Back</button>
            </a>
            <div className='newsletter_container'>
                <h1>Placeholder Title</h1>
            </div>
            <div className='newsletter_container'>
                <img src={temp} className='newsletter_image' alt='Newsletter Object'></img>
            </div>
            <div className='newsletter_writing'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra ante orci, 
                    sit amet volutpat felis iaculis ut. In hac habitasse platea dictumst. Quisque lorem purus, 
                    commodo sit amet sem fringilla, ultrices pellentesque lacus. Nam porta massa nisi. Nunc feugiat 
                    porttitor sollicitudin. Nam leo urna, fermentum ac consequat id, lacinia vel velit. Morbi fermentum, 
                    dui vitae pretium sollicitudin, metus lorem semper erat, sed pulvinar ligula orci eget sapien. 
                    In efficitur augue sapien, non dictum neque hendrerit sit amet. Donec quis purus a quam lacinia placerat 
                    eget sit amet lorem. Praesent placerat consequat tortor, et aliquam tellus posuere et. Etiam feugiat metus ac augue pretium ultricies.</p>
                
                    <p>Nulla nec nisl velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vel ultricies turpis. Ut sit amet dui urna. 
                    Aenean fringilla molestie sem, ultricies hendrerit felis blandit eget. Vestibulum blandit euismod ipsum, non dignissim neque. 
                    Aenean diam turpis, porta sit amet lacus sit amet, vestibulum cursus elit. Fusce ac maximus velit. Donec mattis lobortis nisl, 
                    sit amet venenatis risus dapibus vel. Praesent quis enim sollicitudin, lacinia arcu sed, feugiat purus. Integer fringilla diam vitae magna mattis, 
                    eu blandit risus lobortis.</p>
            </div>
        </div>
    );
}

export default Jan_news;