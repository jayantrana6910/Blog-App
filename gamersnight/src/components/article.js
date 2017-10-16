import React, { Component } from 'react';

class Article extends Component {
    
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
        let para = this.props.match.params.id;
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
		<div className="row fh5co-post-entry single-entry">
			{blog.map(blogs => (<article  key={blogs.blogid} className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
                {blogs.blogid == para ? <div>
                 <figure>
					<img src={require('../../src/style/images/single_1.jpg')} alt="Image" className="img-responsive" />
				</figure>
				<span className="fh5co-meta"><a href="single.html">{ blogs.author }</a></span>
				<h4 className="fh5co-article-title"><a href="single.html">{ blogs.title }</a></h4>
				<span className="fh5co-meta fh5co-date animate-box">March 6th, 2016</span>

				<div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
					<div className="row">
						<div className="col-lg-12 cp-r">
							<p>{ blogs.content }</p>
						</div>
						<div className="col-lg-4 animate-box">
							<div className="fh5co-highlight right">
								<h4>Highlight</h4>
								<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
							</div>
						</div>
					</div>

				</div>
                                </div>
                : <div></div>}
				
			</article>))}
		</div>
	</div>
            </div>
        )
    }
    
}

export default Article;