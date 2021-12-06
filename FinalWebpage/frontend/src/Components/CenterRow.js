import React from "react";

function CenterRow(props){
    if(props.stage == 1){
        return (
            <div id="outer">
                <h1>{"Group 13 Project"}</h1>
                <p className = "Team_Members">
                James Chiar, Yu-Lin Chien, Kelley Chu, Sarah Gerard, Prabhdeep Kainth, Matthew Meer, Bi Nguyen, Joshua Sanchez, Sreeram Sandrapati, Rayum Shahed, Darren Tran
                </p>
                <div id = "bio">
                    <p className = "Bio">
                    With the rise of big data, machine learning, and AI, companies have been seeking ways to utilize 
                    these technologies to increase profit. The vast amounts of customer data being generated allows us 
                    insights into what it is that attracts customers to certain products and services. As more data is gathered,
                    opportunities to use this data are also expanded. One of the main ways of using this data is creating better 
                    performing marketing tools aimed at target audiences. In order to do this, companies need to know which audiences
                    are attracted to their advertisements, and which audiences they don’t need to waste resources on. Our research seeks
                    to find machine learning models which can accurately predict the effectiveness of a marketing campaign based on 
                    customer data. We will seek to discover which attributes of customer data are most strongly correlated with what
                    kind of products they will buy, and how these attributes relate to each other to predict customer habits. With 
                    the knowledge of what attributes of customer data make marketing campaigns successful, companies can use machine
                    learning models like the ones we researched to better understand which customers they should be targeting for 
                    specific ad campaigns.
                    </p>
                    <p className = "Bio">
                    In the past decade, the data we generate has vastly increased as we find new ways to collect data from everyday 
                    life. In particular, customer data is higher than ever before with the rise of social media and online shopping.
                    Companies like Amazon and Facebook observe each interaction of their users and use this information to show
                    their customers what they want to see. Such companies are already using customer data and machine learning
                    to their advantage. On nearly every website that we visit, advertisements are generated specifically to
                    peak our individual interest. Often it is machine learning algorithms that are trying to determine what
                    kind of advertisement a user is going to be interested in and what advertisements will thus be shown as
                    a user scrolls through different websites. Our research seeks to further understand how different customer
                    attributes relate to their buying habits, and if that will lead to them accepting store promotions. 
                    Besides trying to find models that could predict what a customer would buy, we were also able to look
                    at how we can predict how much a customer will buy.
                    </p>
                </div>
                <div className="CenterRow">
                    {props.children}
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}
export default CenterRow;