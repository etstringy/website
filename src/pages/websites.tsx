import React, { Component } from 'react'
import Twemoji from 'react-twemoji';

import Blob1 from '../assets/blob1.svg'

interface WebsitesState {
    blob: string;
}

export default class Websites extends Component<any, WebsitesState> {
    constructor(props: any) {
        super(props)

        this.state = {
            blob: Blob1
        }
    }

    render() {
        return (
            <div>
                <div className="sites_container music_container">
                    <div className="about_image_text">
                        <div className="sites_left">
                            <h1 className="page_title">Other websites</h1>
                            <Twemoji options={{ className: 'twemoji', ext: '.svg', size: "svg" }}>
                                <div className="sites_items_container">
                                    <Site title="Disq" description="Screenshot uploads and Web tools 🔗" gradient="grad_disq" link="https://disq.me"/>
                                    <Site title="Misq" description="Random storage for internet things. 🤔" gradient="grad_kei" link="https://kei.disq.me"/>
                                </div>
                            </Twemoji>
                        </div>
                        {/* <div className="sites_right">
                            <img className="sites_blob" src={this.state.blob} alt="blob"></img>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

interface SiteProps {
    logo?: string;
    title: string;
    description: string;
    gradient: string;
    link: string;
}

class Site extends Component<SiteProps> {
    render() {
        return (
            <div className={"sites_site " + this.props.gradient} onClick={() => window.location.href = this.props.link}>
                {(this.props.logo) ? <img src={this.props.logo} alt={this.props.title}></img> : void(0)}
                <div className="sites_site_content">
                    <h1>{this.props.title}</h1>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}