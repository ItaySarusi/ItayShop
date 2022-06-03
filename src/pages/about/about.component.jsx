import React from 'react'
import {AboutContainer, List, ListItem, Title, Typography} from "./about.styles";

const About = () => {
    return(
        <AboutContainer>
            <Title className='text-center'>ABOUT Itay Shop: </Title>
            <List>
                <ListItem>
                    <Title> How The Website Works </Title>
                    <List>
                        <ListItem>
                            <Typography>
                                Itay Shop is a clothing shopping website where you choose among various products, add them to your cart and then order them.
                            </Typography>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Title> Project features </Title>
                    <List>
                        <ListItem>
                            <Typography>
                                The site has two types of client types: Users and Admins.<br/>
                                In order to access them you will need to log in with an Email and Password from the log-in page.<br/>
                                Each user can order by adding products to his cart and checking out.<br/>
                                Each user can edit or delete his orders from the "View your orders" page.<br/>
                                Admins can edit and delete theirs and other users' orders from the "Admin" page, which is only available for admins.
                                <br/><br/>
                                The products are loaded from the "collections.json" file that stores all of the collections.<br/>
                                The users list is loaded from the pre-set "users.JSON" file that stores the starting point of the users list.<br/>
                                That list is uploaded to the site data and every time a new user signs up, it is added to the site data, and not to the "users.JSON" file.<br/>
                                In order to reset the site's user list to only contain what the "users.JSON" file holds do the following:<br/>
                                1) Inspect site.<br/>
                                2) Press the 'Application' tab.<br/>
                                3) Press the 'Storage' sub-tab.<br/>
                                4) Make sure "including third-party cookies" is checked.<br/>
                                5) Press "Clear site data" to finally reset the site's user list to only contain what the users.JSON file holds.<br/>
                                (You can also add users to the JSON file in the code and save the changes)<br/><br/>

                                *** FOR EXTENDED INFORMATION, GO OVER TO THE "README.md" FILE. ***
                            </Typography>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <Title> Why I chose to make this app </Title>
                    <List>
                        <ListItem>
                            <Typography>
                                I chose to build this particular app because I love shopping for clothes and outfits online, so I really wanted to understand the process of building a site like this.<br/><br/><br/>
                                P.S - Press the crown icon to return to the homepage :)
                            </Typography>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </AboutContainer>
    )
}

export default About
