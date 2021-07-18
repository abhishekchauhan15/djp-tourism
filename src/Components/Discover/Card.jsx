import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div>
            <div className="wrapper">
                <div className="card"><img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt="alt"/>
                    <div className="info">
                        <h1>{props.name}</h1>
                        <p>{props.content}</p><button >360°</button>
                    </div>
                </div>
                {/* <iframe id="1" className="hide" width="560" height="315" src="https://www.youtube.com/embed/CHYsUwCsTfU?start=76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <div className="card"><img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <div className="info">
                    <h1>Road</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
                </div>
            </div>
            <div className="card"><img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
                <div className="info">
                    <h1>Protester</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
                </div>
            </div> */}
            </div>
        </div>
    )
}

