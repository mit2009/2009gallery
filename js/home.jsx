var baseUrl = "http://designed.mit.edu/gallery/data/"

import { Navigation, updateNavigationBar } from "./nav.jsx";

var GalleryContent = React.createClass({
    render: function () {
        var years = Object.keys(DATA).reverse();
        var yearSections = [];
        for (var i in years) {
            var year = years[i]
            yearSections.push(
                <div>
                    <h2>{year}</h2>
                    <h3>{DATA[year].themeName}</h3>
                    {this.renderGalleryYear(year)}
                </div>
            )
        }
        return (<div>{yearSections}</div>);
    },

    renderGalleryYear: function (year) {
        // var ideas = this.props.project.deliverables.ideas;
        var teams = [];
        var projects = DATA[year].projects

        for (var s in projects) {
            var backgroundUrl = 'url("' + baseUrl + year + '/final/photos/small/' + s + '1.jpg")';
            var teamUrl = `view.html?year=${year}&team=${s}`
            teams.push(
                <a href={teamUrl}>
                    <div style={{ backgroundImage: backgroundUrl }} className="thumbnail-bg">
                        <div className="product-info">
                            <h4>{projects[s].projName}</h4>
                            <p>{projects[s].projDesc}</p>
                        </div>
                    </div>
                </a>,
            );

        }

        var highlights = DATA[year].highlights;
        var highlightElements = [];
        var highlightGroup = [];
        for (var highlight of highlights) {
            if (highlight['subheading']) {
                if (highlightGroup.length != 0) {
                    // Push previous highlight group
                    highlightElements.push(
                        <div className="highlight-group">{highlightGroup}</div>
                    );
                    highlightGroup = [];
                }
                highlightGroup.push(
                    <div className="subheading">
                        {highlight.subheading}
                    </div>
                )
            } else {
                if (highlight.youtubeId) {
                    // Due to Vimeo hating us, now bumping youtube links as priority
                    highlightGroup.push(
                        <div className="highlight-link">
                            <a href={`https://www.youtube.com/watch?v=${highlight.youtubeId}`}>{highlight.linkLabel}</a>
                        </div>
                    )
                } else if (highlight.vimeoId) {
                    highlightGroup.push(
                        <div className="highlight-link">
                            <a href={`http://vimeo.com/${highlight.vimeoId}`}>{highlight.linkLabel}</a>
                        </div>
                    )
                } else {
                    // Some data has been malformed, and contains an additional data/. 
                    // Dirty hack to strip it.
                    let linkUrl = highlight.linkUrl.indexOf("data/") >= 0 ? highlight.linkUrl.replace('data/', '') : highlight.linkUrl;
                    highlightGroup.push(
                        <div className="highlight-link">
                            <a href={baseUrl + linkUrl}>{highlight.linkLabel}</a>
                        </div>
                    )
                }
            }
        }
        // Push final highlighht group
        highlightElements.push(<div className="highlight-group">{highlightGroup}</div>);

        return (
            <div>
                <div className="thumbnail-container">
                    {teams}
                </div>
                <div className="highlights-container">
                    <h4>{year} Highlight Links</h4>
                    <div className="highlight-groups-container">{highlightElements}</div>
                </div>
            </div>

        )
    },
});

$(function () {

    ReactDOM.render(
        <GalleryContent />,
        document.getElementById('gallery-content')
    );

    // TODO: Move

    ReactDOM.render(
        <Navigation />,
        document.getElementById('navigation')
    );

    $(window).scroll(function () {
        updateNavigationBar();
    })

    updateNavigationBar();

})



