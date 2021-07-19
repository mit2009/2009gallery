var baseUrl = "http://designed.mit.edu/gallery/";

import { Navigation, updateNavigationBar } from "./nav.jsx";
import { classColors } from "./colors.jsx";
import { timingSafeEqual } from "crypto";

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var TeamContent = React.createClass({
    render: function () {
        var project = this.props.project;

        return (
            <div className="project-content">
                <h2 className="fixed-topbar">{project.projName}</h2>
                <h3 className="team">Team</h3>
                <p>
                    {project.projTeam}
                </p>
                <p></p>
                <div className="additional-links">
                    <a href={project.projCode}>Team Code of Ethics</a>
                </div>
                <div className="team-photo">
                    <a href={baseUrl + `data/${this.props.year}/final/photos/original/${project.projColor}1.jpg`}>
                        <img src={baseUrl + `data/${this.props.year}/final/photos/small/${project.projColor}1.jpg`} />
                    </a>
                    <a href={baseUrl + `data/${this.props.year}/final/photos/original/${project.projColor}2.jpg`}>
                        <img src={baseUrl + `data/${this.props.year}/final/photos/small/${project.projColor}2.jpg`} />
                    </a>
                </div>
                <h3 className="3-ideas">3 Ideas</h3>
                {this.renderIdeaPosters()}

                <h3 className="sketch-models">Sketch Models</h3>
                {this.renderTeamSections("sketch models", "sketch")}

                <h3 className="mock-ups">Mock-ups</h3>
                {this.renderTeamSections("mock-up", "mockup")}

                <h3 className="assembly">Assembly Review
                        {this.renderDirectLink("assembly")}</h3>
                {this.renderAssemblySection()}

                <h3 className="technical-review">Technical Review
                        {this.renderDirectLink("technical-review")}</h3>
                {this.renderTechReviewSection()}

                <h3 className="final">Final Presentation
                        {this.renderDirectLink("final")}</h3>
                {this.renderFinalSection()}
            </div>
        );
    },
    copyToClipboard: function (linkId) {
        console.log(linkId);
        var copyText = document.getElementById(linkId);
        copyText.select();
        document.execCommand("copy");
    },
    renderDirectLink: function (linkId, linkTitle = "Copy Direct Link") {
        let copyLink = window.location.href.split('#')[0] + '#' + linkId;
        return (
            <span onClick={() => this.copyToClipboard(linkId)} className="direct-link">
                <span tabIndex="1" className="copy-icon">
                    <span className="copy-text">{linkTitle}</span>
                </span>
                <input type="text" className="hidden-textbox" value={copyLink} id={linkId} />
            </span>
        )
    },
    renderIdeaPosters: function (sectionLetter) {
        var ideas = this.props.project.deliverables.ideas;

        var project = this.props.project;
        var year = this.props.year;

        var ideasPics = [];
        var prevSection = "";
        var sections = [];
        for (var s in ideas) {
            if (prevSection.charAt(0) !== s.charAt(0)) {
                if (ideasPics.length > 0) {
                    sections.push(<p className="posters">{ideasPics}</p>);
                    ideasPics = [];
                }
                var highlightColor = classColors[project.projColor];
                sections.push(
                    <h4 key={`ideas-header-${s.charAt(0)}`}>
                        <span className="section-tag" style={{ borderColor: highlightColor }}>Section&nbsp;
                        <em>{s.charAt(0)}</em>
                        </span>
                        {this.renderDirectLink("ideas-header-" + s.charAt(0))}
                    </h4>,
                );
                prevSection = s;
            }
            ideasPics.push(
                <a href={baseUrl + `data/${year}/ideas/${project.projColor}${s}.jpg`}>
                    <img className="poster" src={baseUrl + `data/${year}/ideas/${project.projColor}${s}.jpg`} key={`idea-${s}`} />
                </a>
            );
        }
        sections.push(<p className="posters">{ideasPics}</p>);
        return sections;
    },


    renderTeamSections: function (sectionDisplayName, sectionKey) {
        var project = this.props.project;
        var year = this.props.year;
        var sectionTeams = project.deliverables[sectionKey];

        var elements = [];
        for (var s in sectionTeams) {
            if (s.substring(s.length - 1).toUpperCase() !== 'D') {
                // TODO: Temporarily remove Demo Videos
                var highlightColor = classColors[project.projColor];
                elements.push(
                    <h4 key={`${sectionKey}-${s}-header`}>
                        <span className="section-tag" style={{ borderColor: highlightColor }}>{sectionDisplayName}
                            <em> {s}</em>
                        </span> {sectionTeams[s].name}
                        {this.renderDirectLink(`${sectionKey}-${s}-${sectionTeams[s].name}`)}
                    </h4>,
                    <div className="milestone-container" key={`${sectionKey}-${s}`}>
                        <div className="milestone-media">
                            <iframe src={`https://player.vimeo.com/video/${sectionTeams[s].vimeoId}`} width="400" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                                allowfullscreen></iframe>
                            <div className="milestone-images">
                                <a href={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_1.jpg`}><img src={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_1_sm.jpg`} /></a>
                                <a href={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_2.jpg`}><img src={baseUrl + `data/${year}/${sectionKey}/photos/${project.projColor}${s}_2_sm.jpg`} /></a>
                            </div>
                        </div>
                        <div className="additional-links">
                            <div><a href={baseUrl + `data/${year}/${sectionKey}/slides/${project.projColor}${s}.pdf`}>View Presentation Slides</a></div>
                            <div><a href={baseUrl + `data/${year}/${sectionKey}/movies/${project.projColor}${s}.mp4`} download>Download Original Video</a></div>
                        </div>
                    </div>,
                );
            }
        }

        return elements;
    },

    renderAssemblySection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var assembly = project.deliverables.assembly;

        return [
            <div className="milestone-container" key="assembly-section">
                <div className="milestone-media">
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/assembly/${project.projColor}Assembly.jpg`}><img className="assembly-image" src={baseUrl + `data/${year}/assembly/${project.projColor}Assembly.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/assembly/movies/${project.projColor}.mp4`} download>Download Original Video</a></div>
                    <div><a href={baseUrl + `data/${year}/assembly/${project.projColor}Contract.pdf`}>View Product Contract</a></div>
                </div>
            </div>,
        ];
    },

    renderTechReviewSection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var section = project.deliverables.tech;

        return [
            <div className="milestone-container" key="tech-section">
                <div className="milestone-media">
                    <iframe src={`https://player.vimeo.com/video/${section.vimeoId}`} width="600" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                        allowfullscreen></iframe>
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}1.jpg`}><img src={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}1_sm.jpg`} /></a>
                        <a href={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}2.jpg`}><img src={baseUrl + `data/${year}/tech/photos/${project.projColor.capitalize()}2_sm.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/tech/movies/${project.projColor}.mp4`} download>Download Original Video</a></div>
                </div>
            </div>,
        ];
    },

    renderFinalSection: function () {
        var project = this.props.project;
        var year = this.props.year;
        var section = project.deliverables.final;

        const url = section.vimeoId ? `https://player.vimeo.com/video/${section.vimeoId}` : `http://www.youtube.com/embed/${section.youtubeId}`;

        return [
            <div className="milestone-container" key="final-section">
                <div className="milestone-media">
                    <iframe src={url} width="600" height="240" frameborder="0" webkitallowfullscreen mozallowfullscreen
                        allowfullscreen></iframe>
                    <div className="milestone-images">
                        <a href={baseUrl + `data/${year}/final/photos/original/${project.projColor}1.jpg`}><img src={baseUrl + `data/${year}/final/photos/small/${project.projColor}1.jpg`} /></a>
                        <a href={baseUrl + `data/${year}/final/photos/original/${project.projColor}2.jpg`}><img src={baseUrl + `data/${year}/final/photos/small/${project.projColor}2.jpg`} /></a>
                    </div>
                </div>
                <div className="additional-links">
                    <div><a href={baseUrl + `data/${year}/final/slides/${project.projColor}.pdf`}>View Presentation Slides</a></div>
                    <div><a href={baseUrl + `data/${year}/final/extras/${project.projColor}_brochure.pdf`}>View Product Brochure</a></div>
                    <div><a href={baseUrl + `data/${year}/final/movies/${project.projColor}.mp4`} download>Download Original Video</a></div>
                </div>
            </div>,
        ];
    }
});

var sections = {
    'team': 1,
    '3-ideas': 2,
    'sketch-models': 3,
    'mock-ups': 4
}

var scrollBreaks = [];

function updateSidemenuHighlight() {
    console.log('triggered');

    var closestSection = 0;
    var section = 'team';
    var scrollTop = $(window).scrollTop();
    var offset = 200
    for (var i in sections) {
        if (sections[i] < scrollTop + offset && closestSection < sections[i]) {
            closestSection = sections[i];
            section = i;
        }
    }
    $('h3').each(function () {
        $('li').removeClass('sidemenu-highlight');
    })
    $('li.m-' + section).addClass('sidemenu-highlight');

    // window.location.hash = section;

}

function scrollToSection(section) {
    setTimeout(function () {
        console.log('locating', section);
        if ($('h3.' + section).length > 0) {
            $(window).scrollTo($('h3.' + section), {
                offset: -50,
                duration: 300
            })
            updateSidemenuHighlight();
        } else if ($('input#' + section).length > 0) {
            console.log('scrolling to... input#' + section)
            $(window).scrollTo($('input#' + section), {
                offset: -150,
                duration: 300
            })
            updateSidemenuHighlight();
        }

    }, 500, section)
}

function buildSidemenu() {
    $('h3').each(function () {
        sections[$(this).attr('class')] = $(this).offset().top;
    })
    $('.project-sidemenu').on('click', 'li', function () {
        scrollToSection($(this).data('section'));
        window.location.hash = $(this).data('section');
    })
}

var locationHash;

$(function () {
    function parseQuery(qstr) {
        if (qstr === undefined || qstr.length === 0) {
            return {};
        }

        var query = {};
        var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].split('=');
            query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
        }
        return query;
    }

    var urlLocation = parseQuery(window.location.search);
    if (urlLocation.year != null
        && DATA[urlLocation.year] !== undefined
        && urlLocation.team != null
        && DATA[urlLocation.year].projects !== undefined) {

        var teamProject = DATA[urlLocation.year].projects[urlLocation.team]

        if (teamProject !== undefined) {

            ReactDOM.render(
                <TeamContent project={teamProject} year={urlLocation.year} />,
                document.getElementById('project-content')
            );

            // TODO: Move

            ReactDOM.render(
                <Navigation teamColor={urlLocation.team} teamYear={urlLocation.year} />,
                document.getElementById('navigation')
            );

            // TODO: Figure out Clipboardy
            new Clipboard('.btn');

            // handle scrolling after the DOM has rendered our elements
            $(window).scroll(function () {
                updateSidemenuHighlight();
                updateNavigationBar();
            });

            updateNavigationBar();
            buildSidemenu();

            locationHash = window.location.hash;
            console.log('checking', locationHash)
            if (locationHash !== undefined && locationHash !== "") {
                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                }
                scrollToSection(locationHash.replace(/[^\-A-Za-z0-9]/g, ''));
            }
        } else {
            // handle unknown case
        }
    } else {
        // handle bad query param case
    }
});
