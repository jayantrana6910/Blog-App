import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
    
    state = {
        blog: []
    }
    
    componentDidMount() {
        console.log('Component Mounted');
        var that = this;
        fetch('http://localhost:3000/api/Games').then(function(response){
            response.json().then(function(data) {
                that.setState({blog: data});
            })
        })
    }
    
    render() {
        let blog = this.state.blog;
        return (
            <div clasName='container'>
                	<div id="fh5co-offcanvas">
                    <a href="#" className="fh5co-close-offcanvas js-fh5co-close-offcanvas"><span><i className="icon-cross3"></i> <span>Close</span></span></a>
                    <div className="fh5co-bio">
                        <figure>
                            <img src={require('../../src/style/images/person1.jpg')} alt="Free HTML5 Bootstrap Template" className="img-responsive"/>
                        </figure>
                        
                    </div>
                    
                    <div className="fh5co-menu">
                        <div className="fh5co-box">
                            <h3 className="heading">Categories</h3>
                            <ul>
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Style</a></li>
                                <li><a href="#">Photography</a></li>
                                <li><a href="#">Food &amp; Drinks</a></li>
                                <li><a href="#">Culture</a></li>
                            </ul>
                        </div>
                    <div className="fh5co-box">
                        <h3 className="heading">Search</h3>
                        <form action="#">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Type a keyword"/>
                            </div>
                        </form>
                    </div>
                </div>	
            </div>    
            
            <header id="fh5co-header">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-lg-12 col-md-12 text-center">
                            <h1 id="fh5co-logo"><a href="index.html">Gamers Night</a></h1>
                        </div>
                    </div>
                </div>
            </header>

    
                            
                            
                <div className="container-fluid">
		<div className="row fh5co-post-entry">
            
			
            {blog.map(blogs => (<article  key={blogs.blogid} className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12">
				<Link to={'/article/' + blogs.blogid}><figure>
					<a href="single.html"><img src={require('../../src/style/images/pic_1.jpg')} alt="Image" className="img-responsive"/></a>
				</figure>
                                                    <span className="fh5co-meta">{ blogs.author }</span>
				
				<h2 className="fh5co-article-title"><a href="single.html">{ blogs.title }</a></h2>
				<span className="fh5co-meta fh5co-date">{ blogs.date.split('T')[0] }</span></Link>
			</article>))}
            
		</div>
	</div>
    
            
            </div>
        )
    }
}

export default App;