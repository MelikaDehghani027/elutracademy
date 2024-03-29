import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import * as styles from '../styles/ElSkill.css'

export default class MenuExampleSecondaryPointing extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        console.log(styles)
        return (
            <div>
                <Menu className={styles.myMenu} pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item className={styles.menuitem}
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Segment>
            </div>
        )
    }
}